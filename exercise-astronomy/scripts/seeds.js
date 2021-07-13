require("../configs/db");

const LandingsModel = require("../models/Landings.js");
const landings = require("../data/landings.json");

const NeasModel = require("../models/Neas.js");
const neas = require("../data/neas.json");

const populateLandingCollection = async () => {
  await LandingsModel.deleteMany({});
  console.info("> collection Landings clean! 🗑️");

  await LandingsModel.insertMany(landings);
  console.info("> Landings added! 🔥");
};

const populateNeasCollection = async () => {
  await NeasModel.deleteMany({});
  console.info("> collection of Neas clean!");

  await NeasModel.insertMany(neas);
  console.info("> Neas added!");
};

const main = async () => {
  await populateLandingCollection();
  await populateNeasCollection();
  process.exit(0);
};

main();
