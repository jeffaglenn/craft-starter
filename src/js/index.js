import Alpine from 'alpinejs';
import { debounce, throttle, breakpoints } from './utilities.js';

// Import Alpine.js components
import './components/alpine/navigation.js';

// Import GSAP animations
import './components/gsap/scroll-animations.js';

// Make utilities globally available
window.utils = {
    debounce,
    throttle,
    breakpoints,
};

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add your page initialization logic here
    console.log('🚀 Craft CMS 5 Starter initialized');
});
