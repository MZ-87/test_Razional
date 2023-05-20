"use strict"
const form = document.getElementById('userInfo');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData();
})

form.addEventListener('reset', (e) => {
    form.reset();
})

function sendData() {
    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: new FormData(userInfo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
}