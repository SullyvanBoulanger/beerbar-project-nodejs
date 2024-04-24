const yargs = require("yargs");
const { seedDatabase } = require("./fake-data");

const argv = yargs
  .usage(
    "\n\nADD FIXTURES TO THE DB --> npm run fixtures <options>\n\nCette commande permet d'ajouter de la data dans la BDD en vue d'effectuer des tests.\n\nIMPORTANT: Démarrer d'abord le projet avec `npm start` puis lancer `npm fixtures <options>"
  )
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
