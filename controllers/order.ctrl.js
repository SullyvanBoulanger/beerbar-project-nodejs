const sequelize = require("../database");
const Order = require("../database/models/order.model");
const { Op } = require("sequelize");

module.exports.postOrder = async (req, res) => {
  const { bar_id } = req.params;

  try {
    if (!bar_id || isNaN(bar_id)) {
      return res.status(400).json({ error: "L'url est mal formée." });
    }
    const order = await Order.create({ ...req.body, bar_id });
    res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ error: "Impossible de créer la commande." });
  }
};

module.exports.putOrder = (req, res) => {
  res.status(200).json({});
};

module.exports.deleteOrder = (req, res) => {
  res.status(200).json({});
};

module.exports.getOrdersByBar = async (req, res) => {
  const { bar_id } = req.params;
  const { date: dateFromQuery } = req.query;

  try {
    let orders;
    let where = { bar_id };
    if (dateFromQuery) {
      where.date = {
        [Op.eq]: sequelize.fn("DATE", dateFromQuery),
      };
    }
    orders = await Order.findAll({ where });
    res.status(200).json(orders.reverse());
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Impossible de récupérer les commandes." });
  }
};

module.exports.getOrderById = (req, res) => {
  res.status(200).json({});
};
