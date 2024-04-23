const { response } = require("../app");
const Bar = require("../database/models/bar.model");
const Beer = require("../database/models/beer.model");
const Beer = require("../models/beer.model");

module.exports.getBeers = (req, res) => {
  res.status(200).json({ message: "Liste de toutes les beers" });
};

module.exports.getBeersByBar = (req, res) => {
  res.status(200).json({});
};

module.exports.getBeer = (req, res) => {
  const id_beer = req.params.id_beer;
  res.status(200).json({ message: `Détails de la bière avec l'ID ${id_beer}` });
};

module.exports.deleteBeer = (req, res) => {
  const beer_id = req.params.beer_id;
  res
    .status(200)
    .json({ message: `La beer avec l'ID ${beer_id} a été supprimée` });
};

module.exports.createBeer = async (req, res) => {
  const id_bar = req.params.id_bar;

  try {
    const bar = await Bar.findByPk(id_bar);
    if (!bar) {
      return res.status(404).json({
        error: "le bar n'existe pas",
      });
    }

    const beer = await Beer.create({
      ...req.body,
      bar_id: id_bar,
    });
    res.status(201).json(beer);
  } catch (error) {
    res.status(500).json({
      error: "la biere n'a pas pu etre créée",
    });
  }
  res.status(200).json({ message: "Nouvelle beer créée avec succès" });
};

module.exports.updateBeer = async (req, res) => {
  const beer_id = req.params.beer_id;

  try {
    const beer = await Beer.findByPk(beer_id);

    if (!beer) {
      return res.status(404).json({ error: "La bière n'existe pas" });
    }

    await beer.update(req.body);

    res
      .status(200)
      .json({ message: `La bière avec l'ID ${beer_id} a été mise à jour` });
  } catch (error) {
    res.status(500).json({ error: "La mise à jour de la bière a échoué" });
  }
};
