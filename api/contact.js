const nodemailer = require("nodemailer");

const MAX_LENGTHS = {
    name: 100,
    phone: 20,
    email: 120,
    message: 2000,
    website: 200
};

function getRequestBody(req) {
    if (req.body && typeof req.body === "object") {
        return req.body;
    }

    if (typeof req.body === "string") {
        try {
            return JSON.parse(req.body);
        } catch {
            return {};
        }
    }

    return {};
}

function normalizeText(value, maxLength) {
    return String(value || "").trim().slice(0, maxLength + 1);
}

function isValidVietnamPhone(value) {
    const normalized = value.replace(/[\s.-]/g, "");
    return /^(?:0|\+84|84)(?:3|5|7|8|9)\d{8}$/.test(normalized);
}

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function cleanHeaderValue(value) {
    return String(value).replace(/[\r\n]+/g, " ").trim();
}

function getValidationErrors(values) {
    const errors = {};

    if (values.website) {
        errors.website = "Invalid request.";
    }

    if (values.name.length < 2) {
        errors.name = "Name is required.";
    } else if (values.name.length > MAX_LENGTHS.name) {
        errors.name = "Name is too long.";
    }

    if (!isValidVietnamPhone(values.phone)) {
        errors.phone = "Phone is invalid.";
    } else if (values.phone.length > MAX_LENGTHS.phone) {
        errors.phone = "Phone is too long.";
    }

    if (values.email && !isValidEmail(values.email)) {
        errors.email = "Email is invalid.";
    } else if (values.email.length > MAX_LENGTHS.email) {
        errors.email = "Email is too long.";
    }

    if (values.message.length < 10) {
        errors.message = "Message is required.";
    } else if (values.message.length > MAX_LENGTHS.message) {
        errors.message = "Message is too long.";
    }

    return errors;
}

module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ ok: false, message: "Method not allowed." });
    }

    const body = getRequestBody(req);
    const values = {
        name: normalizeText(body.name, MAX_LENGTHS.name),
        phone: normalizeText(body.phone, MAX_LENGTHS.phone),
        email: normalizeText(body.email, MAX_LENGTHS.email),
        message: normalizeText(body.message, MAX_LENGTHS.message),
        website: normalizeText(body.website, MAX_LENGTHS.website)
    };
    const errors = getValidationErrors(values);

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ ok: false, message: "Invalid contact form data." });
    }

    const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_RECEIVER_EMAIL } = process.env;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_RECEIVER_EMAIL) {
        return res.status(500).json({ ok: false, message: "Contact email is not configured." });
    }

    const safeName = escapeHtml(values.name);
    const safePhone = escapeHtml(values.phone);
    const safeEmail = values.email ? escapeHtml(values.email) : "Không cung cấp";
    const safeMessage = escapeHtml(values.message).replace(/\r?\n/g, "<br>");

    const emailTemplate = `
        <h2>Có khách để lại thông tin từ Portfolio</h2>
        <p><strong>Họ và tên:</strong> ${safeName}</p>
        <p><strong>Số điện thoại:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Nội dung cần trao đổi:</strong></p>
        <p>${safeMessage}</p>
        <hr />
        <p>Gửi từ chat liên hệ trên Portfolio.</p>
    `;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_APP_PASSWORD
            }
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${GMAIL_USER}>`,
            to: CONTACT_RECEIVER_EMAIL,
            replyTo: values.email || undefined,
            subject: cleanHeaderValue(`[Portfolio] Liên hệ mới từ ${values.name}`),
            html: emailTemplate
        });

        return res.status(200).json({ ok: true });
    } catch {
        return res.status(500).json({ ok: false, message: "Unable to send contact email." });
    }
};
