const yargs = require("yargs");
const { seedDatabase } = require("./fake-data");

const argv = yargs
  .option("bars", {
    alias: "b",
    describe: "Nombre de bars à créer",
    type: "number",
    demandOption: true,
  })
  .option("orders", {
    alias: "o",
    describe: "Nombre de commandes à créer",
    type: "number",
    demandOption: true,
  })
  .option("beers", {
    alias: "r",
    describe: "Nombre de bières à créer",
    type: "number",
    demandOption: true,
  })
  .help().argv;

const numBars = argv.bars;
const numOrders = argv.orders;
const numBeers = argv.beers;

seedDatabase(numBars, numOrders, numBeers);

process.on("SIGINT", () => {
  console.log("YEAH");
  process.exit();
});
