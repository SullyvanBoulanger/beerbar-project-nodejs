const sequelize = require("../database");
const Order = require("../database/models/order.model");
const Errors = require("../utils/errors");
const { Op } = require("sequelize");

module.exports.createOrder = async (req, res) => {
  try {
    const { bar_id } = req.params;

    if (!bar_id || isNaN(bar_id)) {
      return res.status(400).json({ error: Errors.ORDER_URL_MALFORMED });
    }

    const order = await Order.create({ ...req.body, bar_id });
    res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ error: Errors.ORDER_CREATE });
  }
};

module.exports.updateOrder = async (req, res) => {
  try {
    const { order_id } = req.params;
    const { name, price, bar_id, date, status } = req.body;
    const order = await Order.findByPk(order_id);
    if (!order) {
      return res.status(404).json({ error: Errors.ORDER_NOT_FOUND });
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
    res.status(500).json({ error: Errors.ORDER_UPDATE });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const { order_id } = req.params;
    const order = await Order.findByPk(order_id);

    if (!order) {
      return res.status(404).json({ error: Errors.ORDER_NOT_FOUND });
    }

    await order.destroy();
    res.status(200).json({ message: "Commande supprimée avec succès." });
  } catch (error) {
    res.status(500).json({ error: Errors.ORDER_DELETE });
  }
};

module.exports.getOrdersByBar = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const { date: dateFromQuery, price_min, price_max } = req.query;

    let orders;
    let where = { bar_id };

    if (dateFromQuery) {
      where.date = sequelize.fn("DATE", dateFromQuery);
    }

    if (!isNaN(price_min) && !isNaN(price_max)) {
      if (price_min <= price_max) {
        where.price = {
          [Op.between]: [price_min, price_max],
        };
      } else if (price_min > price_max) {
        return res.status(400).json({ error: Errors.ORDER_INCONSISTENT_PRICE });
      }
    } else {
      return res.status(400).json({ error: Errors.ORDER_PRICE });
    }

    orders = await Order.findAll({ where });
    res.status(200).json(orders.reverse());
  } catch (error) {
    return res.status(500).json({ error: Errors.ORDERS_GET });
  }
};

module.exports.getOrder = async (req, res) => {
  try {
    const { order_id } = req.params;
    const order = await Order.findByPk(order_id);

    if (!order) {
      res.status(404).json({ error: Errors.ORDER_NOT_FOUND });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: Errors.ORDER_GET });
  }
};
