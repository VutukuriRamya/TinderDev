const { response } = require("express");
const validator = require("validator");
function validateFields(req) {
  const { firstName, lastName, email, password } = req.body;
  if (!(firstName.length > 0 && lastName.length > 0)) {
    throw new Error("please enter first and last name");
  } else if (!validator.isEmail(email)) {
    throw new Error("enter valid email");
  }
}
module.exports = validateFields;
