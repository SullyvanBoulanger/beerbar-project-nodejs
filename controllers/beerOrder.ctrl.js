const BeerOrder = require("../database/models/beerOrder.model");

module.exports.addBeerToOrder = (req, res) => {
  const id_order = req.params.id;
  const id_beer = req.params.id;
  res.status(200).json({
    message: `La beer avec l'ID ${id_beer} a été ajoutée à l'order avec l'ID ${id_order}`,
  });
};

module.exports.removeBeerFromOrder = async (req, res) => {
  try {
    const { order_id, beer_id } = req.params;
    const beerOrder = await BeerOrder.findOne({
      where: {
        order_id,
        beer_id,
      },
    });

    if (!beerOrder) {
      res.status(404).json({
        error: "Commande de bière introuvable.",
      });
    }

    await beerOrder.destroy();
    res
      .status(200)
      .json({ message: "Commande de bière supprimée avec succès." });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la suppression de la commande de bière.",
    });
  }
};
