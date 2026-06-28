// Mouse Effects JavaScript

class MouseEffects {
    constructor() {
        this.cursor = null;
        this.cursorOuter = null;
        this.mouseLight = null;
        this.gradientFollow = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.currentOuterX = 0;
        this.currentOuterY = 0;
        
        // Check if mobile
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (!this.isMobile) {
            this.init();
        }
    }
    
    init() {
        // this.createCursors();  // Tắt custom cursor
        // this.createMouseLight();  // Tắt vòng tròn ánh sáng
        // this.createGradientFollow();  // Tắt gradient tròn theo sau
        this.attachEventListeners();
        this.animate();
    }
    
    createCursors() {
        // Custom cursor - DISABLED
        // this.cursor = document.createElement('div');
        // this.cursor.className = 'custom-cursor';
        // document.body.appendChild(this.cursor);
        
        // Outer cursor ring - DISABLED
        // this.cursorOuter = document.createElement('div');
        // this.cursorOuter.className = 'cursor-outer';
        // document.body.appendChild(this.cursorOuter);
    }
    
    createMouseLight() {
        this.mouseLight = document.createElement('div');
        this.mouseLight.className = 'mouse-light';
        document.body.appendChild(this.mouseLight);
    }
    
    createGradientFollow() {
        this.gradientFollow = document.createElement('div');
        this.gradientFollow.className = 'gradient-follow';
        document.body.appendChild(this.gradientFollow);
    }
    
    attachEventListeners() {
        // Mouse move
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            // Create particle trail (pixel style - less frequent)
            if (Math.random() > 0.85) {
                this.createParticle(e.clientX, e.clientY);
            }
            
            // Create hover trail (pixel style)
            if (Math.random() > 0.88) {
                this.createHoverTrail(e.clientX, e.clientY);
            }
            
            // Update mouse light (DISABLED)
            // if (this.mouseLight) {
            //     this.mouseLight.style.left = e.clientX + 'px';
            //     this.mouseLight.style.top = e.clientY + 'px';
            // }
            
            // Update gradient follow with smooth delay (DISABLED)
            // if (this.gradientFollow) {
            //     setTimeout(() => {
            //         this.gradientFollow.style.left = e.clientX + 'px';
            //         this.gradientFollow.style.top = e.clientY + 'px';
            //     }, 150);
            // }
        });
        
        // Mouse click
        document.addEventListener('click', (e) => {
            this.createRipple(e.clientX, e.clientY);
            this.createSparkles(e.clientX, e.clientY);
        });
        
        // Hover effects on interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .hobby-card, .certificate-card, .project-card, .skill-card, ' +
            '.slider-btn, input, textarea, .nav-link, .activity-tag, .certificate-filter-btn'
        );
        
        interactiveElements.forEach(el => {
            // Cursor hover effects - DISABLED
            // el.addEventListener('mouseenter', () => {
            //     this.cursor?.classList.add('active');
            //     // this.cursorOuter?.classList.add('active');  // Disabled
            // });
            
            // el.addEventListener('mouseleave', () => {
            //     this.cursor?.classList.remove('active');
            //     // this.cursorOuter?.classList.remove('active');  // Disabled
            // });
            
            // Magnetic effect
            el.addEventListener('mousemove', (e) => {
                this.magneticEffect(el, e);
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
        
        // Card tilt effect
        const cards = document.querySelectorAll(
            '.hobby-card, .certificate-card, .project-card, .skill-card'
        );
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                this.tiltEffect(card, e);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
    
    animate() {
        // Cursor animation - DISABLED
        // const ease = 0.18;  // Smoother easing
        
        // this.currentX += (this.mouseX - this.currentX) * ease;
        // this.currentY += (this.mouseY - this.currentY) * ease;
        
        // if (this.cursor) {
        //     this.cursor.style.left = this.currentX + 'px';
        //     this.cursor.style.top = this.currentY + 'px';
        // }
        
        // Outer ring disabled
        // if (this.cursorOuter) {
        //     this.cursorOuter.style.left = this.currentOuterX + 'px';
        //     this.cursorOuter.style.top = this.currentOuterY + 'px';
        // }
        
        // Keep animation loop for other effects (particles, etc.)
        requestAnimationFrame(() => this.animate());
    }
    
    createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const tx = (Math.random() - 0.5) * 50;
        const ty = (Math.random() - 0.5) * 50;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 800);
    }
    
    createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
    
    createHoverTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'hover-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 1000);
    }
    
    createSparkles(x, y) {
        const sparkleCount = 8;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            
            const angle = (Math.PI * 2 * i) / sparkleCount;
            const sparkleX = Math.cos(angle);
            const sparkleY = Math.sin(angle);
            
            sparkle.style.setProperty('--sparkle-x', sparkleX);
            sparkle.style.setProperty('--sparkle-y', sparkleY);
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 600);
        }
    }
    
    magneticEffect(element, event) {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = Math.max(rect.width, rect.height);
        
        if (distance < maxDistance) {
            const strength = 0.25;  // Slightly reduced for smoother feel
            const moveX = (x / maxDistance) * 15 * strength;
            const moveY = (y / maxDistance) * 15 * strength;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            element.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        }
    }
    
    tiltEffect(card, event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8;  // Reduced for smoother
        const rotateY = ((x - centerX) / centerX) * 8;
        
        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.05, 1.05, 1.05)
        `;
        card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
}

// Parallax effect for background elements
class ParallaxEffect {
    constructor() {
        this.layers = [];
        this.mouseX = 0;
        this.mouseY = 0;
        
        this.init();
    }
    
    init() {
        // Find parallax layers
        this.layers = document.querySelectorAll('.parallax-layer');
        
        if (this.layers.length > 0) {
            document.addEventListener('mousemove', (e) => {
                this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
                this.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
                
                this.updateParallax();
            });
        }
    }
    
    updateParallax() {
        this.layers.forEach((layer, index) => {
            const depth = (index + 1) * 8;  // Reduced for smoother movement
            const moveX = this.mouseX * depth;
            const moveY = this.mouseY * depth;
            
            layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            layer.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for other scripts to load
    setTimeout(() => {
        new MouseEffects();
        new ParallaxEffect();
        
        console.log('🖱️ Mouse effects initialized!');
    }, 100);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MouseEffects, ParallaxEffect };
}

