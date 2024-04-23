const {
  getBar,
  getBars,
  createBar,
  updateBar,
  deleteBar,
} = require("../controllers/bar.ctrl");

const router = require("express").Router();

router.get("", getBars);
router.get("/:bar_id", getBar);
router.post("", createBar);
router.put("/:bar_id", updateBar);
router.delete("/:bar_id", deleteBar);

module.exports = router;
