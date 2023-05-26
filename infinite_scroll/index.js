"use strict"
document.addEventListener('DOMContentLoaded', (e) => {
    fetchImages();
})

function fetchImages() {
    for (let i = 0; i < 20; i++) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => appendImg(data))
            .catch(err => console.log(err))
    }
}

function appendImg(data) {
    if (!data) return;
    const frameArea = document.querySelector('.frame-area');
    const imgNode = composeImg(data);

    frameArea.append(imgNode);
}

function composeImg(data) {
    if (!data) return;
    const template = document.querySelector('#frame-template')
    const image = template.content.cloneNode(true)

    image.querySelector('.frame__img').src = data.message;
    return image;
}

function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 4;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
        fetchImages();
    }
}

//замедляем скролл
function throttle(callee, timeout) {
    let timer = null;

    return function perform(...args) {
        if (timer) return;

        timer = setTimeout(() => {
            callee(...args);

            clearTimeout(timer);
            timer = null;
        }, timeout)
    }
};

(() => {
    window.addEventListener('scroll', throttle(checkPosition, 150));
    window.addEventListener('resize', throttle(checkPosition, 150));
})()