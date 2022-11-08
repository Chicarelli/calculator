import { Calculator } from "./calculator.js";

const calculator = new Calculator();

document.querySelectorAll(".key").forEach((button) => {
  button.addEventListener("click", handleBtnPressed);
});

function handleBtnPressed(e) {
  const valuePressed = e.target.innerHTML;

  if (valuePressed === "") return;

  if (isNaN(Number(valuePressed))) {
    calculator.setOperator(valuePressed);
  } else {
    calculator.setActualNumber(valuePressed);
  }

  updateValues();
}

const resultInput = document.getElementById("calculator-result");
const actualNumberInput = document.getElementById("calculator-input");

function updateValues() {
  resultInput.innerHTML = `${calculator.result} ${calculator.operator}`;
  actualNumberInput.value = `${calculator.actualNumber}`;
}
