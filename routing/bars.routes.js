const {
  getBar,
  getBars,
  createBar,
  updateBar,
  deleteBar,
} = require("../controllers/bars.ctrl");

const router = require("express").Router();

router.get("bars", getBars);
router.get("bars/:id", getBar);
router.post("", createBar);
router.put("bars/:id", updateBar);
router.delete(":id", deleteBar);

module.exports = router;
