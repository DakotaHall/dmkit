const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNPCInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "This character needs a name";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
