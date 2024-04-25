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
  validateStatusOrderBeers
} = require("../middlewares/order.validator");
const { catchError } = require("../middlewares/catchError");
const router = require("express").Router();

router.post(
  "/bars/:bar_id/orders",
  [validateOrderStatus(), validatePositiveOrderPrice(), catchError],
  createOrder
);
router.put(
  "/orders/:order_id",
  [validateOrderStatus(), validatePositiveOrderPrice(),validateStatusOrderBeers(), catchError],
  updateOrder
);
router.delete("/orders/:order_id", deleteOrder);
router.get("/bars/:bar_id/orders", getOrdersByBar);
router.get("/orders/:order_id", getOrder);

module.exports = router;
