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

console.log(operate(firstNumber, secondNumber, operator));