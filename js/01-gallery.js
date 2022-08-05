import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");

const imgLists = galleryItems.map((image) =>`<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></div>`).join(" ");
gallery.insertAdjacentHTML("afterbegin", imgLists);
const instance = gallery.createElement(`<div class="modal"><img src="${image.original}"></div>`);
gallery.insertAdjacentHTML("afterend", instance);


const imageOpen = (event) => {
    event.preventDefault();
};
gallery.addEventListener('click', imageOpen);


// instance.show();
