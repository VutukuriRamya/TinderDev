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
    res.send(err.message);
  }
});
//finding single user using firstName
app.get("/user", async (req, res) => {
  try {
    const user = await User.find({ firstName: req.body.firstName });
    console.log(user);
    if (user.length === 0) {
      res.send("notFound");
    }
    res.send(user);
  } catch (err) {
    console.log(err);
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
app.patch("/updateUser", async (req, res) => {
  try {
    const updateUsers = await User.findByIdAndUpdate(
      req.body.id,
      {
        firstName: "lolliPop",
        email: req.body.email,
      },
      { runValidators: true },
    );
    console.log(updateUsers);
    if (updateUsers) {
      res.send("updated the user");
    } else {
      res.send("user not updated");
    }
  } catch (err) {
    console.log(err);
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
