document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêcher l'événement de propagation
            lightbox.innerHTML = ''; // Clear previous content

            const img = item.querySelector('img').cloneNode(); // Clone the clicked image
            const title = item.querySelector('h3') ? item.querySelector('h3').cloneNode(true) : null; // Clone the title
            const description = item.querySelector('p') ? item.querySelector('p').cloneNode(true) : null; // Clone the description

            const contentWrapper = document.createElement('div');
            contentWrapper.classList.add('lightbox-content');

            const textWrapper = document.createElement('div');
            textWrapper.classList.add('lightbox-text');

            const closeBtn = document.createElement('span');
            closeBtn.textContent = '×';
            closeBtn.classList.add('lightbox-close');

            contentWrapper.appendChild(img); // Add image to the content
            if (title) textWrapper.appendChild(title); // Add title to text wrapper
            if (description) textWrapper.appendChild(description); // Add description to text wrapper

            contentWrapper.appendChild(textWrapper); // Add text wrapper to content
            lightbox.appendChild(contentWrapper); // Add content to lightbox
            lightbox.appendChild(closeBtn); // Add close button to lightbox

            lightbox.style.display = 'flex';

            // Fermer la lightbox en cliquant sur le bouton "×"
            closeBtn.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        });
    });

    // Fermer la lightbox en cliquant n'importe où en dehors de l'image
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Empêcher la fermeture en cliquant sur le contenu
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightbox) {
            e.stopPropagation();
        }
    });
});
