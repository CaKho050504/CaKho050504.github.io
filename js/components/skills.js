function renderSkills() {
    const skills = document.querySelector(".skills-section");
    const skillCards = portfolioData.skillsData.map((group) => `
        <article class="skill-category">
            <div class="skill-category-header">
                <span class="skill-category-icon"><i class="fas ${group.icon}" aria-hidden="true"></i></span>
                <h3>${group.category}</h3>
            </div>
            <div class="skill-list">
                ${group.items.map((skill) => `<span class="skill-badge">${skill}</span>`).join("")}
            </div>
        </article>
    `).join("");

    const learning = portfolioData.learningData.length ? `
        <div class="learning-panel">
            <span class="learning-title"><i class="fas fa-seedling"></i> Đang học thêm</span>
            <div class="skill-list">${portfolioData.learningData.map((item) => `<span class="skill-badge soft">${item}</span>`).join("")}</div>
        </div>
    ` : "";

    skills.innerHTML = `
        <div class="container">
            <div class="section-heading">
                <span class="section-kicker">Tech stack</span>
                <h2 class="section-title">Kỹ Năng</h2>
                <p class="section-subtitle">Các công nghệ và công cụ tôi đang sử dụng để xây dựng sản phẩm web.</p>
            </div>
            <div class="skills-container">${skillCards}</div>
            ${learning}
        </div>
    `;
}
