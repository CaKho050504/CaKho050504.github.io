function renderEducation() {
    const education = document.querySelector(".education-section");
    const cards = portfolioData.education.map((item) => `
        <article class="education-item">
            <div class="education-logo">
                ${item.logo ? `<img src="${item.logo}" alt="Logo ${item.school}" loading="lazy">` : `<i class="fas fa-graduation-cap"></i>`}
            </div>
            <div class="education-content">
                <div class="education-header">
                    <div>
                        <span class="eyebrow">${item.duration}</span>
                        <h3>${item.school}</h3>
                        <p>${item.degree}</p>
                    </div>
                    <span class="gpa">GPA: ${item.gpa}</span>
                </div>
                <div class="achievement-list">
                    ${item.achievements.map((achievement) => `
                        <div class="achievement-item">
                            <i class="fas fa-check" aria-hidden="true"></i>
                            <span>${achievement}</span>
                        </div>
                    `).join("")}
                </div>
                ${item.proofUrl ? `<a class="text-link" href="${item.proofUrl}" target="_blank" rel="noopener noreferrer">Xem minh chứng</a>` : ""}
            </div>
        </article>
    `).join("");

    education.innerHTML = `
        <div class="container">
            <div class="section-heading">
                <span class="section-kicker">Education</span>
                <h2 class="section-title">Học Vấn</h2>
            </div>
            <div class="education-container">${cards}</div>
        </div>
    `;
}
