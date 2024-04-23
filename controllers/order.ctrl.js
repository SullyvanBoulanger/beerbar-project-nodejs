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

module.exports.putOrder = async (req, res) => {
  try {
    const { order_id } = req.params;
    const { name, price, bar_id, date, status } = req.body;

    const order = await Order.findByPk(order_id);
    if (!order) {
      return res.status(404).json({ error: "Commande introuvable." });
    }

    await order.update({
      name,
      price,
      bar_id,
      date,
      status,
    });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour de la commande.",
    });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const { order_id } = req.params;
    const order = await Order.findByPk(order_id);
    if (!order) {
      return res.status(404).json({ error: "Commande introuvable." });
    }
    await order.destroy();
    res.status(200).json({ message: "Commande supprimée avec succès." });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la suppression de la commande.",
    });
  }
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

module.exports.getOrderById = async (req, res) => {
  try {
    const { order_id } = req.params; 
    const order = await Order.findByPk(order_id);

    if(!order) {
      res.status(404).json({
        error: "Commande introuvable."
      });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la récupération de la commande."
    })
  }
};
