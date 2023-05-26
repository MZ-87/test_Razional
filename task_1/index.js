"use strict"

const input1 = document.querySelector('.input_1');
const input2 = document.querySelector('.input_2');
const input3 = document.querySelector('.input_3');
const input4 = document.querySelector('.input_4');
const input5 = document.querySelector('.input_5');

const btnShow = document.querySelector('.btn_show');
const btnFill = document.querySelector('.btn_fill');
const btnWriteSQLRequest = document.querySelector('.btn_writeSQLrequest');

const resultArea = document.querySelector('.result-area');
const requestArea = document.querySelector('.request-area');

const form = document.getElementById('form');

form.addEventListener('reset', (e) => {
    form.reset();

    if (input4.classList.contains('even')) {
        input4.classList.remove('even');
    } else if (input4.classList.contains('odd')) {
        input4.classList.remove('odd')
    }

    input3.replaceChildren();
    input3.setAttribute('disabled', 'disabled');

    resultArea.innerText = '';
    requestArea.innerText = '';
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

//buttons
btnShow.addEventListener('click', (e) => {
    e.preventDefault();

    resultArea.innerText += `Значение поля 1: 
    ${input1.value}
    Значение поля 2: 
    ${input2.value}
    Значение поля 3: 
    ${input3.value}
    Значение поля 4: 
    ${input4.value}
    Значение поля 5: 
    ${input5.value}
    `;
})

btnFill.addEventListener('click', (e) => {
    e.preventDefault();
    resultArea.innerText = '';
    input3.replaceChildren();

    let randomNum1 = Math.floor(Math.random() * (100 - 1) + 1);
    input1.value = randomNum1;
    input2.classList.remove('hidden');
    fillInput2();
    multiplyInput1OnInput2();
    createResultString();
})

let idCounter = 0;
btnWriteSQLRequest.addEventListener('click', (e) => {
    e.preventDefault();

    requestArea.innerText = '';
    idCounter++;
    let request = `
    INSERT INTO myTable (ID, Поле1, Поле2, Поле3, Поле4, Поле5)
    VALUES ('${idCounter}', '${input1.value}', '${input2.value}', '${input3.value}', '${input4.value}','${input4.value}');
    `
    requestArea.innerText = request;

    appendRow(idCounter, input1.value, input2.value, input3.value, input4.value, input5.value);
})

function appendRow(...data) {
    const table = document.querySelector('#myTable');
    const tableRow = composeRow(...data);

    table.append(tableRow);
}

function composeRow(id, inp1, inp2, inp3, inp4, inp5) {
    const template = document.querySelector('#frame-template');
    const row = template.content.cloneNode(true);

    row.querySelector('.id').innerText = id;
    row.querySelector('.field1').innerText = inp1;
    row.querySelector('.field2').innerText = inp2;
    row.querySelector('.field3').innerText = inp3;
    row.querySelector('.field4').innerText = inp4;
    row.querySelector('.field5').innerText = inp5;

    return row;
}
