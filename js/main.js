function setupFilter(buttonSelector, cardSelector) {
    const buttons = document.querySelectorAll(buttonSelector);
    const cards = document.querySelectorAll(cardSelector);

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;
            cards.forEach((card) => {
                const isVisible = filter === "Tất cả" || card.dataset.category === filter;
                card.hidden = !isVisible;
                requestAnimationFrame(() => card.classList.toggle("is-visible", isVisible));
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderHero();
    renderAbout();
    renderSkills();
    renderEducation();
    renderCertificates();
    renderProjects();
    renderHobbies();
    renderBlog();
    renderContact();
    renderFooter();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll("section > .container, .project-card, .certificate-card, .skill-category, .hobby-card")
        .forEach((element) => revealObserver.observe(element));

    const scrollTopButton = document.createElement("button");
    scrollTopButton.className = "scroll-top-btn";
    scrollTopButton.type = "button";
    scrollTopButton.setAttribute("aria-label", "Lên đầu trang");
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
    scrollTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.body.appendChild(scrollTopButton);

    const toggleScrollButton = () => {
        scrollTopButton.classList.toggle("visible", window.scrollY > 420);
    };

    window.addEventListener("scroll", toggleScrollButton, { passive: true });
    toggleScrollButton();
});
