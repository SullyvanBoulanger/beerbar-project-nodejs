const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DATABASE_PATH ?? "database/db.sqlite",
  logging: false,
});

async function init() {
  try {
    await sequelize.sync();
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

init();

module.exports = sequelize;
