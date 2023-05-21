"use strict"
document.addEventListener('DOMContentLoaded', (e) => {
    fetchImages();
})

function fetchImages() {
    for (let i = 0; i < 10; i++) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => appendImg(data))
            .catch(err => console.log(err))
    }
}

function appendImg(data) {
    if (!data) return;
    // Храним ссылку на элемент, внутрь которого
    // добавим новые элементы:
    const frameArea = document.querySelector('.frame-area');
    const imgNode = composeImg(data);

    // Добавляем созданный элемент во frameArea:
    frameArea.append(imgNode);
}

function composeImg(data) {
    if (!data) return;
    // Обращаемся к шаблону, который создали ранее:
    const template = document.querySelector('#frame-template')
    //клонируем элемент, чтобы сделать несколько одинаковых
    const image = template.content.cloneNode(true)

    image.querySelector('.frame__img').src = data.message;
    return image;
}

function checkPosition() {
    //определяем высоту документа и высоту экрана
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;

    // определяем, сколько пикселей пользователь уже проскроллил:
    const scrolled = window.scrollY;

    // скроллим до этой высоты - потом подгрузка новых данных
    const threshold = height - screenHeight / 4;

    // отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + screenHeight;

    if (position >= threshold) {
        // Если мы пересекли полосу-порог, вызываем нужное действие.
        fetchImages();
    }
}

;
(() => {
    window.addEventListener('scroll', checkPosition)
    window.addEventListener('resize', checkPosition)
})()