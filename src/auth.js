const { userAuth } = require("./middleware/userAuth");
const express = require("express");
const app = express();
app.use("/user/adduser", userAuth, (req, res) => {
  console.log("validate");
});
app.listen(7000, () => {
  console.log("server running");
});
