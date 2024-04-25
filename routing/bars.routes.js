const {
  getBar,
  getBars,
  createBar,
  updateBar,
  deleteBar,
} = require("../controllers/bar.ctrl");
const { validateBar } = require("../middlewares/bar.validator");
const { catchError } = require("../middlewares/catchError");
const router = require("express").Router();
const { requiredBodyField } = require("../middlewares/bar.validator");
const { catchError } = require("../middlewares/catchError");

router.get("", getBars);
router.get("/:bar_id", getBar);
router.post("", [requiredBodyField(), validateBar(), catchError], createBar);
router.put("/:bar_id", [requiredBodyField(), catchError], updateBar);
router.delete("/:bar_id", deleteBar);

module.exports = router;
