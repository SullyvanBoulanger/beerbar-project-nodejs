const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Bar = require("./bar.model");
const Order = require("./order.model");

const Beer = sequelize.define("Beer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  degrees: {
    type: DataTypes.FLOAT,
    validate: { min: 0 },
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    validate: { min: 0 },
    allowNull: false,
  },
});

Beer.hasMany(Order, { onDelete: "CASCADE" });
Beer.belongsTo(Bar, { foreignKey: "bar_id", onDelete: "CASCADE" });

module.exports = Beer;
