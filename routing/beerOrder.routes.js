const {
  addBeerToOrder,
  removeBeerFromOrder,
} = require("../controllers/beer_commande.ctrl");

const router = require("express").Router();

router.post("/commandes/:order_id/beer/:beer_id", addBeerToCommande);
router.delete("/commandes/order_id/beer/:beer_id", removeBeerFromCommande);
module.exports = router;
