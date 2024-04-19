const { define, DataTypes } = require("sequelize");
const sequelize = require("../index");
const Beer = require("./beer.model");
const Order = require("./order.model");

const BeerOrder = sequelize.define("BeerOrder", {
  beer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Beer,
      key: "id",
    },
  },
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: "id",
    },
  },
});

Beer.belongsToMany(Order, { through: BeerOrder });
Order.belongsToMany(Beer, { through: BeerOrder });

module.exports = BeerOrder;
