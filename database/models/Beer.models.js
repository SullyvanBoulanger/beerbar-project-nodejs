const { define, Datatypes } = require("sequelize");

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
    allowNull: false,
  },
  degree: {
    type: Datatypes.FLOAT,
    allowNull: false,
  },
  prix: {
    type: Datatypes.FLOAT,
    validate: { min: 0 },
    allowNull: false,
  },
  bar_id: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Beer;
