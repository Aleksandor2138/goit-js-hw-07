import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const body = document.querySelector("body");
console.log(body);
const gallery = document.querySelector(".gallery");

const imgLists = galleryItems.map(({preview, original, description }) =>`<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`).join(" ");
gallery.insertAdjacentHTML("afterbegin", imgLists);

// Первый вариант решения задачи

// создание мобального окна и вложеных елементов
const modal = document.createElement("div");
modal.classList.add("modal");
body.appendChild(modal);
const placeholder = document.createElement("div");
placeholder.classList.add("basicLightbox__placeholder");
placeholder.setAttribute("role", "dialog");
modal.appendChild(placeholder);

const images = document.querySelectorAll(".gallery__image");

images.forEach(image => {
    const imageOpen = (event) => {
        // отмена действий браузера по  умолчанию 
        event.preventDefault();
        // добавление классов basicLightbox + тег фото
        modal.classList.add("basicLightbox", "basicLightbox--img", "basicLightbox--visible");
        const img = document.createElement("img");
        img.src = image.dataset.source;
        while (placeholder.firstChild) {
            placeholder.removeChild(placeholder.firstChild);
        }
        placeholder.appendChild(img);

    }
    console.log(image.dataset.source);
    image.addEventListener('click', imageOpen);
});

const imageClose = (event) => {
    if (event.target !== event.currentTarget) return;
    modal.classList.remove("basicLightbox", "basicLightbox--img", "basicLightbox--visible");
        console.log(event.target);
};
modal.addEventListener("click", imageClose);
//  Закрытие с кнопки escape
const pressKeyLightBox = (event) => {
    if (modal.classList.contains("basicLightbox")){
        if (event.code === "Escape") {
            modal.classList.remove("basicLightbox", "basicLightbox--img", "basicLightbox--visible");
        }
        console.log(`соблюдение первого if`)
    }
}
body.addEventListener("keyup", pressKeyLightBox);



//  Второй вариант реализации задачи

// const images = document.querySelectorAll(".gallery__image");
// images.forEach(image => {
//     const imageOpen = (event) => {
//         // отмена действий браузера по  умолчанию 
//         event.preventDefault();
//         // инициализация basicLightbox базовый с фото
//         const instance = basicLightbox.create(`<img class="img-modal" src="${image.dataset.source}" >`);
//         instance.show();
//     }
//     console.log(image.dataset.source);
//     image.addEventListener('click', imageOpen);
// });
// //  Закрытие с кнопки escape
// const pressKeyLightBox = (event) => {
//     const modal = document.querySelector(".basicLightbox");
//     console.log(modal)
//     if (modal.classList.contains("basicLightbox")){
//         if (event.code === "Escape") {
//             modal.classList.remove("basicLightbox", "basicLightbox--img", "basicLightbox--visible");
//         }
//         console.log(`dsgjkytyj`)
//     }

// }
// body.addEventListener("keyup", pressKeyLightBox);