const { body } = require("express-validator");
const Status = ["en cours", "terminée"];
module.exports.validateOrderStatus = () =>
  body("status", "Status doit être soit en cours ou terminée.").isIn(Status);

module.exports.validatePositiveOrderPrice = () =>
  body("price", "Le prix de la commande n'est pas positif").isFloat({
    min: 0,
  });

module.exports.dateOrderTodayDate = () =>
  body("date").custom((value) => {
    const todayDate = Date.now();
    const orderDate = new Date(value);

    if (orderDate > todayDate) {
      throw new Error(
        "La date de la commande ne doit pas être supérieure à la date du jour"
      );
    }

    return true;
  });

module.exports.requiredBodyField = () =>
  body(
    ["name", "price", "date", "status"],
    "Tout les champs obligatoires ne sont pas renseignés"
  ).exists();
