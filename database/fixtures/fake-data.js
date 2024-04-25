const Bar = require("../models/bar.model");
const Beer = require("../models/beer.model");
const Order = require("../models/order.model");
const {
  faker: {
    company,
    location,
    internet,
    lorem,
    commerce,
    number,
    date,
    helpers,
  },
} = require("@faker-js/faker");

module.exports.seedDatabase = async (
  numBars = 1,
  numOrders = 1,
  numBeers = 1
) => {
  const bars = [];
  const orders = [];
  const beers = [];
  for (let i = 0; i < numBars; i++) {
    bars.push(
      await Bar.create({
        name: company.name(),
        address: location.streetAddress(),
        tel: generatePhoneNumber(),
        email: internet.email(),
        description: lorem.sentence(),
      })
    );
  }
  for (let i = 0; i < numOrders; i++) {
    const randomBar = number.int({ min: 1, max: numBars });
    orders.push(
      await Order.create({
        name: commerce.productName(),
        price: commerce.price(),
        bar_id: randomBar,
        date: date.past(),
        status: helpers.arrayElement(["en cours", "terminée"]),
      })
    );
  }
  for (let i = 0; i < numBeers; i++) {
    const randomBar = number.int({ min: 1, max: numBars });
    beers.push(
      await Beer.create({
        name: commerce.productName(),
        description: lorem.sentence(),
        degrees: number.float({ min: 0, max: 20 }),
        price: commerce.price(),
        bar_id: randomBar,
      })
    );
  }
  console.log(
    `\n\nCREATED:\n${numBars} bars, ${numOrders} orders, et ${numBeers} deers.`
  );
};

function generatePhoneNumber() {
  const areaCode = `0${number.int({ min: 1, max: 9 })}`;
  const restOfNumber = Array.from({ length: 8 }, () =>
    number.int({ min: 0, max: 9 })
  ).join("");
  return `${areaCode}${restOfNumber}`;
}
