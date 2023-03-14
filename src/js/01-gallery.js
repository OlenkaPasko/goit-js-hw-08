import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';


const gallery = document.querySelector('.gallery');
const createGallery = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', createGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
