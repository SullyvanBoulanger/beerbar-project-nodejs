const {
  getBeer,
  getBeers,
  createBeer,
  updateBeer,
  deleteBeer,
  getAverageBeerDegrees,
} = require("../controllers/beer.ctrl");
const router = require("express").Router();

router.get("/bars/:bar_id/beers", getBeers);
router.get("/beers/:beer_id", getBeer);
router.get("/bars/:bar_id/degrees", getAverageBeerDegrees);
router.post("/bars/:bar_id/beers", createBeer);
router.put("/beers/:beer_id", updateBeer);
router.delete("/beers/:beer_id", deleteBeer);

module.exports = router;
