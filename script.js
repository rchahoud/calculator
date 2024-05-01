let firstOperand;
let lastOperand;
let operator;
let operandFlag;
let lastAction;

function start() {
  firstOperand = "";
  lastOperand = "";
  operator = null;
  operandFlag = 0;
  lastAction = "";
  
  display(0);

  const tableCells = document.querySelectorAll("button");

  tableCells.forEach((td) => {
    td.addEventListener("click", (event) => {
      const buttonValue = event.target.value;
      clickHandle(buttonValue);
    });
  });
}

function debug() {
  console.log(
    `Apos Operate(): firstOperand: ${firstOperand}, lastOperand:${lastOperand}, operandFlag: ${operandFlag}, operator: ${operator}`
  );
}

function display(value) {
  const display = document.querySelector("#display");
  display.textContent = value;
}

function ac() {
  firstOperand = "";
  lastOperand = "";
  operator = null;
  operandFlag = 0;
  display("");
  debug();
}

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

function operate() {
  const a = parseFloat(firstOperand);
  const b = parseFloat(lastOperand);
  firstOperand = operator(a, b);
  display(firstOperand);
  firstOperand = String(firstOperand);
  console.log(`Resultado: ${firstOperand}`);
  debug();
}

function assignValue(value) {
  if (operandFlag === 0) {
    firstOperand = firstOperand + value;
    display(firstOperand);
    console.log(`firstOperand: ${firstOperand} flag: ${operandFlag}`);
  } else {
    lastOperand = lastOperand + value;
    display(lastOperand);
    console.log(`lastOperand: ${lastOperand} flag: ${operandFlag}`);
  }
}

function clickHandle(input) {
  switch (input) {
    case "+":
      if (operandFlag === 0) operandFlag = 1;
      operator = add;
      lastAction = "+";
      break;
    case "-":
      if (operandFlag === 0) operandFlag = 1;
      operator = subtract;
      lastAction = "-";
      break;
    case "x":
      if (operandFlag === 0) operandFlag = 1;
      operator = multiply;
      lastAction = "x";
      break;
    case "/":
      if (operandFlag === 0) operandFlag = 1;
      operator = divide;
      lastAction = "/";
      break;
    case "%":
      lastAction = "%";
      break;
    case "+/-":
      lastAction = "+/-";
      break;
    case "AC":
      ac();
      lastAction = "AC";
      break;
    case ".":
      lastAction = ".";
      break;
    case "=":
      operate();
      lastAction = "=";
      break;
    default:
      if (lastAction === "=") ac();
      assignValue(input);
      lastAction = "default";
      break;
  }
}

start();