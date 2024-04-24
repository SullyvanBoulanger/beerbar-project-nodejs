const { body } = require("express-validator");
const Status = [
  "en cours",
  "terminée",
];
module.exports.validateOrderStatus = () => body(
  "status",
  "Status doit être soit en cours ou terminée."
).isIn(Status);
