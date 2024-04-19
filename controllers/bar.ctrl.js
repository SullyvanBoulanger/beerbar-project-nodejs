const Bar = require("../database/models/bar.model");

module.exports.getBars = async (req, res) => {
  try {
    const bars = await Bar.findAll();
    res.status(200).json(bars);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la récupération des bars.",
    });
  }
};

module.exports.getBar = async (req, res) => {
  try {
    const { id } = req.params;
    const bar = await Bar.findByPk(id);
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

module.exports.createBar = (req, res) => {
  res.status(200).json({});
};

module.exports.deleteBar = async (req, res) => {
  try {
    const { id } = req.params;
    const bar = await Bar.findByPk(id);
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

module.exports.updateBar = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, tel, email, description } = req.body;

    const bar = await Bar.findByPk(id);
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

    res.status(200).json({ message: "Bar mis à jour avec succès." });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour du bar.",
    });
  }
};
