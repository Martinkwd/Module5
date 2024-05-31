const express = require("express");
const myModuleController = require("./finalModuleController");
const myModuleRoute = express.Router();

myModuleRoute.get("/", (req, res) => {
  myModuleController.myProject(req, res);
});

module.exports = myModuleRoute;
