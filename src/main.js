import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryMarkup } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.js-search-form');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const queryValue = form.elements.query.value.trim().toLowerCase();

  if (queryValue === '') {
    gallery.innerHTML = '';
    iziToast.error({
      message: 'Please enter a search query.',
    });
    return;
  }

  loader.style.display = 'block';

  searchImages(queryValue)
    .then(data => {
      const markup = createGalleryMarkup(data);
      gallery.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(onSearchError)

    .finally(() => {
      loader.style.display = 'none';
      form.reset();
    });
}

function onSearchError(error) {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
  gallery.innerHTML = '';
  loader.style.display = 'none';
}

let lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

iziToast.settings({
  class: 'izi-toast',
  position: 'topRight',
  backgroundColor: 'rgba(239, 64, 64, 1)',
  progressBarColor: 'rgba(181, 27, 27, 1)',
  theme: 'dark',
});