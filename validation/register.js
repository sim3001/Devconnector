const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //Validate length of the Name
    if (!Validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = "Name must be 2 and 30 characters";
    }
    //Validate if Name field is empty
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    //Validate if Email Field is empty
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    //Validate if Email is Valid
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is Invalid";
    }
    //Validate if Password Field is Empty
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    //Validate Length of Password
    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be between 6 and 30 characters";
    }
    //Validate if Password Confirm Field is empty
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm Password field is required";
    }
    //Validate if Confirm Password and Password Match
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
