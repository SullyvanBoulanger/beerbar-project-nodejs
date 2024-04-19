module.exports.addBeerToOrder = (req, res) => {
  const id_order = req.params.id;
  const id_beer = req.params.id;
  res
    .status(200)
    .json({
      message: `La beer avec l'ID ${id_beer} a été ajoutée à l'order avec l'ID ${id_order}`,
    });
};

module.exports.removeBeerFromOrder = (req, res) => {
  const id_order = req.params.id;
  const id_beer = req.params.id;
  res
    .status(200)
    .json({
      message: `La beer avec l'ID ${id_beer} a été supprimée de l'order avec l'ID ${id_order}`,
    });
};
