const location = document.getElementById('location');
const index = document.getElementById('index');
const country = document.getElementById('country');
const region = document.getElementById('region');
const city = document.getElementById('city');
const street = document.getElementById('street');
const homeNum = document.getElementById('home_number');

const mainAddressConfirmation = document.getElementById('main_address');

const isChecked = () => {
    const letters = /^[А-Яа-я]+$/;
    const indexFormat = /^[0-9]+$/;
    
    let username_result = false;
    let email_result = false;
    let phoneNumber_result = false;
    let city_result = false;
    let persDataConfirmation_result = false;

    document.querySelector('.error_message').innerHTML = "";

    if (username.value == '' || !username.value.match(letters)) {
        document.querySelector('.error_message').innerHTML += "Введите имя<br>";
    } else {
        username_result = true;
    }

    if (email.value == '' || !email.value.match(mailFormat)) {
        document.querySelector('.error_message').innerHTML += "Введите электронную почту<br>";
    } else {
        email_result = true;
    }
    if (city.value == '' || !city.value.match(letters)) {
        document.querySelector('.error_message').innerHTML += "Укажите город<br>";
    } else {
        city_result = true;
    }
    if (phoneNumber.value == '' || !phoneNumber.value.match(phoneFormat)) {
        document.querySelector('.error_message').innerHTML += "Введите номер телефона<br>";
    } else {
        phoneNumber_result = true;
    }
    if (!persDataConfirmation.checked) {
        document.querySelector('.error_message').innerHTML += "Подтвердите свое согласие на обработку персональных данных<br>";
    } else {
        persDataConfirmation_result = true;
    }

    if (username_result == true && email_result == true && phoneNumber_result == true && city_result == true && persDataConfirmation_result == true) {
        console.log('validation submit');
        return true;
    } else {
        console.log('validation failed');
        return false;
    }
}

const sendData = () => {
    if (isChecked() === true) {
        fetch('https://httpbin.org/post', {
                method: 'POST',
                body: new FormData(feedback)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
        form.reset();
    }
}

document.querySelector('#feedback').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submit');
    sendData();
})