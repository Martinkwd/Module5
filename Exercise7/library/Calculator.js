const logLibrary = require("./logging");
const logger = new logLibrary();

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 10);
  }

  add(num1, num2) {
    const value = num1 + num2;
    logger.log({ id: this.id, result: value });
    return value;
  }
  subtraction(num1, num2) {
    const value = num1 - num2;
    logger.log({ id: this.id, result: value });
    return value;
  }
  multiply(num1, num2) {
    const value = num1 * num2;
    logger.log({ id: this.id, result: value });
    return value;
  }
  divide(num1, num2) {
    const value = num1 / num2;
    logger.log({ id: this.id, result: value });
    return value;
  }
}

module.exports = Calculator;
