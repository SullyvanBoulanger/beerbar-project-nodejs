const Bar = require("../database/models/bar.model");
const { Op } = require("sequelize");

module.exports.getBars = async (req, res) => {
  const { name, ville } = req.query;
  try {
    let bars;
    if (name) {
      bars = await Bar.findAll({ where: { name: { [Op.like]: `%${name}%` } } });
    } else if (ville) {
      bars = await Bar.findAll({ where: { address: { [Op.like]: `%${ville}%` } } });
    } else {
      bars = await Bar.findAll();
    }
    res.status(200).json(bars);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la récupération des bars.",
    });
  }
};

module.exports.getBar = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const bar = await Bar.findByPk(bar_id);
    if (!bar) {
      return res.status(404).json({ error: "Bar introuvable" });
    }
    res.json(bar);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la récupération du bar.",
    });
  }
};

module.exports.createBar = async (req, res) => {
  await Bar.create(req.body);
  res.status(200).json({});
};

module.exports.deleteBar = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const bar = await Bar.findByPk(bar_id);
    if (!bar) {
      return res.status(404).json({ error: "Bar introuvable." });
    }
    await bar.destroy();

    res.status(200).json({ message: "Bar supprimé avec succès." });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la suppression du bar.",
    });
  }
};

module.exports.createBar = async (req, res) => {
  try {
    const newBar = await Bar.create({
      name: req.body.name,
      address: req.body.address,
      tel: req.body.tel,
      email: req.body.email,
      description: req.body.description,
    });
    res.status(200).json(newBar);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la création du bar.",
    });
  }
};

module.exports.updateBar = async (req, res) => {
  try {
    const { bar_id } = req.params;
    const { name, address, tel, email, description } = req.body;

    const bar = await Bar.findByPk(bar_id);
    if (!bar) {
      return res.status(404).json({ error: "Bar introuvable." });
    }

    await bar.update({
      name,
      address,
      tel,
      email,
      description,
    });

    res.status(200).json(bar);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour du bar.",
    });
  }
};
