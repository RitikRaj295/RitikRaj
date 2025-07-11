 //Basic calculator using class (add, subtract, multiply, divide)
 
 class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Error: Cannot divide by zero";
    }
    return a / b;
  }
}

const calc = new Calculator();
let a = 10;
let b = 2;
let operation = "multiply";

switch (operation) {
  case "add":
    console.log(calc.add(a, b));
    break;
  case "subtract":
    console.log(calc.subtract(a, b));
    break;
  case "multiply":
    console.log(calc.multiply(a, b));
    break;
  case "divide":
    console.log(calc.divide(a, b));
    break;
  default:
    console.log("Invalid operation");
}
