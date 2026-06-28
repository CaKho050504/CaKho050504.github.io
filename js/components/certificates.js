let lastFocusedBeforeCertificate = null;

function renderCertificates() {
    const certificates = document.querySelector(".certificates-section");
    const categories = ["Tất cả", ...new Set(portfolioData.certificatesData.map((cert) => cert.category))];

    const filters = categories.map((category) => `
        <button type="button" class="filter-btn certificate-filter-btn ${category === "Tất cả" ? "active" : ""}" data-filter="${category}">
            ${category}
        </button>
    `).join("");

    const cards = portfolioData.certificatesData.map((cert, index) => `
        <article class="certificate-card" data-category="${cert.category}">
            <div class="certificate-thumb">
                ${cert.image
                    ? `<img src="${cert.image}" alt="${cert.name}" loading="lazy">`
                    : `<i class="fas ${cert.icon}" aria-hidden="true"></i>`
                }
            </div>
            <div class="certificate-content">
                <span class="category-pill">${cert.category}</span>
                <h3>${cert.name}</h3>
                <p><i class="fas fa-building"></i> ${cert.issuer}</p>
                ${cert.date ? `<p><i class="fas fa-calendar"></i> ${cert.date}</p>` : ""}
                ${cert.proofUrl
                    ? `<button class="btn btn-small btn-secondary" type="button" onclick="openCertificateModal(${index})">Xem chứng chỉ</button>`
                    : ""
                }
            </div>
        </article>
    `).join("");

    certificates.innerHTML = `
        <div class="container">
            <div class="section-heading">
                <span class="section-kicker">Certificates</span>
                <h2 class="section-title">Chứng Chỉ & Khóa Học</h2>
            </div>
            <div class="filter-group">${filters}</div>
            <div class="certificates-container">${cards}</div>
        </div>
        <div class="certificate-modal" id="certificateModal" aria-hidden="true">
            <div class="certificate-modal-panel" role="dialog" aria-modal="true" aria-labelledby="certificateModalTitle">
                <button class="modal-close" type="button" onclick="closeCertificateModal()" aria-label="Đóng chứng chỉ">
                    <i class="fas fa-xmark" aria-hidden="true"></i>
                </button>
                <div id="certificateModalBody"></div>
            </div>
        </div>
    `;

    setupFilter(".certificate-filter-btn", ".certificate-card");
}

function openCertificateModal(index) {
    const cert = portfolioData.certificatesData[index];
    const modal = document.getElementById("certificateModal");
    const body = document.getElementById("certificateModalBody");
    lastFocusedBeforeCertificate = document.activeElement;

    body.innerHTML = `
        <div class="certificate-modal-media">
            <img src="${cert.proofUrl || cert.image}" alt="${cert.name}">
        </div>
        <div class="certificate-modal-copy">
            <span class="category-pill">${cert.category}</span>
            <h3 id="certificateModalTitle">${cert.name}</h3>
            <p><strong>Đơn vị cấp:</strong> ${cert.issuer}</p>
            ${cert.date ? `<p><strong>Ngày cấp:</strong> ${cert.date}</p>` : ""}
            ${cert.description ? `<p>${cert.description}</p>` : ""}
            <div class="certificate-modal-actions">
                <button class="btn btn-secondary" type="button" onclick="closeCertificateModal()">Đóng</button>
                <a class="btn btn-primary" href="${cert.proofUrl || cert.image}" target="_blank" rel="noopener noreferrer">Xem ảnh gốc</a>
            </div>
        </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
}

function closeCertificateModal() {
    const modal = document.getElementById("certificateModal");
    if (!modal?.classList.contains("active")) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    lastFocusedBeforeCertificate?.focus();
}

document.addEventListener("keydown", (event) => {
    const modal = document.getElementById("certificateModal");
    if (!modal?.classList.contains("active")) return;

    if (event.key === "Escape") {
        closeCertificateModal();
        return;
    }

    if (event.key !== "Tab") return;
    const focusable = Array.from(modal.querySelectorAll('a[href], button:not([disabled])'));
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

document.addEventListener("click", (event) => {
    if (event.target?.id === "certificateModal") closeCertificateModal();
});
