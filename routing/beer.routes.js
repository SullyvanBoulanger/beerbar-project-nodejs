const {
  getBeer,
  getBeers,
  createBeer,
  updateBeer,
  deleteBeer,
  getAverageBeerDegrees,
} = require("../controllers/beer.ctrl");
const router = require("express").Router();
const { validatePositivePrice } = require("../middlewares/beer.validator");
const { catchError } = require("../middlewares/catchError");

router.get("/bars/:bar_id/beers", getBeers);
router.get("/beers/:beer_id", getBeer);
router.get("/bars/:bar_id/degrees", getAverageBeerDegrees);
router.post(
  "/bars/:bar_id/beers",
  [validatePositivePrice(), catchError],
  createBeer
);
router.put(
  "/beers/:beer_id",
  [validatePositivePrice(), catchError],
  updateBeer
);
router.delete("/beers/:beer_id", deleteBeer);

module.exports = router;
