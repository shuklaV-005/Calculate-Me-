let currentInput = "";
let memory = 0;

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    switch (value) {
      case "C":
        currentInput = "";
        display.value = "";
        break;

      case "=":
        try {
          currentInput = eval(currentInput).toString();
        } catch {
          currentInput = "Error";
        }
        display.value = currentInput;
        break;

      case "M+":
        try {
          memory += eval(currentInput || "0");
        } catch {
          memory = 0;
        }
        break;

      case "M-":
        try {
          memory -= eval(currentInput || "0");
        } catch {
          memory = 0;
        }
        break;

      case "%":
        try {
          currentInput = (eval(currentInput) / 100).toString();
        } catch {
          currentInput = "Error";
        }
        display.value = currentInput;
        break;

      default:
        // Prevent multiple decimals in the same number
        if (
          value === "." &&
          currentInput.slice(-1) === "."
        ) break;

        // Prevent invalid starts like * / +
        if (
          ["+", "-", "*", "/"].includes(value) &&
          currentInput === ""
        ) break;

        currentInput += value;
        display.value = currentInput;
    }
  });
});
