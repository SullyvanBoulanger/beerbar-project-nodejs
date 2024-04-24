const { body } = require("express-validator");

const beerValidator = (req, res, next) => {
  if (!req.body.price) {
    return res.status(400).json({ error: "Le prix de la bière est requis." });
  }

  const price = parseFloat(req.body.price);
  if (isNaN(price) || price <= 0) {
    return res
      .status(400)
      .json({ error: "Le prix de la bière doit être un nombre positif." });
  }

  next();
};

module.exports = beerValidator;
