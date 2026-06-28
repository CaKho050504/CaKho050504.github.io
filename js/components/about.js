function renderAbout() {
    const about = document.querySelector(".about-section");
    const { title, role, description, info, images } = portfolioData.about;
    const paragraphs = description.map((text) => `<p>${text}</p>`).join("");
    const infoItems = info.map((item) => `
        <div class="info-item">
            <i class="fas ${item.icon}" aria-hidden="true"></i>
            <div>
                <strong>${item.label}</strong>
                ${item.href ? `<a href="${item.href}">${item.value}</a>` : `<span>${item.value}</span>`}
            </div>
        </div>
    `).join("");

    about.innerHTML = `
        <div class="container">
            <div class="section-heading">
                <span class="section-kicker">Giới thiệu</span>
                <h2 class="section-title">${title}</h2>
            </div>
            <div class="about-content">
                <div class="about-gallery">
                    ${images.map((img, index) => `<img src="${img}" alt="Khoảnh khắc cá nhân ${index + 1}" class="${index === 0 ? "featured" : ""}" loading="lazy">`).join("")}
                </div>
                <div class="about-text">
                    <span class="eyebrow">${role}</span>
                    ${paragraphs}
                    <div class="about-info">${infoItems}</div>
                </div>
            </div>
        </div>
    `;
}
