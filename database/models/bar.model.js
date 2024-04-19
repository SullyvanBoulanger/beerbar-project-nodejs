const { define, DataTypes } = require("sequelize");

const Bar = define("Bar", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isPhoneNumber(value) {
        if (!/^0[1-9](\d{2}){4}$/.test(value)) {
          throw new Error("Le format du numéro de téléphone est invalide.");
        }
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isEmail: {
        msg: "L'adresse e-mail est invalide.",
      },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Bar;
