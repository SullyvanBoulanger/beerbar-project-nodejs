const {
  getBeer,
  createBeer,
  updateBeer,
  deleteBeer,
  getBeersByBar,
} = require("../controllers/beer.ctrl");

const router = require("express").Router();

router.get("/bars/:bar_id/beer", getBeersByBar);
router.get("/beer/:beer_id", getBeer);
router.post("/bars/:bar_id/beer", createBeer);
router.put("/beer/:beer_id", updateBeer);
router.delete("/beer/:beer_id", deleteBeer);

module.exports = router;
