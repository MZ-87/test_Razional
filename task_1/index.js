"use strict"

const input1 = document.querySelector('.input_1');
const input2 = document.querySelector('.input_2');
const input3 = document.querySelector('.input_3');
const input4 = document.querySelector('.input_4');
const input5 = document.querySelector('.input_5');
const form = document.querySelector('.inputs-wrapper');

form.addEventListener('reset', (e) => {
    form.reset();

    if (input4.classList.contains('even')) {
        input4.classList.remove('even');
    } else if (input4.classList.contains('odd')) {
        input4.classList.remove('odd')
    }

    input3.replaceChildren();
    input3.setAttribute('disabled','disabled');    
})

input1.addEventListener('input', (e) => {
    input2.classList.remove('hidden'); 
    fillInput2(); 
    multiplyInput1OnInput2();
    createResultString();
})

function fillInput2() {
    let numArr = [];
    let arrElem = 0;
    while (arrElem < 100) {
        arrElem++;
        numArr.push(arrElem);
    }
    input2.value = numArr;
    return numArr;
}

function multiplyInput1OnInput2() {
    let numArr = fillInput2();
    let numString = '';

    numArr.forEach((item) => {
        let result = item * input1.value;
        input3.insertAdjacentHTML("beforeEnd", `<option value="${result}">${result}</option>`);
        numString += result;
    })

    input3.removeAttribute('disabled');
    return numString;
}

function createResultString() {
    let string1 = input1.value;
    let string2 = fillInput2().join('');
    let string3 = multiplyInput1OnInput2();

    let bigStr = string1 + string2 + string3;
    input4.value = bigStr;

    isEven(bigStr);
}

function isEven(str) {
    let num = BigInt(str);
    if (num % 2n == 0) {
        input4.classList.add('even');
    } else {
        input4.classList.add('odd');
    }
    showModulo(num);
}

function showModulo(num) {
    let modulo = num % BigInt(input1.value);
    input5.value = modulo;
}