let displayValue = "";
let currentOperation = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "0";
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result;
    document.getElementById("display").value = result;
  } catch (error) {
    displayValue = "";
    document.getElementById("display").value = "Error";
  }
}
