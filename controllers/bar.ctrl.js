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

module.exports.getBar = (req, res) => {
  res.status(200).json({});
};

module.exports.deleteBar = (req, res) => {
  res.status(200).json({});
};

module.exports.createBar = (req, res) => {
  res.status(200).json({});
};

module.exports.updateBar = (req, res) => {
  res.status(200).json({});
};
