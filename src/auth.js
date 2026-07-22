const { userAuth } = require("./middleware/userAuth");
const express = require("express");
const app = express();
app.use("/user/adduser", (req, res) => {
  // console.log("validate");
  // try {
  throw new Error("iNVALIDA AUTH");
  // } catch {
  //   res.send("Invalid Auth from try catch");
  // }
});
app.use("/", (err, req, res, next) => {
  if (err) {
    console.log(err);
    res.send("Invalid data");
  }
});
app.listen(7000, () => {
  console.log("server running");
});
