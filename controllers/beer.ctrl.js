const { response } = require("../app");
const Bar = require("../database/models/bar.model");
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

module.exports.createBeer = async (req, res) => {
  const bar_id = req.params.bar_id;

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

module.exports.getAverageBeerDegrees = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const beers = await Beer.findAll({ where: { bar_id } });

    if (!beers.length) {
      return res.status(404).json({ error: "Pas de bières pour ce bar..." });
    }

    const degrees = beers.reduce((sum, beer) => sum + beer.degrees, 0);
    const average = (degrees / beers.length).toFixed(2);
    res.status(200).json({ averageDegreesOfBeers: average });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour du bar.",
    });
  }
};
