// Clears the blurhash placeholder background on <img data-blurhash>
// once the image has finished loading (handles transparent images).

const clear = (img) => {
    img.style.backgroundImage = 'none';
};

const init = () => {
    document.querySelectorAll('img[data-blurhash]').forEach((img) => {
        if (img.complete && img.naturalWidth > 0) {
            clear(img);
        } else {
            img.addEventListener('load', () => clear(img), { once: true });
        }
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
