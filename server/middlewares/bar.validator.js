const { body } = require("express-validator");
const Bar = require("../database/models/bar.model");

module.exports.validateBar = () =>
  body("name")
    .notEmpty()
    .trim()
    .custom(async (name) => {
      const exists = await Bar.findOne({ where: { name } });
      if (exists) {
        throw new Error("Ce bar existe déjà");
      }
      return true;
    });
