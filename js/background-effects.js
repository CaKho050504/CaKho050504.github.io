// Dynamic Background Effects

// Generate Random Stars
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);
    
    const starCount = 50; // Number of stars
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        starsContainer.appendChild(star);
    }
}

// Mouse Move Parallax Effect
function initParallax() {
    const orbs = document.querySelectorAll('.orb');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Interactive Particles on Mouse Move
function initInteractiveParticles() {
    const particles = document.querySelectorAll('.particle');
    
    document.addEventListener('mousemove', (e) => {
        particles.forEach((particle, index) => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(e.clientX - particleX, 2) + 
                Math.pow(e.clientY - particleY, 2)
            );
            
            if (distance < 150) {
                particle.style.opacity = '0.8';
                particle.style.transform = 'scale(1.5)';
            } else {
                particle.style.opacity = '0.3';
                particle.style.transform = 'scale(1)';
            }
        });
    });
}

// Add Glow Effect on Scroll
function initScrollGlow() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Cursor Trail Effect
function initCursorTrail() {
    let trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        // Create trail dot
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.background = '#ff0000';
        dot.style.borderRadius = '50%';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '9999';
        dot.style.opacity = '0.5';
        dot.style.transition = 'all 0.3s ease';
        
        document.body.appendChild(dot);
        trail.push(dot);
        
        // Fade out and remove
        setTimeout(() => {
            dot.style.opacity = '0';
            dot.style.transform = 'scale(0)';
        }, 100);
        
        setTimeout(() => {
            dot.remove();
        }, 400);
        
        // Limit trail length
        if (trail.length > trailLength) {
            const removed = trail.shift();
            removed.remove();
        }
    });
}

// Random Floating Elements (Optional)
function createFloatingElements() {
    const container = document.createElement('div');
    container.className = 'floating-elements';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '0';
    document.body.appendChild(container);
    
    const shapes = ['◆', '●', '■', '▲'];
    const count = 15;
    
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        element.style.position = 'absolute';
        element.style.color = '#ff0000';
        element.style.opacity = '0.1';
        element.style.fontSize = Math.random() * 30 + 20 + 'px';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animation = `float-around ${Math.random() * 20 + 15}s ease-in-out infinite`;
        element.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(element);
    }
}

// Performance Monitor - Disable effects on slow devices
function checkPerformance() {
    if (window.innerWidth < 768 || 
        navigator.connection?.effectiveType === '2g' ||
        navigator.connection?.effectiveType === 'slow-2g') {
        // Disable heavy effects on mobile or slow connection
        document.querySelectorAll('.orb, .geometric-lines').forEach(el => {
            el.style.display = 'none';
        });
    }
}

// ========================================
// PIXEL EFFECTS
// ========================================

// Matrix Digital Rain Effect
function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    
    // Set canvas styles
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.3';
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = '01';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)'; // Giảm opacity từ #ff0000 xuống rgba với alpha 0.3
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Create Pixel Particles
function createPixelParticles() {
    const container = document.getElementById('pixelParticlesContainer');
    if (!container) return;
    
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '0';
    container.style.overflow = 'hidden';
    
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'pixel-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

// Create Pixel Circles
function createPixelCircles() {
    const container = document.getElementById('pixelCirclesContainer');
    if (!container) return;
    
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '0';
    container.style.overflow = 'hidden';
    
    const circleCount = 5;
    
    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        circle.className = 'pixel-circle';
        circle.style.left = Math.random() * 90 + '%';
        circle.style.top = Math.random() * 90 + '%';
        circle.style.animationDelay = i * 3 + 's';
        
        // Random size
        const size = (Math.random() * 40 + 30) + 'px';
        circle.style.width = size;
        circle.style.height = size;
        
        container.appendChild(circle);
    }
}

// Add Pixel Glitch Effect to Title
function addPixelGlitchToTitles() {
    // Add glitch effect to section titles
    setTimeout(() => {
        const titles = document.querySelectorAll('.section-title, .hero-title');
        titles.forEach(title => {
            title.classList.add('pixel-text-glitch');
        });
    }, 1000);
}

// Random Glitch Flash
function initRandomGlitch() {
    setInterval(() => {
        if (Math.random() > 0.95) {
            const glitchBlocks = document.querySelectorAll('.glitch-block');
            glitchBlocks.forEach(block => {
                block.style.opacity = '1';
                block.style.transform = `translateX(${Math.random() * 40 - 20}px)`;
                
                setTimeout(() => {
                    block.style.opacity = '0';
                    block.style.transform = 'translateX(0)';
                }, 100);
            });
        }
    }, 3000);
}

// Pixel Cursor Effect
function initPixelCursor() {
    const cursor = document.createElement('div');
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursor.style.background = '#ff0000';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.mixBlendMode = 'difference';
    cursor.style.transition = 'transform 0.1s ease';
    cursor.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = (e.clientX - 6) + 'px';
        cursor.style.top = (e.clientY - 6) + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// Initialize all effects - Simplified
function initBackgroundEffects() {
    // Simple background only - no complex animations
    // All pixel effects, glitch effects, and text animations removed
    console.log('🎨 Simple background initialized');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackgroundEffects);
} else {
    initBackgroundEffects();
}

