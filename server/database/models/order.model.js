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
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [Object.values(Status)],
    },
  },
});

Order.belongsTo(Bar, { foreignKey: "bar_id", onDelete: "CASCADE" });

module.exports = Order;
