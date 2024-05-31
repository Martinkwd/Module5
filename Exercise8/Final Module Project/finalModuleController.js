const axios = require("axios");

const myProject = (req, res) => {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    res.status(200);
    res.send({ res: response.data });
  });
};

module.exports = { myProject };
