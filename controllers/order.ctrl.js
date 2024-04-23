const Order = require("../database/models/order.model");

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

  try {
    const orders = await Order.findAll({ where: { bar_id } });
    res.status(200).json(orders);
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
