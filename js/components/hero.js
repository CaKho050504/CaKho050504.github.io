function renderHero() {
    const hero = document.querySelector(".hero-section");
    const { name, typewriterTexts, greeting, description, image, cvUrl } = portfolioData.personal;
    const socialLinks = portfolioData.socialLinks
        .filter((item) => item.url)
        .map((item) => `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${item.platform}" title="${item.platform}">
                <i class="fab ${item.icon}" aria-hidden="true"></i>
            </a>
        `).join("");

    hero.innerHTML = `
        <div class="container hero-content">
            <div class="hero-text-side">
                <p class="hero-greeting">${greeting}</p>
                <h1 class="hero-title">${name}</h1>
                <p class="hero-subtitle" aria-live="polite">
                    <span class="typewriter-text"></span><span class="typewriter-caret" aria-hidden="true"></span>
                </p>
                <p class="hero-description">${description}</p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary"><i class="fas fa-briefcase"></i> Xem Dự Án</a>
                    ${cvUrl
                        ? `<a href="${cvUrl}" class="btn btn-secondary" download><i class="fas fa-download"></i> Tải CV</a>`
                        : `<button class="btn btn-secondary" type="button" disabled title="CV sẽ được cập nhật sau"><i class="fas fa-download"></i> Tải CV</button>`
                    }
                </div>
                <div class="hero-social">${socialLinks}</div>
            </div>
            <div class="hero-image-side">
                <img src="${image}" alt="Ảnh cá nhân của ${name}" class="hero-image">
            </div>
        </div>
    `;

    initHeroTypewriter(typewriterTexts);
}

function initHeroTypewriter(texts = []) {
    const textElement = document.querySelector(".typewriter-text");
    if (!textElement || !texts.length) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const tick = () => {
        const current = texts[textIndex];
        textElement.textContent = current.slice(0, charIndex);

        if (!isDeleting && charIndex < current.length) {
            charIndex += 1;
            setTimeout(tick, 76);
            return;
        }

        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            setTimeout(tick, 1250);
            return;
        }

        if (isDeleting && charIndex > 0) {
            charIndex -= 1;
            setTimeout(tick, 42);
            return;
        }

        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(tick, 260);
    };

    tick();
}
