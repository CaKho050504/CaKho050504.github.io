function renderHeader() {
    const header = document.getElementById("header");
    const navLinks = portfolioData.navigation.map((item) => (
        `<a href="${item.href}" class="nav-link">${item.name}</a>`
    )).join("");

    header.innerHTML = `
        <div class="header-container">
            <a href="#hero" class="logo" aria-label="Trang chủ">Portfolio<span>.</span></a>
            <nav class="nav-menu" id="navMenu" aria-label="Điều hướng chính">${navLinks}</nav>
            <button class="mobile-menu-toggle" id="menuToggle" type="button" aria-label="Mở menu" aria-expanded="false">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </button>
        </div>
    `;

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const links = Array.from(document.querySelectorAll(".nav-link"));

    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.querySelector("i").className = isOpen ? "fas fa-xmark" : "fas fa-bars";
    });

    links.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.querySelector("i").className = "fas fa-bars";
        });
    });

    const updateActiveLink = () => {
        header.classList.toggle("scrolled", window.scrollY > 12);
        const current = Array.from(document.querySelectorAll("main section:not([hidden])"))
            .filter((section) => window.scrollY + 140 >= section.offsetTop)
            .pop();

        links.forEach((link) => {
            link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
        });
    };

    window.addEventListener("scroll", updateActiveLink, { passive: true });
    updateActiveLink();
}
