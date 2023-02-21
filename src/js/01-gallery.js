import * as basicLightbox from 'basiclightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryCreate = galleryItems
  .map(
    image =>
      `<div class="gallery__item">
      <a class=gallery__link href=${image.original}>
      <img class="gallery__image" src=${image.preview} data-source=${image.original} alt="${image.description}" class=image   />
      </a></div>`
  )

  .join('');

gallery.insertAdjacentHTML('beforeend', galleryCreate);

gallery.addEventListener('click', imageClick);

function imageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width='800' height='800'>
          `);
  instance.show();
  gallery.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}

console.log(galleryItems);
