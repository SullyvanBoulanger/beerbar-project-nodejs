const {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersByBar,
  getOrder,
} = require("../controllers/order.ctrl");
const {
  validateOrderStatus,
  validatePositiveOrderPrice,
<<<<<<< HEAD
  dateOrderTodayDate,
  requiredBodyField,
  validateStatusOrderBeers
=======
  validateStatusOrderBeers,
  validateStatusOrderFinish
>>>>>>> 8f0f3f2... valid: status end lock the put on the order
} = require("../middlewares/order.validator");
const { catchError } = require("../middlewares/catchError");
const router = require("express").Router();

router.post(
  "/bars/:bar_id/orders",
  [
    validateOrderStatus(),
    dateOrderTodayDate(),
    requiredBodyField(),
    validatePositiveOrderPrice(),
    catchError,
  ],
  createOrder
);
router.put(
  "/orders/:order_id",
  [
    validateOrderStatus(),
    dateOrderTodayDate(),
    requiredBodyField(),
    validatePositiveOrderPrice(),
    validateStatusOrderBeers(),
    validateStatusOrderFinish(),
    catchError,
  ],
  updateOrder
);
router.delete("/orders/:order_id", deleteOrder);
router.get("/bars/:bar_id/orders", getOrdersByBar);
router.get("/orders/:order_id", getOrder);

module.exports = router;
