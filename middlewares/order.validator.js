const { body, param } = require("express-validator");
const BeerOrder = require("../database/models/beerOrder.model");
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
  )
    .notEmpty()
    .exists();

module.exports.validateStatusOrderBeers = () => param("order_id").custom(async order_id => {
  const beersFromOrder = await BeerOrder.findAll({
    where: { OrderId: order_id }
  });
  if (beersFromOrder.length != 0) {
    throw new Error("Le status ne peut pas etre modifier car il contient des bieres.");
  }
});
