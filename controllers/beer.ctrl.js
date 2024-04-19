module.exports.getBeers = (req, res) => {
  res.status(200).json({ message: "Liste de toutes les beers" });
};

module.exports.getBiere = (req, res) => {
  const id_beer = req.params.id_beer;
  res.status(200).json({ message: `Détails de la bière avec l'ID ${id_beer}` });
};

module.exports.deleteBeer = (req, res) => {
  const id_beer = req.params.id_beer;
  res
    .status(200)
    .json({ message: `La beer avec l'ID ${id_beer} a été supprimée` });
};

module.exports.createBeer = (req, res) => {
  res.status(200).json({ message: "Nouvelle beer créée avec succès" });
};

module.exports.updateBeer = (req, res) => {
  const id_beer = req.params.id_beer;
  res
    .status(200)
    .json({ message: `La beer avec l'ID ${id_beer} a été mise à jour` });
};
