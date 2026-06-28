// Central portfolio content. Update links/files here when real assets are available.
const portfolioData = {
    personal: {
        name: "Đặng Hữu Nhã",
        title: "Full Stack Developer",
        typewriterTexts: [
            "Full Stack Developer",
            "Web Developer",
            "Frontend Developer",
            "Backend Developer",
            "UI Friendly Website Builder"
        ],
        greeting: "👋 Xin chào, tôi là",
        description: "Tôi là lập trình viên yêu thích xây dựng website hiện đại, responsive và mang lại trải nghiệm tốt cho người dùng. Tôi luôn học hỏi công nghệ mới để tạo ra những sản phẩm hữu ích, chỉn chu và dễ sử dụng.",
        email: "danghuunha333@gmail.com",
        phone: "0823535484",
        birthDate: "05/05/2004",
        location: "Thành phố Hồ Chí Minh",
        status: "Sẵn sàng học hỏi và làm việc",
        image: "images/avatar.jpg",
        cvUrl: ""
    },

    socialLinks: [
        { platform: "GitHub", icon: "fa-github", url: "https://github.com/CaKho050504" },
        { platform: "LinkedIn", icon: "fa-linkedin", url: "" },
        { platform: "Facebook", icon: "fa-facebook", url: "https://www.facebook.com/NhaCaKho" },
        { platform: "Instagram", icon: "fa-instagram", url: "https://www.instagram.com/cakho.050504/" }
    ],

    navigation: [
        { name: "Trang Chủ", href: "#hero" },
        { name: "Về Tôi", href: "#about" },
        { name: "Kỹ Năng", href: "#skills" },
        { name: "Học Vấn", href: "#education" },
        { name: "Chứng Chỉ", href: "#certificates" },
        { name: "Dự Án", href: "#projects" },
        { name: "Sở Thích", href: "#hobbies" },
        { name: "Blog", href: "#blog" }
    ],

    about: {
        title: "Về Tôi",
        role: "Web Developer / Full Stack Developer",
        description: [
            "Tôi là Đặng Hữu Nhã, một lập trình viên yêu thích phát triển web và xây dựng các sản phẩm có giao diện hiện đại, thân thiện với người dùng.",
            "Tôi có nền tảng về HTML, CSS, JavaScript, React, Node.js và cơ sở dữ liệu. Tôi quan tâm đến việc tối ưu giao diện, hiệu năng và trải nghiệm người dùng trong từng sản phẩm.",
            "Tôi luôn sẵn sàng học hỏi, làm việc nhóm và tiếp cận những công nghệ mới để nâng cao kỹ năng của bản thân."
        ],
        info: [
            { icon: "fa-cake-candles", label: "Ngày sinh", value: "05/05/2004" },
            { icon: "fa-envelope", label: "Email", value: "danghuunha333@gmail.com", href: "mailto:danghuunha333@gmail.com" },
            { icon: "fa-phone", label: "Điện thoại", value: "0823535484", href: "tel:0823535484" },
            { icon: "fa-location-dot", label: "Khu vực", value: "Thành phố Hồ Chí Minh" },
            { icon: "fa-circle-check", label: "Trạng thái", value: "Sẵn sàng học hỏi và làm việc" }
        ],
        images: ["images/about-1.jpg", "images/about-2.jpg", "images/about-3.jpg"]
    },

    skillsData: [
        { category: "Front-end", icon: "fa-laptop-code", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"] },
        { category: "Back-end", icon: "fa-server", items: ["Node.js", "Express.js"] },
        { category: "Database", icon: "fa-database", items: ["MySQL", "SQL Server"] },
        { category: "Tools", icon: "fa-screwdriver-wrench", items: ["Git", "GitHub", "Visual Studio Code", "Postman", "Figma"] }
    ],
    learningData: ["TypeScript", "Next.js", "Docker"],

    education: [
        {
            school: "Đại học Công nghệ TP.HCM (HUTECH)",
            degree: "Cử nhân Công nghệ Thông tin - Kỹ thuật Phần mềm",
            duration: "2019 - 2023",
            gpa: "3.0/4.0",
            logo: "images/hutech-logo.png",
            achievements: [
                "Tham gia cuộc thi HUTECH GOT TALENT",
                "Ban cán sự xuất sắc",
                "Nhiều lần đạt giải trong các hội thao của trường"
            ],
            proofUrl: ""
        }
    ],

    certificatesData: [
        { name: "IELTS", issuer: "British Council", date: "2023", category: "Ngoại ngữ", icon: "fa-language", image: "", proofUrl: "", description: "Chứng chỉ ngoại ngữ. Có thể bổ sung ảnh minh chứng thật sau." },
        { name: "Tin học văn phòng", issuer: "Đơn vị cấp chứng chỉ", date: "2022", category: "Tin học", icon: "fa-laptop", image: "", proofUrl: "", description: "Chứng chỉ tin học văn phòng. Có thể bổ sung ảnh minh chứng thật sau." },
        { name: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", date: "2024", category: "Khóa học", icon: "fa-code", image: "images/js-essentials-1.jpg", proofUrl: "images/js-essentials-1.jpg", description: "Khóa học nền tảng về JavaScript." },
        { name: "JavaScript Essentials 2", issuer: "Cisco Networking Academy", date: "2024", category: "Khóa học", icon: "fa-code", image: "images/js-essentials-2.jpg", proofUrl: "images/js-essentials-2.jpg", description: "Khóa học JavaScript nâng cao hơn, tập trung vào kỹ năng lập trình web." }
    ],

    projectsData,

    hobbiesData: [
        { name: "Gym", icon: "fa-dumbbell", image: "images/sport-1.jpg", description: "Duy trì thể lực và kỷ luật cá nhân sau giờ học và làm việc." },
        { name: "Bóng đá", icon: "fa-futbol", image: "images/sport-2.jpg", description: "Rèn luyện tinh thần đồng đội, phản xạ và sự bền bỉ." },
        { name: "Chạy bộ", icon: "fa-person-running", image: "images/sport-3.jpg", description: "Giữ nhịp sống năng động và giải tỏa căng thẳng." },
        { name: "Chụp ảnh / Du lịch", icon: "fa-camera", image: "images/travel-1.jpg", description: "Khám phá góc nhìn mới và lưu lại những trải nghiệm đáng nhớ." }
    ],

    blogData,
    blog: blogData,

    contact: {
        title: "Hãy kết nối với tôi",
        description: "Tôi luôn sẵn sàng trao đổi về cơ hội hợp tác, dự án mới hoặc những ý tưởng thú vị."
    }
};
