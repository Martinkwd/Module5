const express = require("express");
const app = express();
const cors = require("cors");

const mycalculatorRouter = require("../Exercise5/route/myCalculatorRoute");
app.use(cors());
app.use("/Calculator", mycalculatorRouter);

module.exports = app;
