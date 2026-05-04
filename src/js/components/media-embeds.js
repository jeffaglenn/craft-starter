/**
 * CKEditor MediaEmbed iframe sizing
 * Reads the iframe's width/height attributes (set by the oEmbed provider)
 * and applies the matching aspect-ratio so portrait videos render correctly.
 * Tags portrait embeds with `.media-portrait` so the CSS can constrain width.
 */

const sizeMediaEmbeds = (root = document) => {
    root.querySelectorAll('figure.media iframe').forEach((iframe) => {
        const w = parseInt(iframe.getAttribute('width'), 10);
        const h = parseInt(iframe.getAttribute('height'), 10);
        if (!w || !h) return;

        iframe.style.aspectRatio = `${w} / ${h}`;
        if (h > w) iframe.parentElement.classList.add('media-portrait');
    });
};

document.addEventListener('DOMContentLoaded', () => sizeMediaEmbeds());

export { sizeMediaEmbeds };
