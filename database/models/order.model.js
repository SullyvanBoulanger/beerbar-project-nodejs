const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Bar = require("./bar.model");

const Status = {
  IN_PROGRESS: "en cours",
  COMPLETED: "terminée",
};

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
    },
  },
  bar_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Bar,
      key: "id",
    },
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isIn: [Object.values(Status)],
    },
  },
});

Order.belongsTo(Bar, { foreignKey: "bar_id" });

module.exports = Order;
