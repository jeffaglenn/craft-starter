import Alpine from 'alpinejs'
import { debounce } from './utilities.js';


// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}


window.Alpine = Alpine
Alpine.start()
