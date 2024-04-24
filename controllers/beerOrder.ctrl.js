const Order = require("../database/models/order.model");
const Beer = require("../database/models/beer.model");
const BeerOrder = require("../database/models/beerOrder.model");
const Errors = require("../utils/errors");

module.exports.addBeerToOrder = async (req, res) => {
  try {
    const { order_id: OrderId, beer_id: BeerId } = req.params;

    const order = await Order.findByPk(OrderId);
    const beer = await Beer.findByPk(BeerId);

    if (!order || !beer) {
      return res.status(404).json({ error: Errors.BEER_OR_ORDER_NOT_FOUND });
    }

    const beerOrder = await BeerOrder.create({ OrderId, BeerId });
    res.status(201).json(beerOrder);
  } catch (error) {
    res.status(500).json({ error: Errors.BEER_ORDER_CREATE });
  }
};

module.exports.removeBeerFromOrder = async (req, res) => {
  try {
    const { order_id: OrderId, beer_id: BeerId } = req.params;

    const beerOrder = await BeerOrder.findOne({
      where: { OrderId, BeerId },
    });

    if (!beerOrder) {
      return res.status(404).json({ error: Errors.BEER_ORDER_NOT_FOUND });
    }

    await beerOrder.destroy();
    res
      .status(200)
      .json({ message: "Commande de bière supprimée avec succès." });
  } catch (error) {
    res.status(500).json({ error: Errors.BEER_ORDER_DELETE });
  }
};
