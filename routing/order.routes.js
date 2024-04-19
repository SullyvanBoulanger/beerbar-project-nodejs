const {
  postOrder,
  putOrder,
  deleteOrder,
  getOrdersByBar,
  getOrderById,
} = require("../controllers/order.ctrl");

const router = require("express").Router();

router.post("/bars/:id_bar/commandes", postOrder);
router.put("/commandes/:id_commande", putOrder);
router.delete("/commandes/:id_commande", deleteOrder);
router.get("/bars/:id_bar/commandes", getOrdersByBar);
router.get("/commandes/:id", getOrderById);

module.exports = router;
