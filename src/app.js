// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR');
    });
}

// CSS
import './css/styles.css';

// JS
import './js/index.js';
