require("dotenv").config();
require("./database");

const express = require("express");
const app = express();
const router = require("./routing/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use(router);

module.exports = app;
