const mongoose = require("mongoose");
const validator = require("validator");
const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      validate(value) {
        if (value.length <= 3) {
          throw new Error(
            "Please enter your first Name morethan 2 characters ",
          );
        }
      },
    },
    lastName: {
      type: String,
      minlenth: 3,
    },
    age: {
      type: Number,
      min: 18,
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Enter valid mail address");
        }
      },
    },
    skills: {
      type: [String],
    },
    gender: {
      type: String,
      validate(value) {
        if (!["female", "male", "others"].include(value)) {
          throw new Error("Please enter valid gender");
        }
      },
    },
    image: {
      type: String,
      default: "Image",
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
const User = mongoose.model("User", schema);
module.exports = User;
