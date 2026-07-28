const connectDb = require("../db.js");
const express = require("express");
const User = require("./Models/userschema.js");
const app = express();
const validateFields = require("./utils/validate.js");
const bcrypt = require("bcrypt");
//middleware
app.use(express.json());
// api level sanitisation
app.post("/signup", async (req, res) => {
  try {
    //validate fields
    validateFields(req);
    //bcrypt -use it and encrypt the password
    const { firstName, lastName, password, email } = req.body;
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
    await user.save();
    res.send("Data added successfully");
  } catch (err) {
    res.send(err.message);
  }
});
//finding single user using firstName
app.get("/user", async (req, res) => {
  try {
    const user = await User.find({ firstName: req.body.firstName });
    if (user.length === 0) {
      res.send("notFound");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//getting all the data from the db
app.get("/feed", async (req, res) => {
  try {
    const allUser = await User.find({});
    if (allUser !== 0) {
      res.send(allUser);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//delete
app.delete("/deleteUser", async (req, res) => {
  try {
    const userDelet = await User.findByIdAndDelete({ _id: req.body.id });
    res.send(userDelet);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//update
app.patch("/updateUser/:id", async (req, res) => {
  try {
    //validate the fields coming from the req.body
    //create a helper function

    const updateUsers = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    const allowedFieldUpdated = ["lastName", "age", "skills", "gender"];
    const isallowed = Object.keys(req.body).every((k) => {
      return allowedFieldUpdated.includes(k);
    });

    if (updateUsers && isallowed) {
      res.send("updated the user" + res.body);
    } else {
      res.send("user not updated");
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//login api..validate the user
//create a logib api
app.post("/login", async (req, res) => {
  try {
    //validate the email
    const user = await User.findOne({ email: req.body.email });
    if (user && (await bcrypt.compare("Ramya@123", user.password))) {
      res.send("User logged In successfully");
    } else {
      throw new Error("Not a valid user");
    }
  } catch (err) {
    res.status(400).send("Error " + err.message);
  }
});
connectDb
  .connectDb()
  .then(() => {
    app.listen(7000, () => {});
  })
  .catch((err) => {});
