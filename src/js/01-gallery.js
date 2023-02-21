import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryCreate = galleryItems
  .map(
    image =>
      `<a class=gallery__item href=${image.original}>
      <img class="gallery__image" src=${image.preview} alt="${image.description}" />
      </a>`
  )

  .join('');

gallery.insertAdjacentHTML('beforeend', galleryCreate);

gallery.addEventListener('click', imageClick);

function imageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  let lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionSelector: 'img',
    captionsData: 'alt',
    captionType: 'attr',
    captionDelay: 250,
  });
}
