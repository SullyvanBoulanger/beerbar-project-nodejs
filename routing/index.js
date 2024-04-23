const router = require("express").Router();
const barRoutes = require("./bars.routes.js");
const orderRoutes = require("./order.routes.js");
const beerRoutes = require("./beer.routes.js");

router.use("/bars", barRoutes);
router.use(orderRoutes);
router.use(beerRoutes);

module.exports = router;
