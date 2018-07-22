const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  //Validate if Email is Valid
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }
  //Validate if Email Field is empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  //Validate if Password Field is Empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
