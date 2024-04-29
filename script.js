function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(firstNumber, secondNumber, operator) {
  return operator(firstNumber, secondNumber);
}

let firstNumber = 10;
let secondNumber = 10;
let operator = add;
let display = '';

let tableCells = document.querySelectorAll("button");

tableCells.forEach(td => {
    td.addEventListener('click', event => {
        const buttonValue = event.target.value;
        console.log(buttonValue);
    })
})
