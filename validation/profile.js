const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  //Check length of the handle
  if ((!Validator.isLength(data.handle), {min: 2, max: 40})) {
    errors.handle = "Handle needs to be between 2 and 4 Characters";
  }
  //Check if handle field is empty
  if (!Validator.isEmpty(data.handle)) {
    errors.handle = "Profile Handle is required.";
  }
  //Check if status field is empty
  if (!Validator.isEmpty(data.status)) {
    errors.handle = "Status field is required.";
  }
  //Check if skills field is empty
  if (!Validator.isEmpty(data.skills)) {
    errors.handle = "Skills field is required.";
  }
  //Check if Field is a URL
  if (!Validator.isEmpty(data.website)) {
    if (Validator.isURL(data.website)) {
      errors.website = "Not a valid URL.";
    }
  }
  //Check if Field is a URL
  if (!Validator.isEmpty(data.youtube)) {
    if (Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL.";
    }
  } //Check if Field is a URL
  if (!Validator.isEmpty(data.twitter)) {
    if (Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL.";
    }
  } //Check if Field is a URL
  if (!Validator.isEmpty(data.facebook)) {
    if (Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL.";
    }
  } //Check if Field is a URL
  if (!Validator.isEmpty(data.linkedIN)) {
    if (Validator.isURL(data.linkedIN)) {
      errors.linkedIN = "Not a valid URL.";
    }
  } //Check if Field is a URL
  if (!Validator.isEmpty(data.instagram)) {
    if (Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL.";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
