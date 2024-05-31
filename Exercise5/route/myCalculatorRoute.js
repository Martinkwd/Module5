const express = require("express");
const caculatorController = require("../calculatorController");
const mycalculatorRouter = express.Router();

mycalculatorRouter.get("/Add", (req, res) => {
  caculatorController.addNumbers(req, res);
});

mycalculatorRouter.get("/Subtract", (req, res) => {
  caculatorController.subtractNumbers(req, res);
});

mycalculatorRouter.get("/Multiply", (req, res) => {
  caculatorController.multiplyNumbers(req, res);
});

mycalculatorRouter.get("/Divide", (req, res) => {
  caculatorController.divideNumbers(req, res);
});

module.exports = mycalculatorRouter;
