require("dotenv").config();
require("./database/index");
const express = require("express");
const app = express();
const router = require("./routing");

app.use(router);

module.exports = app;
