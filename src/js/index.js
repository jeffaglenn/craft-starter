import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';
import persist from '@alpinejs/persist';
import { debounce, throttle, breakpoints } from './utilities.js';

// Import Alpine.js components
import './components/alpine/navigation.js';
import './components/alpine/popup-notification.js';

// Import GSAP animations
import './components/gsap/scroll-animations.js';

// Clear blurhash placeholder once images load
import './components/blurhash.js';

// Import CKEditor MediaEmbed iframe sizing
import './components/media-embeds.js';


// Make utilities globally available
window.utils = {
    debounce,
    throttle,
    breakpoints,
};

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.plugin(focus);
Alpine.plugin(persist);
Alpine.start();

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add your page initialization logic here
});
