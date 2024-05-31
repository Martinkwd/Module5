const express = require("express");
const myServersController = require("../myServerController");
const myServersRoute = express.Router();

myServersRoute.get("Home", (req, res) => {
  myServersController.goHome(req, res);
});

myServersRoute.get("Contact", (req, res) => {
  myServersController.goContact(req, res);
});
myServersRoute.get("About", (req, res) => {
  myServersController.goAbout(req, res);
});
myServersRoute.get("newPost", (req, res) => {
  myServersController.goNewPost(req, res);
});

module.exports = myServersRoute;
