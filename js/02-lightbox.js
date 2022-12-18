import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMurkup = creategalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMurkup)

// galleryContainer.addEventListener('click', onGalleryContainerClick)



function creategalleryItems(images) {
  return galleryItems.map(({preview, original, description}) => {
    return ` 
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a>

    </div>
    `;
  })
  .join('');
 
}

// function onGalleryContainerClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG"){
//     return
//   }

//   const urlLargeImage = evt.target.getAttribute("data-source");
  
//   const instance = simplelightbox.create(
//     `
//       <img src = "${urlLargeImage}">
//     `
//   )
//   instance.show()
// }





console.log(galleryItems);
