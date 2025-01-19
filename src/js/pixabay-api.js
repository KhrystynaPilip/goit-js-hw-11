import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function searchImages(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '48329530-69c109c2641b284f345f462d9';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
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