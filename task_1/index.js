"use strict"

const input1 = document.querySelector('.input_1');
const input2 = document.querySelector('.input_2');
const input3 = document.querySelector('.input_3');
const input4 = document.querySelector('.input_4');
const input5 = document.querySelector('.input_5');
const form = document.querySelector('.inputs-wrapper');

form.addEventListener('reset', (e) => {
    form.reset();
})



// console.log(input2.classList);
//show second input
input1.addEventListener('input', (e) => {
    input2.classList.remove('hidden');
    fillInput2();
    multiplyInput1OnInput2();
})

//create an array of nums to put in the second input
function fillInput2() {
    let numArr = [];
    let arrElem = 0;
    while (arrElem < 10) {
        arrElem++;
        numArr.push(arrElem);
    }
    // console.log(input2.value);
    // console.log(numArr);
    input2.value = numArr;
}

//create an array of multiply results
let newArr = [];

function multiplyInput1OnInput2() {
    let numArr = input2.value.split(',');
    // let newArr = [];
    numArr.forEach((item) => {
        let result = item * input1.value;
        input3.insertAdjacentHTML("beforeEnd", `<option value="${result}">${result}</option>`);
        // newArr.push(result);
    })
    input3.removeAttribute('disabled');
    // console.log(newArr);
    // fillOptionsInput3();
    // return newArr;
}

// function fillOptionsInput3() {
//     for (let i = 0; i < newArr.length; i++) {
//         input3.insertAdjacentHTML("afterbegin", `<option value="${i}">${i}</option>`)
//     }
// }

