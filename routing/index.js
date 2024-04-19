const router = require("express").Router();
const barRoutes = require("./bars.routes.js");
const orderRoutes = require("./order.routes.js");

router.use("bars", barRoutes);
router.use(orderRoutes);

module.exports = router;
