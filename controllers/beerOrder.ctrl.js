module.exports.addBeerToOrder = (req, res) => {
  const order_id = req.params.order_id;
  const beer_id = req.params.beer_id;
  res
    .status(200)
    .json({
      message: `La beer avec l'ID ${beer_id} a été ajoutée à l'order avec l'ID ${order_id}`,
    });
};

module.exports.removeBeerFromOrder = (req, res) => {
  const order_id = req.params.order_id;
  const beer_id = req.params.beer_id;
  res
    .status(200)
    .json({
      message: `La beer avec l'ID ${beer_id} a été supprimée de l'order avec l'ID ${order_id}`,
    });
};
