const { body } = require("express-validator");

module.exports.validatePositivePrice = () =>
  body("price", "Le prix n'est pas positif").isFloat({
    min: 0,
  });
