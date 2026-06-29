async function submitContactForm(payload) {
    const data = {
        name: payload.name.trim(),
        phone: payload.phone.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
        website: (payload.website || "").trim()
    };

    if (!contactConfig.api.enabled || !contactConfig.api.endpoint) {
        return {
            ok: false,
            reason: "not-configured",
            data
        };
    }

    const response = await fetch(contactConfig.api.endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("CONTACT_SUBMIT_FAILED");
    }

    return {
        ok: true,
        data
    };
}
