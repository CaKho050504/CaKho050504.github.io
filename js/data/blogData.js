const blogData = [
    {
        id: 1,
        title: "Kiến Trúc Microservices: Xu Hướng Phát Triển Phần Mềm Hiện Đại",
        excerpt: "Tìm hiểu về kiến trúc microservices, ưu nhược điểm và cách triển khai trong các dự án phần mềm quy mô lớn.",
        content: `Microservices là một kiến trúc phần mềm cho phép phát triển ứng dụng như một tập hợp các dịch vụ nhỏ, độc lập. Mỗi service được phát triển, triển khai và mở rộng độc lập, giao tiếp với nhau thông qua các API nhẹ.

Ưu điểm chính của microservices là khả năng mở rộng độc lập, hỗ trợ các nhóm phát triển song song và giúp hệ thống chịu lỗi tốt hơn. Khi một service gặp sự cố, các phần còn lại vẫn có thể tiếp tục hoạt động.

Tuy nhiên, microservices cũng làm tăng độ phức tạp trong vận hành, giám sát và debug. Vì vậy, cần có quy trình triển khai, logging, monitoring và quản lý API rõ ràng.

Trong thực tế, microservices phù hợp với hệ thống có quy mô đủ lớn, nhiều nghiệp vụ độc lập và cần khả năng mở rộng linh hoạt.`,
        author: "Đặng Hữu Nhã",
        date: "2024-02-15",
        category: "Kiến Trúc",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        tags: ["Microservices", "Architecture", "Software Engineering"],
        readTime: "12 phút",
        url: "blog-detail.html?id=1"
    },
    {
        id: 2,
        title: "Clean Code: Nghệ Thuật Viết Code Dễ Đọc và Bảo Trì",
        excerpt: "Các nguyên tắc và best practices để viết code sạch, dễ đọc và dễ bảo trì trong phát triển phần mềm.",
        content: `Clean Code không chỉ là code hoạt động đúng, mà còn là code dễ đọc, dễ hiểu và dễ bảo trì. Một đoạn code tốt giúp người khác nhanh chóng nắm được ý định của người viết.

Nguyên tắc đầu tiên là đặt tên rõ ràng. Tên biến, hàm và module nên mô tả đúng mục đích sử dụng, tránh viết tắt khó hiểu hoặc tên quá chung chung.

Hàm nên nhỏ và tập trung vào một nhiệm vụ. Khi một hàm làm quá nhiều việc, việc test, debug và tái sử dụng sẽ trở nên khó khăn hơn.

Clean Code là một quá trình liên tục. Refactor thường xuyên, viết comment đúng chỗ và giữ cấu trúc nhất quán sẽ giúp dự án dễ phát triển lâu dài.`,
        author: "Đặng Hữu Nhã",
        date: "2024-02-10",
        category: "Best Practices",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
        tags: ["Clean Code", "Best Practices", "Code Quality"],
        readTime: "10 phút",
        url: "blog-detail.html?id=2"
    },
    {
        id: 3,
        title: "DevOps và CI/CD: Tự Động Hóa Quy Trình Phát Triển Phần Mềm",
        excerpt: "Khám phá DevOps và CI/CD pipeline, cách tích hợp và triển khai liên tục giúp tăng tốc độ phát triển phần mềm.",
        content: `DevOps là sự kết hợp giữa phát triển phần mềm và vận hành hệ thống, giúp rút ngắn vòng đời phát triển và đưa sản phẩm đến người dùng nhanh hơn.

CI/CD là một phần quan trọng trong DevOps. Continuous Integration giúp tự động build và test code khi có thay đổi, còn Continuous Deployment hỗ trợ triển khai nhanh và nhất quán.

Một pipeline cơ bản thường gồm các bước: quản lý mã nguồn, build, test, deploy và monitor. Khi các bước này được tự động hóa, nhóm phát triển có thể giảm lỗi thủ công và tăng tốc độ release.

DevOps không chỉ là công cụ, mà còn là tư duy cộng tác, đo lường và cải tiến liên tục trong quá trình xây dựng phần mềm.`,
        author: "Đặng Hữu Nhã",
        date: "2024-02-05",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        tags: ["DevOps", "CI/CD", "Automation"],
        readTime: "15 phút",
        url: "blog-detail.html?id=3"
    }
];
