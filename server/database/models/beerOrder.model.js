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

Beer.belongsToMany(Order, { through: "BeerOrder", hooks: true });
Order.belongsToMany(Beer, { through: "BeerOrder" });

Order.beforeDestroy(async (order, options) => {
  await BeerOrder.destroy({
    where: { OrderId: order.id },
    transaction: options.transaction,
  });
});

module.exports = BeerOrder;
