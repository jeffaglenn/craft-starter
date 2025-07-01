/**
 * GSAP Scroll Animations
 * Handles scroll-triggered animations with performance optimization
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Fade in animations
        this.setupFadeInAnimations();

        // Stagger animations
        this.setupStaggerAnimations();

        // Parallax effects
        this.setupParallaxEffects();

        // Text reveal animations
        this.setupTextRevealAnimations();
    }

    setupFadeInAnimations() {
        gsap.utils.toArray('[data-animate="fade-in"]').forEach(element => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }

    setupStaggerAnimations() {
        gsap.utils.toArray('[data-animate="stagger"]').forEach(container => {
            const children = container.children;

            gsap.from(children, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }

    setupParallaxEffects() {
        gsap.utils.toArray('[data-animate="parallax"]').forEach(element => {
            gsap.to(element, {
                yPercent: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });
    }

    setupTextRevealAnimations() {
        gsap.utils.toArray('[data-animate="text-reveal"]').forEach(element => {
            const text = element.textContent;
            element.innerHTML = `<span class="inline-block">${text
                .split('')
                .map(char =>
                    char === ' '
                        ? '&nbsp;'
                        : `<span class="inline-block">${char}</span>`
                )
                .join('')}</span>`;

            gsap.from(element.querySelectorAll('span span'), {
                opacity: 0,
                y: 100,
                rotateX: -90,
                duration: 0.8,
                stagger: 0.02,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }

    // Utility method to refresh ScrollTrigger (useful for dynamic content)
    refresh() {
        ScrollTrigger.refresh();
    }
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimations = new ScrollAnimations();
});
