const CalculatorLibrary = require("../Exercise7/library/Calculator");
const calculator = new CalculatorLibrary();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = calculator.add(number1, number2);
  res.status(200);
  res.send({ res: result });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = calculator.subtraction(number1, number2);
  res.status(200);
  res.send({ res: result });
};
const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = calculator.multiply(number1, number2);
  res.status(200);
  res.send({ res: result });
};
const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = calculator.divide(number1, number2);
  res.status(200);
  res.send({ res: result });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
