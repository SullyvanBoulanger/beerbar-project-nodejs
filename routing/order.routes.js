const {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersByBar,
  getOrder,
} = require("../controllers/order.ctrl");
const router = require("express").Router();

router.post("/bars/:bar_id/orders", createOrder);
router.put("/orders/:order_id", updateOrder);
router.delete("/orders/:order_id", deleteOrder);
router.get("/bars/:bar_id/orders", getOrdersByBar);
router.get("/orders/:order_id", getOrder);

module.exports = router;
