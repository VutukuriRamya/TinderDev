const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});
const User = mongoose.model("User", schema);
module.exports = { User };
