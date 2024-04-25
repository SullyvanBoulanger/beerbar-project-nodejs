const {
  addBeerToOrder,
  removeBeerFromOrder,
} = require("../controllers/beerOrder.ctrl");
const router = require("express").Router();

router.post("/orders/:order_id/beers/:beer_id", addBeerToOrder);
router.delete("/orders/:order_id/beers/:beer_id", removeBeerFromOrder);

module.exports = router;
