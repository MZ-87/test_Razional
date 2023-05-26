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
    let index = document.querySelector('#index');
    let city = document.querySelector('#city');
    let street = document.querySelector('#street');
    let homeNumber = document.querySelector('#home_number');
    let mainAddress = document.querySelector('#main_address');

    let result = document.querySelector('.result');

    let xhr = new XMLHttpRequest();
    let url = "";
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            result.innerHTML = this.responseText;
        }
    };
    var data = JSON.stringify({
        "index": index.value,
        "city": city.value,
        "street": street.value,
        "home_number": homeNumber.value,
        "main_address": mainAddress.value,
    });

    xhr.send(data);

    // fetch('https://httpbin.org/post', {
    //         method: 'POST',
    //         body: new FormData(userInfo)
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => console.log(err));
}