const projectFilters = [
    { label: "Tất cả", value: "all" },
    { label: "Web", value: "web" },
    { label: "Chatbot", value: "chatbot" },
    { label: "Management", value: "management" }
];
let lastFocusedBeforeProject = null;

function renderProjects() {
    const projects = document.querySelector(".projects-section");
    const filters = projectFilters.map((filter) => `
        <button type="button" class="filter-btn project-filter-btn ${filter.value === "all" ? "active" : ""}" data-filter="${filter.value}">
            ${filter.label}
        </button>
    `).join("");

    const cards = portfolioData.projectsData.map((project, index) => `
        <article class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
                <span class="project-image-label">${project.categoryLabel}</span>
            </div>
            <div class="project-content">
                <span class="category-pill">${project.categoryLabel}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a
                        class="project-github-button"
                        href="${project.githubUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Mở GitHub ${project.title}"
                    >
                        <i class="fab fa-github" aria-hidden="true"></i>
                        GitHub
                    </a>
                    <button class="project-detail-button" type="button" onclick="openProjectModal(${index})">
                        Chi tiết
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    projects.innerHTML = `
        <div class="container">
            <div class="section-heading">
                <span class="section-kicker">SELECTED WORK</span>
                <h2 class="section-title">Dự Án</h2>
                <p class="section-subtitle">Những dự án thể hiện khả năng xây dựng giao diện, xử lý nghiệp vụ và phát triển hệ thống web.</p>
            </div>
            <div class="filter-group project-filter-group">${filters}</div>
            <div class="projects-container">${cards}</div>
        </div>
        <div class="project-modal" id="projectModal" aria-hidden="true">
            <div class="modal-panel project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle">
                <button class="modal-close" type="button" onclick="closeProjectModal()" aria-label="Đóng"><i class="fas fa-xmark"></i></button>
                <div id="projectModalBody"></div>
            </div>
        </div>
    `;

    initProjectFilters();
}

function initProjectFilters() {
    const buttons = document.querySelectorAll(".project-filter-btn");
    const cards = document.querySelectorAll(".project-card");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");

            cards.forEach((card) => {
                const isVisible = button.dataset.filter === "all" || card.dataset.category === button.dataset.filter;
                card.hidden = !isVisible;
            });
        });
    });
}

function openProjectModal(index) {
    const project = portfolioData.projectsData[index];
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("projectModalBody");
    lastFocusedBeforeProject = document.activeElement;

    body.innerHTML = `
        <img class="modal-image" src="${project.image}" alt="${project.imageAlt}">
        <span class="category-pill">${project.categoryLabel}</span>
        <h3 id="projectModalTitle">${project.title}</h3>
        <p class="project-modal-description">${project.description}</p>
        <div class="modal-grid">
            <section><h4>Mục tiêu dự án</h4><p>${project.goals}</p></section>
            <section><h4>Vai trò thực hiện</h4><p>${project.role}</p></section>
            <section><h4>Chức năng chính</h4><ul>${project.features.map((item) => `<li>${item}</li>`).join("")}</ul></section>
            <section><h4>Công nghệ sử dụng</h4><div class="project-tech">${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}</div></section>
            <section class="modal-wide">
                <h4>Link GitHub</h4>
                <a
                    class="project-github-button"
                    href="${project.githubUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mở GitHub ${project.title}"
                >
                    <i class="fab fa-github" aria-hidden="true"></i>
                    GitHub
                </a>
            </section>
        </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    lastFocusedBeforeProject?.focus();
}

document.addEventListener("keydown", (event) => {
    const modal = document.getElementById("projectModal");
    if (!modal?.classList.contains("active")) return;

    if (event.key === "Escape") {
        closeProjectModal();
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
    if (event.target?.id === "projectModal") closeProjectModal();
});
