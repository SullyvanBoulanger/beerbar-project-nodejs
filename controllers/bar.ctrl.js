const Bar = require("../database/models/bar.model");
const Errors = require("../utils/errors");
const { Op } = require("sequelize");

module.exports.getBars = async (req, res) => {
  const { name, city } = req.query;
  let where = {};

  const buildWhereClause = (k, v) => (where[k] = { [Op.like]: `%${v}%` });

  for (let q in req.query) {
    if (q === "name" && name) buildWhereClause("name", name);
    else if (city) buildWhereClause("address", city);
  }

  try {
    const bars = await Bar.findAll({ where });
    res.status(200).json(bars);
  } catch (error) {
    res.status(500).json({ error: Errors.BARS_GET });
  }
};

module.exports.getBar = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const bar = await Bar.findByPk(bar_id);
    if (!bar) {
      return res.status(404).json({ error: Errors.BAR_NOT_FOUND });
    }
    res.json(bar);
  } catch (error) {
    res.status(500).json({ error: Errors.BAR_GET });
  }
};

module.exports.deleteBar = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const bar = await Bar.findByPk(bar_id);
    if (!bar) {
      return res.status(404).json({ error: Errors.BAR_NOT_FOUND });
    }
    await bar.destroy();

    res.status(200).json({ message: "Bar supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ error: Errors.BAR_DELETE });
  }
};

module.exports.createBar = async (req, res) => {
  try {
    const bar = await Bar.findOne({ where: { email: req.body.email } });

    if (bar) {
      return res.status(409).json({ error: Errors.BAR_DUPLICATE });
    }

    const newBar = await Bar.create(req.body);
    res.status(200).json(newBar);
  } catch (error) {
    res.status(500).json({ error: Errors.BAR_CREATE });
  }
};

module.exports.updateBar = async (req, res) => {
  const { bar_id } = req.params;

  try {
    const bar = await Bar.findByPk(bar_id);

    if (!bar) {
      return res.status(404).json({ error: Errors.BAR_NOT_FOUND });
    }

    await bar.update(req.body);
    res.status(200).json(bar);
  } catch (error) {
    res.status(500).json({ error: Errors.BAR_UPDATE });
  }
};
