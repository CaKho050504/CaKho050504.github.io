// Section Pixel Animations Generator

// ========================================
// ABOUT SECTION ANIMATIONS
// ========================================

function initAboutAnimations() {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;
    
    // Create background container
    const background = document.createElement('div');
    background.className = 'about-pixel-background';
    aboutSection.insertBefore(background, aboutSection.firstChild);
    
    // Add diagonal lines
    const diagonalLines = document.createElement('div');
    diagonalLines.className = 'about-diagonal-lines';
    background.appendChild(diagonalLines);
    
    // Add floating pixels
    const floatingPixels = document.createElement('div');
    floatingPixels.className = 'about-floating-pixels';
    background.appendChild(floatingPixels);
    
    // Generate 15 floating pixels
    for (let i = 0; i < 15; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'about-pixel';
        pixel.style.left = Math.random() * 100 + '%';
        pixel.style.top = Math.random() * 100 + '%';
        pixel.style.animationDelay = Math.random() * 5 + 's';
        pixel.style.animationDuration = (Math.random() * 10 + 15) + 's';
        floatingPixels.appendChild(pixel);
    }
    
    console.log('✅ About section animations initialized');
}

// ========================================
// EDUCATION SECTION ANIMATIONS
// ========================================

function initEducationAnimations() {
    const educationSection = document.querySelector('.education-section');
    if (!educationSection) return;
    
    // Create background container
    const background = document.createElement('div');
    background.className = 'education-pixel-background';
    background.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;';
    educationSection.insertBefore(background, educationSection.firstChild);
    
    // Add animated books/graduation caps
    const educationParticles = document.createElement('div');
    educationParticles.className = 'education-particles';
    educationParticles.style.cssText = 'position: absolute; width: 100%; height: 100%;';
    background.appendChild(educationParticles);
    
    // Generate floating education icons
    const icons = ['📚', '🎓', '📖', '✏️', '🏆'];
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.textContent = icons[Math.floor(Math.random() * icons.length)];
        particle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 20}px;
            opacity: 0.2;
            animation: education-float ${Math.random() * 20 + 15}s ease-in-out infinite;
        `;
        educationParticles.appendChild(particle);
    }
    
    console.log('✅ Education section animations initialized');
}

// Add CSS for education animations
const educationStyles = document.createElement('style');
educationStyles.textContent = `
    @keyframes education-float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
        50% { transform: translate(50px, -50px) rotate(180deg); opacity: 0.4; }
    }
`;
document.head.appendChild(educationStyles);

// ========================================
// CERTIFICATES SECTION ANIMATIONS
// ========================================

function initCertificatesAnimations() {
    const certificatesSection = document.querySelector('.certificates-section');
    if (!certificatesSection) return;
    
    // Create background container
    const background = document.createElement('div');
    background.className = 'certificates-pixel-background';
    background.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;';
    certificatesSection.insertBefore(background, certificatesSection.firstChild);
    
    // Add certificate stamps pattern
    const stampPattern = document.createElement('div');
    stampPattern.className = 'certificate-stamps';
    stampPattern.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(255, 0, 0, 0.05) 60px,
            rgba(255, 0, 0, 0.05) 62px
        );
        animation: stamp-move 25s linear infinite;
    `;
    background.appendChild(stampPattern);
    
    // Add floating certificate icons
    const certificateIcons = document.createElement('div');
    certificateIcons.className = 'certificate-icons';
    certificateIcons.style.cssText = 'position: absolute; width: 100%; height: 100%;';
    background.appendChild(certificateIcons);
    
    const certIcons = ['🏅', '🎖️', '⭐', '💎', '🔖'];
    for (let i = 0; i < 12; i++) {
        const icon = document.createElement('div');
        icon.textContent = certIcons[Math.floor(Math.random() * certIcons.length)];
        icon.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 25 + 15}px;
            opacity: 0.15;
            animation: certificate-shine ${Math.random() * 4 + 3}s ease-in-out infinite;
        `;
        certificateIcons.appendChild(icon);
    }
    
    console.log('✅ Certificates section animations initialized');
}

// Add CSS for certificates animations
const certificatesStyles = document.createElement('style');
certificatesStyles.textContent = `
    @keyframes stamp-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(60px, 60px); }
    }
    @keyframes certificate-shine {
        0%, 100% { opacity: 0.1; transform: scale(1) rotate(0deg); }
        50% { opacity: 0.3; transform: scale(1.2) rotate(180deg); }
    }
`;
document.head.appendChild(certificatesStyles);

// ========================================
// HOBBIES SECTION ANIMATIONS
// ========================================

function initHobbiesAnimations() {
    const hobbiesSection = document.querySelector('.hobbies-section');
    if (!hobbiesSection) return;
    
    // Create background container
    const background = document.createElement('div');
    background.className = 'hobbies-pixel-background';
    background.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;';
    hobbiesSection.insertBefore(background, hobbiesSection.firstChild);
    
    // Add playful pattern
    const playfulPattern = document.createElement('div');
    playfulPattern.className = 'hobbies-pattern';
    playfulPattern.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.03) 2px, transparent 2px),
            radial-gradient(circle at 60% 70%, rgba(255, 0, 0, 0.03) 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 0, 0.03) 2px, transparent 2px);
        background-size: 100px 100px;
        animation: hobbies-drift 30s ease-in-out infinite;
    `;
    background.appendChild(playfulPattern);
    
    // Add hobby emoji particles
    const hobbyParticles = document.createElement('div');
    hobbyParticles.className = 'hobby-particles';
    hobbyParticles.style.cssText = 'position: absolute; width: 100%; height: 100%;';
    background.appendChild(hobbyParticles);
    
    const hobbyEmojis = ['⚽', '📚', '✈️', '💻', '🎮', '🎨', '🎵', '🍕'];
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.textContent = hobbyEmojis[Math.floor(Math.random() * hobbyEmojis.length)];
        particle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 30 + 20}px;
            opacity: 0.15;
            animation: hobby-bounce ${Math.random() * 5 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hobbyParticles.appendChild(particle);
    }
    
    console.log('✅ Hobbies section animations initialized');
}

// Add CSS for hobbies animations
const hobbiesStyles = document.createElement('style');
hobbiesStyles.textContent = `
    @keyframes hobbies-drift {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(30px, 30px); }
    }
    @keyframes hobby-bounce {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
        50% { transform: translateY(-30px) rotate(10deg); opacity: 0.3; }
    }
`;
document.head.appendChild(hobbiesStyles);

// ========================================
// SKILLS SECTION ANIMATIONS
// ========================================

function initSkillsAnimations() {
    const skillsSection = document.querySelector('.skills-section');
    if (!skillsSection) return;
    
    // Create background container
    const background = document.createElement('div');
    background.className = 'skills-pixel-background';
    skillsSection.insertBefore(background, skillsSection.firstChild);
    
    // Add hex grid
    const hexGrid = document.createElement('div');
    hexGrid.className = 'skills-hex-grid';
    background.appendChild(hexGrid);
    
    // Add orbiting pixels
    const orbitingPixels = document.createElement('div');
    orbitingPixels.className = 'skills-orbiting-pixels';
    background.appendChild(orbitingPixels);
    
    // Generate 8 orbiting pixels
    for (let i = 0; i < 8; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'orbit-pixel';
        pixel.style.left = '50%';
        pixel.style.top = '50%';
        pixel.style.animationDelay = (i * 2) + 's';
        pixel.style.animationDuration = (15 + i * 2) + 's';
        orbitingPixels.appendChild(pixel);
    }
    
    console.log('✅ Skills section animations initialized');
}

// ========================================
// PROJECTS SECTION ANIMATIONS
// ========================================

function initProjectsAnimations() {
    const projectsSection = document.querySelector('.projects-section');
    if (!projectsSection) return;
    
    // Create background container
    const background = document.createElement('div');
    background.className = 'projects-pixel-background';
    projectsSection.insertBefore(background, projectsSection.firstChild);
    
    // Add circuit pattern
    const circuitPattern = document.createElement('div');
    circuitPattern.className = 'projects-circuit-pattern';
    background.appendChild(circuitPattern);
    
    // Add data streams
    const dataStreams = document.createElement('div');
    dataStreams.className = 'projects-data-streams';
    background.appendChild(dataStreams);
    
    // Generate 12 data streams
    for (let i = 0; i < 12; i++) {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        stream.style.left = (i * 8.33) + '%';
        stream.style.animationDelay = Math.random() * 5 + 's';
        stream.style.animationDuration = (Math.random() * 3 + 4) + 's';
        dataStreams.appendChild(stream);
    }
    
    // Add glitch bars
    const glitchBars = document.createElement('div');
    glitchBars.className = 'projects-glitch-bars';
    background.appendChild(glitchBars);
    
    // Generate 5 glitch bars
    for (let i = 0; i < 5; i++) {
        const bar = document.createElement('div');
        bar.className = 'glitch-bar';
        bar.style.top = (i * 20 + 10) + '%';
        bar.style.animationDelay = (i * 0.8) + 's';
        glitchBars.appendChild(bar);
    }
    
    console.log('✅ Projects section animations initialized');
}

// ========================================
// CONTACT SECTION ANIMATIONS
// ========================================

function initContactAnimations() {
    const contactSection = document.querySelector('.contact-section');
    if (!contactSection) return;
    
    // Create background container
    const background = document.createElement('div');
    background.className = 'contact-pixel-background';
    contactSection.insertBefore(background, contactSection.firstChild);
    
    // Add radar
    const radar = document.createElement('div');
    radar.className = 'contact-radar';
    background.appendChild(radar);
    
    // Add pulse rings
    const pulseRings = document.createElement('div');
    pulseRings.className = 'contact-pulse-rings';
    background.appendChild(pulseRings);
    
    // Generate 4 pulse rings
    for (let i = 0; i < 4; i++) {
        const ring = document.createElement('div');
        ring.className = 'pulse-ring';
        ring.style.left = (25 + Math.random() * 50) + '%';
        ring.style.top = (25 + Math.random() * 50) + '%';
        ring.style.animationDelay = (i * 0.75) + 's';
        pulseRings.appendChild(ring);
    }
    
    // Add signal waves
    const signalWaves = document.createElement('div');
    signalWaves.className = 'contact-signal-waves';
    background.appendChild(signalWaves);
    
    // Generate 5 signal waves
    for (let i = 0; i < 5; i++) {
        const wave = document.createElement('div');
        wave.className = 'signal-wave';
        wave.style.top = (i * 20) + '%';
        wave.style.animationDelay = (i * 0.6) + 's';
        signalWaves.appendChild(wave);
    }
    
    console.log('✅ Contact section animations initialized');
}

// ========================================
// FOOTER ANIMATIONS
// ========================================

function initFooterAnimations() {
    const footer = document.getElementById('footer');
    if (!footer) return;
    
    // Create background container
    const background = document.createElement('div');
    background.className = 'footer-pixel-background';
    footer.insertBefore(background, footer.firstChild);
    
    // Add starfield
    const starfield = document.createElement('div');
    starfield.className = 'footer-starfield';
    background.appendChild(starfield);
    
    // Generate 30 stars
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'footer-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starfield.appendChild(star);
    }
    
    // Add waves
    const waves = document.createElement('div');
    waves.className = 'footer-waves';
    background.appendChild(waves);
    
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'footer-wave';
        wave.style.animationDelay = (i * 3) + 's';
        wave.style.opacity = (0.5 - i * 0.1);
        waves.appendChild(wave);
    }
    
    console.log('✅ Footer animations initialized');
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add extra animation class
                entry.target.classList.add('section-visible');
            }
        });
    }, observerOptions);
    
    // Observe all major sections
    const sections = document.querySelectorAll('.about-section, .education-section, .skills-section, .certificates-section, .hobbies-section, .projects-section, .contact-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// ========================================
// PARTICLE CURSOR TRAIL (Optional)
// ========================================

function initParticleCursorTrail() {
    let particles = [];
    const maxParticles = 15;
    
    document.addEventListener('mousemove', (e) => {
        // Create particle
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#ff0000';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.opacity = '0.6';
        particle.style.transition = 'all 0.5s ease';
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        // Fade out
        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0)';
        }, 50);
        
        // Remove
        setTimeout(() => {
            particle.remove();
            particles.shift();
        }, 550);
        
        // Limit particles
        if (particles.length > maxParticles) {
            const oldParticle = particles.shift();
            if (oldParticle) oldParticle.remove();
        }
    });
}

// ========================================
// INTERACTIVE CARD EFFECTS
// ========================================

function initInteractiveCards() {
    // Skill cards
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 20px 60px rgba(255, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// ========================================
// INITIALIZE ALL SECTION ANIMATIONS
// ========================================

function initAllSectionAnimations() {
    console.log('🎮 Initializing section animations...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        // Small delay to ensure sections are rendered
        setTimeout(() => {
            initAboutAnimations();
            initEducationAnimations();
            initSkillsAnimations();
            initCertificatesAnimations();
            initHobbiesAnimations();
            initProjectsAnimations();
            initContactAnimations();
            initFooterAnimations();
            initScrollAnimations();
            initInteractiveCards();
            
            // Optional: Uncomment if you want particle trail
            // initParticleCursorTrail();
            
            console.log('🎨 All section animations initialized!');
        }, 100);
    }
}

// Auto-initialize
initAllSectionAnimations();

