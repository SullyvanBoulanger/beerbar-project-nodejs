require("dotenv").config();
require("./database/index");
const express = require("express");
const app = express();

// DEV
app.get("*", (req, res) => res.send("TEST"));

module.exports = app;
