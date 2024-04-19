const {
  getBar,
  getBars,
  createBar,
  updateBar,
  deleteBar,
} = require("../controllers/bar.ctrl");

const router = require("express").Router();

router.get("", getBars);
router.get("/:id", getBar);
router.post("", createBar);
router.put("/:id", updateBar);
router.delete(":id", deleteBar);

module.exports = router;
