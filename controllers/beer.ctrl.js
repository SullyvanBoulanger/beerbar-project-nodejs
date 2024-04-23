module.exports.getBeers = (req, res) => {
  res.status(200).json({ message: "Liste de toutes les beers" });
};

module.exports.getBiere = (req, res) => {
  const beer_id = req.params.beer_id;
  res.status(200).json({ message: `Détails de la bière avec l'ID ${beer_id}` });
};

module.exports.deleteBeer = (req, res) => {
  const beer_id = req.params.beer_id;
  res
    .status(200)
    .json({ message: `La beer avec l'ID ${beer_id} a été supprimée` });
};

module.exports.createBeer = (req, res) => {
  res.status(200).json({ message: "Nouvelle beer créée avec succès" });
};

module.exports.updateBeer = (req, res) => {
  const beer_id = req.params.beer_id;
  res
    .status(200)
    .json({ message: `La beer avec l'ID ${beer_id} a été mise à jour` });
};
