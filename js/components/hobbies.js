function renderHobbies() {
    const hobbies = document.querySelector(".hobbies-section");
    const cards = portfolioData.hobbiesData.map((hobby) => `
        <article class="hobby-card">
            <img src="${hobby.image}" alt="${hobby.name}" loading="lazy">
            <div class="hobby-content">
                <span class="hobby-icon"><i class="fas ${hobby.icon}" aria-hidden="true"></i></span>
                <h3>${hobby.name}</h3>
                <p>${hobby.description}</p>
            </div>
        </article>
    `).join("");

    hobbies.innerHTML = `
        <div class="container">
            <div class="section-heading">
                <span class="section-kicker">Interests</span>
                <h2 class="section-title">Sở Thích</h2>
            </div>
            <div class="hobbies-container">${cards}</div>
        </div>
    `;
}
