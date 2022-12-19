import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMurkup = creategalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMurkup)

galleryContainer.addEventListener('click', onGalleryContainerClick)



function creategalleryItems(images) {
  return galleryItems.map(({preview, original, description}) => {
    return ` 
        <li>
            <a class="gallery__item" 
            href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
            </a>
        </li>
    
    `;
  })
  .join('');
 
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG"){
    return
  }

  const urlLargeImage = evt.target.getAttribute("data-source");
  
  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
      // do something…
  });
}


console.log(galleryItems);
