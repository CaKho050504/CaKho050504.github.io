function renderBlog() {
    const blog = document.querySelector(".blog-section");
    const posts = portfolioData.blogData || [];

    if (!posts.length) {
        blog.hidden = true;
        return;
    }

    blog.hidden = false;
    blog.innerHTML = `
        <div class="container">
            <div class="section-heading">
                <span class="section-kicker">Writing</span>
                <h2 class="section-title">Blog</h2>
                <p class="section-subtitle">Một vài ghi chú ngắn về lập trình, quy trình phát triển phần mềm và kinh nghiệm học tập.</p>
            </div>
            <div class="blog-container">
                ${posts.slice(0, 3).map((post) => `
                    <article class="blog-card">
                        <div class="blog-image">
                            <img src="${post.image}" alt="${post.title}" loading="lazy">
                            <span class="blog-category-badge">${post.category}</span>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <time datetime="${post.date}"><i class="far fa-calendar"></i> ${formatBlogDate(post.date)}</time>
                                <span><i class="far fa-clock"></i> ${post.readTime}</span>
                            </div>
                            <h3>${post.title}</h3>
                            <p>${post.excerpt}</p>
                            <a class="blog-read-more" href="${post.url || `blog-detail.html?id=${post.id}`}">
                                Đọc thêm <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </article>
                `).join("")}
            </div>
        </div>
    `;
}

function formatBlogDate(dateString) {
    return new Date(dateString).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
