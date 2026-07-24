console.log("Welcome Back!!....let's create a server");
// install express to listen to our request
const connectDb = require("../db.js");
const express = require("express");
const { User } = require("./Models/userschema.js");
const app = express();
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "ramya",
    lastName: "v",
    age: 27,
    email: "gmail",
  });
  await user.save();
  res.send("Data added successfully");
});
connectDb
  .connectDb()
  .then(() => {
    app.listen(7000, () => {
      console.log(" I am from server");
    });
  })
  .catch((err) => {
    console.error(err);
  });
// /ab?c -> b is optional here so /ac, /abc works

//  /ab*c -> between b and c anything written works -> /abc, /abRamyac

// /ab+c  -> /abc, /abbbbbbbbbbbbbbbc works u can write b 'n' no. of times
