const {
  getBeer,
  createBeer,
  updateBeer,
  deleteBeer,
  getBeersByBar,
  getAverageBeerDegrees,
} = require("../controllers/beer.ctrl");

const router = require("express").Router();

router.get("/bars/:id_bar/beer", getBeersByBar);
router.get("/beer/:id_beer", getBeer);
router.get("/bars/:bar_id/degrees", getAverageBeerDegrees);
router.post("/bars/:id_bar/beer", createBeer);
router.put("/beer/:id_beer", updateBeer);
router.delete("/beer/:id_beer", deleteBeer);

module.exports = router;
