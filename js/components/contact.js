let contactWidgetLastFocus = null;

function renderContact() {
    document.querySelector(".contact-widget")?.remove();
    document.querySelector(".floating-contact-btn")?.remove();

    const { email } = portfolioData.personal;

    const widget = document.createElement("div");
    widget.innerHTML = `
        <button class="floating-contact-btn" type="button" title="Liên hệ với tôi" aria-label="Liên hệ với tôi" aria-expanded="false">
            <i class="fas fa-headset" aria-hidden="true"></i>
            <span>Liên hệ</span>
        </button>

        <section class="contact-widget" aria-label="Khung chat liên hệ" aria-hidden="true">
            <header class="contact-widget-header">
                <div>
                    <h2>Liên hệ với tôi</h2>
                    <p>Tôi sẽ phản hồi sớm nhất có thể</p>
                </div>
                <div class="contact-widget-actions">
                    <button type="button" class="contact-widget-minimize" aria-label="Thu gọn liên hệ">
                        <i class="fas fa-minus" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="contact-widget-close" aria-label="Đóng liên hệ">
                        <i class="fas fa-xmark" aria-hidden="true"></i>
                    </button>
                </div>
            </header>

            <div class="contact-widget-body">
                <div class="chat-greeting">
                    <strong>Xin chào 👋</strong>
                    <p>Bạn có thể để lại thông tin để tôi liên hệ lại với bạn.</p>
                    <a href="mailto:${email}"><i class="fas fa-envelope"></i> ${email}</a>
                </div>

                <form class="contact-widget-form" id="contactForm" novalidate>
                    <div class="form-field">
                        <label for="contactName">Họ và tên *</label>
                        <input id="contactName" name="name" type="text" autocomplete="name" placeholder="Nhập họ và tên của bạn" aria-describedby="contactNameError">
                        <small class="field-error" id="contactNameError"></small>
                    </div>
                    <div class="form-field">
                        <label for="contactPhone">Số điện thoại *</label>
                        <input id="contactPhone" name="phone" type="tel" autocomplete="tel" placeholder="Ví dụ: 0901 234 567" aria-describedby="contactPhoneError">
                        <small class="field-error" id="contactPhoneError"></small>
                    </div>
                    <div class="form-field">
                        <label for="contactEmail">Email</label>
                        <input id="contactEmail" name="email" type="email" autocomplete="email" placeholder="example@email.com" aria-describedby="contactEmailError">
                        <small class="field-error" id="contactEmailError"></small>
                    </div>
                    <div class="form-field">
                        <label for="contactMessage">Nội dung cần trao đổi *</label>
                        <textarea id="contactMessage" name="message" rows="4" placeholder="Bạn muốn trao đổi về vấn đề gì?" aria-describedby="contactMessageError"></textarea>
                        <small class="field-error" id="contactMessageError"></small>
                    </div>
                </form>
            </div>

            <footer class="contact-widget-footer">
                <button class="btn btn-primary contact-submit-btn" type="submit" form="contactForm">
                    <i class="fas fa-paper-plane" aria-hidden="true"></i>
                    <span>Gửi thông tin</span>
                </button>
                <p class="form-message" id="contactFormMessage" role="status"></p>
            </footer>
        </section>
    `;

    document.body.append(...widget.children);

    document.querySelector(".floating-contact-btn").addEventListener("click", openContactWidget);
    document.querySelector(".contact-widget-minimize").addEventListener("click", minimizeContactWidget);
    document.querySelector(".contact-widget-close").addEventListener("click", closeContactWidget);

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", handleContactSubmit);
    form.querySelectorAll("input, textarea").forEach((field) => {
        field.addEventListener("input", () => validateContactField(field));
        field.addEventListener("blur", () => validateContactField(field));
    });
}

function openContactWidget() {
    const widget = document.querySelector(".contact-widget");
    const trigger = document.querySelector(".floating-contact-btn");
    contactWidgetLastFocus = document.activeElement;
    widget.classList.add("open");
    widget.classList.remove("minimized");
    widget.setAttribute("aria-hidden", "false");
    document.body.classList.add("contact-widget-open");
    trigger.setAttribute("aria-expanded", "true");
    setTimeout(() => document.getElementById("contactName")?.focus(), 120);
}

function minimizeContactWidget() {
    const widget = document.querySelector(".contact-widget");
    const trigger = document.querySelector(".floating-contact-btn");
    widget.classList.remove("open");
    widget.classList.add("minimized");
    widget.setAttribute("aria-hidden", "true");
    document.body.classList.remove("contact-widget-open");
    trigger.setAttribute("aria-expanded", "false");
    trigger.focus();
}

function closeContactWidget() {
    const widget = document.querySelector(".contact-widget");
    const trigger = document.querySelector(".floating-contact-btn");
    widget.classList.remove("open", "minimized");
    widget.setAttribute("aria-hidden", "true");
    document.body.classList.remove("contact-widget-open");
    trigger.setAttribute("aria-expanded", "false");
    (contactWidgetLastFocus || trigger).focus();
}

function getContactErrors(values) {
    const phonePattern = /^(0|\+84)(\s|\.)?([3|5|7|8|9])([0-9](\s|\.|-)?){8}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = {};

    if (values.name.trim().length < 2) errors.name = "Họ tên cần tối thiểu 2 ký tự.";
    if (!phonePattern.test(values.phone.trim())) errors.phone = "Vui lòng nhập số điện thoại Việt Nam hợp lệ.";
    if (values.email.trim() && !emailPattern.test(values.email.trim())) errors.email = "Email chưa đúng định dạng.";
    if (values.message.trim().length < 10) errors.message = "Nội dung cần tối thiểu 10 ký tự.";

    return errors;
}

function getContactValues(form) {
    return {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        message: form.message.value
    };
}

function setFieldError(form, name, message = "") {
    const field = form[name];
    const error = document.getElementById(`contact${name[0].toUpperCase()}${name.slice(1)}Error`);
    field.setAttribute("aria-invalid", message ? "true" : "false");
    error.textContent = message;
}

function validateContactField(field) {
    const form = document.getElementById("contactForm");
    const errors = getContactErrors(getContactValues(form));
    setFieldError(form, field.name, errors[field.name]);
}

function validateContactForm(form) {
    const errors = getContactErrors(getContactValues(form));
    ["name", "phone", "email", "message"].forEach((name) => setFieldError(form, name, errors[name]));
    return Object.keys(errors).length === 0;
}

async function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.getElementById("contactFormMessage");
    const button = document.querySelector(".contact-submit-btn");
    const buttonText = button.querySelector("span");

    message.textContent = "";

    if (!validateContactForm(form)) {
        message.textContent = "Vui lòng kiểm tra lại thông tin vừa nhập.";
        message.className = "form-message error";
        return;
    }

    button.disabled = true;
    button.classList.add("loading");
    buttonText.textContent = "Đang gửi...";

    try {
        const result = await submitContactForm(getContactValues(form));
        if (result.ok) {
            message.textContent = "Cảm ơn bạn! Tôi đã nhận được thông tin và sẽ phản hồi sớm nhất.";
            message.className = "form-message success";
            form.reset();
        } else {
            message.textContent = contactConfig.fallbackMessage;
            message.className = "form-message notice";
        }
    } catch (error) {
        message.textContent = "Chưa thể gửi thông tin lúc này. Vui lòng liên hệ trực tiếp qua email.";
        message.className = "form-message error";
    } finally {
        button.disabled = false;
        button.classList.remove("loading");
        buttonText.textContent = "Gửi thông tin";
    }
}

document.addEventListener("keydown", (event) => {
    const widget = document.querySelector(".contact-widget.open");
    if (!widget) return;

    if (event.key === "Escape") {
        closeContactWidget();
        return;
    }

    if (event.key !== "Tab") return;

    const focusable = Array.from(widget.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    ));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});
