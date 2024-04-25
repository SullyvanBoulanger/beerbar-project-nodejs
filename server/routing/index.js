const router = require("express").Router();
const barRoutes = require("./bars.routes");
const orderRoutes = require("./order.routes");
const beerRoutes = require("./beer.routes");
const beersOrdersRoutes = require("./beerOrder.routes");

router.use("/bars", barRoutes);
router.use(orderRoutes);
router.use(beerRoutes);
router.use(beersOrdersRoutes);

module.exports = router;
