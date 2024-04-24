const {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersByBar,
  getOrder,
} = require("../controllers/order.ctrl");
const { validateOrderStatus } = require("../middlewares/order.validator");
const { catchError } = require("../middlewares/catchError");
const router = require("express").Router();

router.post("/bars/:bar_id/orders", [validateOrderStatus(), catchError], createOrder);
router.put("/orders/:order_id", [validateOrderStatus(), catchError], updateOrder);
router.delete("/orders/:order_id", deleteOrder);
router.get("/bars/:bar_id/orders", getOrdersByBar);
router.get("/orders/:order_id", getOrder);

module.exports = router;
