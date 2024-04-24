const { body } = require("express-validator");
/* module.exports.validatorOrderStatus = () => body("status").custom(value => {
 
  if (value != Status.IN_PROGRESS && value != Status.COMPLETED) {
    throw new Error('Le status n\'est pas correct');
  }
  return true;
}); */
const Status = [
  "en cours",
  "terminée",
];
module.exports.validateOrderStatus = () => body(
  "status",
  "Status doit être soit en cours ou terminée."
).isIn(Status);