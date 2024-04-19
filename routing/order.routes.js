const {
  postOrder,
  putOrder,
  deleteOrder,
  getOrdersByBar,
  getOrderById,
} = require("../controllers/order.ctrl");

const router = require("express").Router();

router.post("/bars/:bar_id/commandes", postOrder);
router.put("/commandes/:order_id", putOrder);
router.delete("/commandes/:order_id", deleteOrder);
router.get("/bars/:bar_id/commandes", getOrdersByBar);
router.get("/commandes/:order_id", getOrderById);

module.exports = router;
