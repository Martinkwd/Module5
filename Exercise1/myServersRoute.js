const express = require("express");
const appRouter = express.Router();

appRouter.get("/", (req, res) => {
  res.send("hello World");
});

appRouter.get("/Home", (req, res) => {
  res.send("Hello Martin, thi is your home page");
});

appRouter.get("/Contact", (req, res) => {
  res.send("You can contact me: 222-222-222");
});

appRouter.get("/About", (req, res) => {
  res.send("this is the about page where you can find things about me");
});

appRouter.get("/newPost", (req, res) => {
  res.send("New post to add");
});

module.exports = appRouter;
