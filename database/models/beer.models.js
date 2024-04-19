const { define, Datatypes } = require("sequelize");
const Bar = require("./bar.model");

const Beer = define("Beer", {
  id: {
    type: Datatypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  description: {
    type: Datatypes.TEXT,
    allowNull: true,
  },
  degree: {
    type: Datatypes.FLOAT,
    allowNull: true,
  },
  price: {
    type: Datatypes.FLOAT,
    validate: { min: 0 },
    allowNull: true,
  },
  bar_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Bar,
      key: "id",
    },
    allowNull: true,
  },
});

module.exports = Beer;
