const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Beer = require("./beer.model");
const Order = require("./order.model");

const BeerOrder = sequelize.define("BeerOrder", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

Beer.belongsToMany(Order, { through: "BeerOrder" });
Order.belongsToMany(Beer, { through: "BeerOrder" });

module.exports = BeerOrder;
