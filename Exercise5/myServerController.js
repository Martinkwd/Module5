const goHome = (req, res) => {
  res.status(200);
  res.send("Hello Martin, thi is your home page");
};

const goContact = (req, res) => {
  res.status(200);
  res.send("You can contact me: 222-222-222");
};

const goAbout = (req, res) => {
  res.status(200);
  res.send("this is the about page where you can find things about me");
};

const goNewPost = (req, res) => {
  res.status(200);
  res.send("New post to add");
};

module.exports = {
  goHome,
  goContact,
  goAbout,
  goNewPost,
};
