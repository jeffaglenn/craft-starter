/**
 * Navigation Alpine.js Component
 * Handles mobile menu, scroll behavior, and keyboard navigation
 */

import Alpine from 'alpinejs';

Alpine.data('navigation', () => ({
    isOpen: false,
    isScrolled: false,

    init() {
        // Track scroll position for header styling
        this.checkScroll();
        window.addEventListener('scroll', () => this.checkScroll());

        // Close mobile menu on escape key
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && this.isOpen) {
                this.isOpen = false;
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', e => {
            if (!this.$el.contains(e.target) && this.isOpen) {
                this.isOpen = false;
            }
        });
    },

    checkScroll() {
        this.isScrolled = window.scrollY > 10;
    },

    toggle() {
        this.isOpen = !this.isOpen;

        // Prevent body scroll when menu is open
        if (this.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    },

    close() {
        this.isOpen = false;
        document.body.style.overflow = '';
    },
}));
