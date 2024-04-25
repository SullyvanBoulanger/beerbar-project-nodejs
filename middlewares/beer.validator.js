const { body } = require("express-validator");

module.exports.validatePositivePrice = () =>
  body("price", "Le prix n'est pas positif").isFloat({
    min: 0,
  });

module.exports.requiredBodyField = () =>
  body(
    ["name", "degrees", "price"],
    "Tout les champs obligatoires ne sont pas renseignés"
  ).exists();
