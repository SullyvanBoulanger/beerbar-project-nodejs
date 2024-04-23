const Beer = require("../database/models/beer.model");

module.exports.getBeers = (req, res) => {
  res.status(200).json({ message: "Liste de toutes les beers" });
};

module.exports.getBeer = async (req, res) => {
  try {
    const { beer_id } = req.params; 
    const beer = await Beer.findByPk(beer_id);

    if(!beer) {
      res.status(404).json({
        error: "Bière introuvable."
      });
    }
    res.status(200).json(beer);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la récupération de la bière."
    })
  }
};

module.exports.deleteBeer = (req, res) => {
  const beer_id = req.params.beer_id;
  res
    .status(200)
    .json({ message: `La bière avec l'ID ${beer_id} a été supprimée` });
};

module.exports.createBeer = (req, res) => {
  res.status(200).json({ message: "Nouvelle bière créée avec succès" });
};

module.exports.updateBeer = (req, res) => {
  const beer_id = req.params.beer_id;
  res
    .status(200)
    .json({ message: `La beer avec l'ID ${beer_id} a été mise à jour` });
};
