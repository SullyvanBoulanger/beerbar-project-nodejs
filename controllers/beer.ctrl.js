const Bar = require("../database/models/bar.model");
const Beer = require("../database/models/beer.model");
const Errors = require("../utils/errors");

module.exports.getBeers = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const beers = await Beer.findAll({
      where: {
        bar_id,
      },
    });
    res.status(200).json(beers);
  } catch (error) {
    res.status(500).json({ error: Errors.BEERS_GET });
  }
};

module.exports.getBeer = async (req, res) => {
  try {
    const { beer_id } = req.params;
    const beer = await Beer.findByPk(beer_id);

    if (!beer) {
      res.status(404).json({ error: Errors.BEER_NOT_FOUND });
    }
    res.status(200).json(beer);
  } catch (error) {
    res.status(500).json({ error: Errors.BEER_GET });
  }
};

module.exports.deleteBeer = async (req, res) => {
  const id = req.params.beer_id;

  try {
    await Beer.destroy({ where: { id } });
    res
      .status(200)
      .json({ message: `La bière avec l'ID ${id} a bien été supprimée.` });
  } catch (error) {
    res.status(500).json({ error: Errors.BEER_DELETE });
  }
};

module.exports.createBeer = async (req, res) => {
  const bar_id = req.params.bar_id;

  try {
    const bar = await Bar.findByPk(bar_id);

    if (!bar) {
      return res.status(404).json({ error: Errors.BAR_NOT_FOUND });
    }

    const beer = await Beer.create({
      ...req.body,
      bar_id,
    });
    res.status(201).json(beer);
  } catch (error) {
    res.status(500).json({ error: Errors.BEER_CREATE });
  }
};

module.exports.updateBeer = async (req, res) => {
  const beer_id = req.params.beer_id;

  try {
    const beer = await Beer.findByPk(beer_id);

    if (!beer) {
      return res.status(404).json({ error: Errors.BEER_NOT_FOUND });
    }

    await beer.update(req.body);

    res
      .status(200)
      .json({ message: `La bière avec l'ID ${beer_id} a été mise à jour` });
  } catch (error) {
    res.status(500).json({ error: Errors.BEER_UPDATE });
  }
};

module.exports.getAverageBeerDegrees = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const beers = await Beer.findAll({ where: { bar_id } });

    if (!beers.length) {
      return res.status(404).json({ error: Errors.BEERS_NOT_FOUND });
    }

    const degrees = beers.reduce((sum, beer) => sum + beer.degrees, 0);
    const average = (degrees / beers.length).toFixed(2);
    res.status(200).json({ averageDegreesOfBeers: average });
  } catch (error) {
    res.status(500).json({ error: Errors.BEERS_DEGREES_AVERAGE });
  }
};
