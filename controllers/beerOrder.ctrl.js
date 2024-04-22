const Order = require("../database/models/order.model");
const Beer = require("../database/models/beer.model");
const BeerOrder = require("../database/models/beerOrder.model");

module.exports.addBeerToOrder = async (req, res) => {
  try {
    const { order_id, beer_id } = req.params;

    const order = await Order.findByPk(order_id);
    const beer = await Beer.findByPk(beer_id);

    if (!order || !beer) {
      res.status(404).json({
        error: "Bière ou Commande introuvable.",
      });
    }

    const beerOrder = await BeerOrder.create({
      beer_id: beer.id,
      order_id: order.id,
    });

    res.status(200).json(beerOrder);
  } catch (error) {
    res.status(500).json({
      error: `Une erreur est survenue lors de la création de la commande de la bière.`,
    });
  }
};

module.exports.removeBeerFromOrder = (req, res) => {
  const id_order = req.params.id;
  const id_beer = req.params.id;
  res.status(200).json({
    message: `La beer avec l'ID ${id_beer} a été supprimée de l'order avec l'ID ${id_order}`,
  });
};
