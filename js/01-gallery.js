import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');


function renderGalleryItems() {
  
  const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery_item">
  <a class="gallery_link" href="${original}">
    <img
      class="gallery_image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </li>`
  ).join('')

    gallery.innerHTML = galleryMarkup;
}

renderGalleryItems(galleryItems);


gallery.addEventListener('click', openModalOnClick) 
function openModalOnClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const imageUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imageUrl}" alt="Image" width="500" height="300"/>`);
    instance.show();


    const closeModal = () => {
        instance.close();
        window.removeEventListener('keydown', handleKeyPress);
    };

    const handleKeyPress = event => {
        if (event.code === 'Escape') {
            closeModal();
        }
    };

    window.addEventListener('keydown', handleKeyPress);
};

