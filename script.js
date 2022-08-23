const container = document.querySelector(".container");
const Display = document.querySelector(".Display");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#deleteAll");
const equalsButton = document.querySelector("#equals");
const nums = container.querySelectorAll(`button.num`);
const operators = container.querySelectorAll(".operator");

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operated = false;
let firstNum = 0;
let operator = "";
let secondNum = 0;
let displayValue = "";

nums.forEach((button) => button.addEventListener("click", display));
operators.forEach((operator) => operator.addEventListener("click", calculate));
equalsButton.addEventListener("click", operate);
deleteButton.addEventListener("click", deleted);
clearButton.addEventListener("click", clear);
window.addEventListener("keydown", keyboard);

function keyboard(e) {
  if (isNaN(parseInt(e.key))) {
    return;
  }
  if (operated) {
    clear();
  }
  displayValue += parseInt(e.key);
  Display.textContent = displayValue;
}

function display() {
  if (operated) {
    clear();
  }
  displayValue += this.textContent;
  Display.textContent = displayValue;
}
function calculate() {
  if (operator != "" && !operated) {
    operate();
    Display.textContent = displayValue;
  }
  operated = false;
  firstNum = parseInt(displayValue);
  displayValue = "";
  operator = this.id;
}

function clear() {
  firstNum = 0;
  operator = "";
  secondNum = 0;
  displayValue = "";
  Display.textContent = "0";
  operated = false;
}

function deleted() {
  displayValue = displayValue.slice(0, -1);
  Display.textContent = displayValue;
  if (displayValue == "") {
    Display.textContent = 0;
  }
}

function operate() {
  if (operator == "") {
    Display.textContent = "ERROR";
    return;
  }
  secondNum = parseInt(displayValue);
  switch (operator) {
    case "add":
      displayValue = add(firstNum, secondNum);
      break;
    case "subtract":
      displayValue = subtract(firstNum, secondNum);
      break;
    case "multiply":
      displayValue = multiply(firstNum, secondNum);
      break;
    case "divide":
      displayValue = divide(firstNum, secondNum);
  }
  Display.textContent = displayValue;
  operated = true;
}
