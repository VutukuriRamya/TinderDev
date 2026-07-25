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
//finding single user using firstName
app.get("/user", async (req, res) => {
  try {
    const user = await User.find(req.body.fname);
    if (user.length === 0) {
      res.send("notFound");
    }
    res.send("found");
  } catch (err) {
    res.status(400).send("Something went wrong");
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
