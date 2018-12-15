const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMonsterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Your monster requires a name";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
