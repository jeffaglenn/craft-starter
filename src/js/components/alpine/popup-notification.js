/**
 * Popup Notification Alpine.js Component
 * Handles display logic, exit-intent detection, and frequency-based suppression via localStorage.
 */

import Alpine from 'alpinejs';

Alpine.data('popupNotification', (key, frequency, exitIntent) => ({
    init() {
        if (this.hasBeenSeen()) return;

        if (exitIntent) {
            document.body.addEventListener('mouseleave', () => {
                if (!this.hasBeenSeen()) {
                    this.show();
                }
            }, { once: true });
        } else {
            this.show();
        }
    },

    hasBeenSeen() {
        // No frequency — show every time
        if (frequency === 0) return false;

        // Frequency-based — check if the stored expiry has passed
        const stored = localStorage.getItem(key);
        if (!stored) return false;

        const expiry = parseInt(stored, 10);
        if (Date.now() < expiry) return true;

        // Expired — clear and allow showing again
        localStorage.removeItem(key);
        return false;
    },

    markSeen() {
        if (frequency === 0) return;

        const expiry = Date.now() + (frequency * 24 * 60 * 60 * 1000);
        localStorage.setItem(key, expiry.toString());
    },

    show() {
        this.markSeen();
        Fancybox.show([{ src: '#popup-notification' }]);
    },
}));
