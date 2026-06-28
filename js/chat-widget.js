// Chat Widget with FAQ and Contact Form
const chatWidgetFAQ = [
    {
        question: "Bạn có nhận làm dự án freelance không?",
        answer: "Có, tôi sẵn sàng nhận các dự án freelance về Web Development, Mobile App, và UI/UX Design. Hãy liên hệ với tôi để thảo luận chi tiết về dự án của bạn."
    },
    {
        question: "Thời gian phản hồi email là bao lâu?",
        answer: "Tôi thường phản hồi email trong vòng 24-48 giờ. Đối với các yêu cầu khẩn cấp, vui lòng gọi điện trực tiếp."
    },
    {
        question: "Bạn có thể làm việc remote không?",
        answer: "Có, tôi có thể làm việc remote hoàn toàn. Tôi đã có kinh nghiệm làm việc với các team distributed và sử dụng các công cụ collaboration hiện đại."
    },
    {
        question: "Bạn có nhận mentoring hoặc training không?",
        answer: "Có, tôi sẵn sàng chia sẻ kiến thức và kinh nghiệm. Tôi có thể hỗ trợ mentoring về Web Development, JavaScript, React, và các công nghệ liên quan."
    },
    {
        question: "Bạn có portfolio hoặc case studies không?",
        answer: "Bạn có thể xem các dự án của tôi trong phần 'Dự Án' trên trang này. Nếu cần thêm thông tin chi tiết, hãy liên hệ trực tiếp với tôi."
    }
];

function createChatWidget() {
    const { email, phone, location } = portfolioData.personal;
    
    const faqItems = chatWidgetFAQ.map((faq, index) => `
        <div class="chat-faq-item" onclick="toggleFAQAnswer(${index})">
            <div class="chat-faq-question">
                <i class="fas fa-question-circle"></i>
                ${faq.question}
            </div>
            <div class="chat-faq-answer" id="faq-answer-${index}" style="display: none; margin-top: 8px; padding-top: 8px; border-top: 2px solid rgba(255, 107, 53, 0.3); color: #4a4a4a; font-size: 0.85rem; line-height: 1.6;">
                ${faq.answer}
            </div>
        </div>
    `).join('');

    const chatWidgetHTML = `
        <div class="chat-widget" id="chatWidget">
            <div class="chat-widget-header">
                <h3>
                    <i class="fas fa-comments"></i>
                    Liên Hệ & Hỗ Trợ
                </h3>
                <button class="chat-widget-close" onclick="closeChatWidget()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chat-widget-body">
                <!-- FAQ Section -->
                <div class="chat-faq-section">
                    <div class="chat-faq-title">
                        <i class="fas fa-question-circle"></i>
                        Câu Hỏi Thường Gặp
                    </div>
                    <div class="chat-faq-list">
                        ${faqItems}
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="chat-contact-info">
                    <div class="chat-contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${email}</span>
                    </div>
                    <div class="chat-contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${phone}</span>
                    </div>
                    <div class="chat-contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${location}</span>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="chat-form-section">
                    <div class="chat-form-title">
                        <i class="fas fa-paper-plane"></i>
                        Gửi Tin Nhắn
                    </div>
                    <form class="chat-form" id="chatContactForm">
                        <div class="chat-form-group">
                            <label for="chat-name">Họ và Tên *</label>
                            <input type="text" id="chat-name" name="name" required>
                        </div>
                        <div class="chat-form-group">
                            <label for="chat-email">Email *</label>
                            <input type="email" id="chat-email" name="email" required>
                        </div>
                        <div class="chat-form-group">
                            <label for="chat-subject">Tiêu Đề *</label>
                            <input type="text" id="chat-subject" name="subject" required>
                        </div>
                        <div class="chat-form-group">
                            <label for="chat-message">Nội Dung *</label>
                            <textarea id="chat-message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="chat-form-submit">
                            <i class="fas fa-paper-plane"></i>
                            Gửi Tin Nhắn
                        </button>
                        <div class="chat-form-message" id="chatFormMessage"></div>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Remove existing widget if any
    const existingWidget = document.getElementById('chatWidget');
    if (existingWidget) {
        existingWidget.remove();
    }

    // Add widget to body
    document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);

    // Handle form submission
    const form = document.getElementById('chatContactForm');
    const formMessage = document.getElementById('chatFormMessage');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            };

            // Simulate form submission
            console.log('Chat form submitted:', formData);

            // Show success message
            formMessage.textContent = 'Cảm ơn bạn! Tôi sẽ phản hồi sớm nhất có thể.';
            formMessage.className = 'chat-form-message success';
            formMessage.style.display = 'block';

            // Reset form
            form.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.opacity = '0';
                setTimeout(() => {
                    formMessage.style.display = 'none';
                    formMessage.style.opacity = '1';
                }, 300);
            }, 5000);
        });
    }
}

function openChatWidget() {
    const widget = document.getElementById('chatWidget');
    
    if (!widget) {
        createChatWidget();
        setTimeout(() => {
            const newWidget = document.getElementById('chatWidget');
            if (newWidget) {
                newWidget.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }, 10);
    } else {
        widget.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeChatWidget() {
    const widget = document.getElementById('chatWidget');
    if (widget) {
        widget.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function toggleFAQAnswer(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    if (answer) {
        const isVisible = answer.style.display !== 'none';
        answer.style.display = isVisible ? 'none' : 'block';
        
        // Smooth animation
        if (!isVisible) {
            answer.style.opacity = '0';
            answer.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                answer.style.transition = 'opacity 0.3s, transform 0.3s';
                answer.style.opacity = '1';
                answer.style.transform = 'translateY(0)';
            }, 10);
        }
    }
}

// Close chat widget when clicking outside
document.addEventListener('click', (e) => {
    const widget = document.getElementById('chatWidget');
    if (widget && widget.classList.contains('active')) {
        const isClickInside = widget.contains(e.target);
        const isContactBtn = e.target.closest('.contact-btn');
        
        if (!isClickInside && !isContactBtn) {
            closeChatWidget();
        }
    }
});

// Close chat widget with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeChatWidget();
    }
});

