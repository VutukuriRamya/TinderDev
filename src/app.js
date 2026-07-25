console.log("Welcome Back!!....let's create a server");
// install express to listen to our request
const connectDb = require("../db.js");
const express = require("express");
const User = require("./Models/userschema.js");
const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.send("Data added successfully");
  } catch (err) {
    res.send("Data not insereted");
  }
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
