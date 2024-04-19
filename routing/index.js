const router = require("express").Router();
const barRoutes = require("./bars.routes.js");

router.use("bars", barRoutes);

module.exports = router;
