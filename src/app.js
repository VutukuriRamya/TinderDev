console.log("Welcome Back!!....let's create a server");
// install express to listen to our request
const express = require("express");
const app = express();
app.use("/test", (req, res) => {
  res.send("I am returning response from server");
});
app.use("/path", (req, res) => {
  res.send("I am in route path");
});
app.listen(7000, () => {
  console.log(" I am from server");
});
