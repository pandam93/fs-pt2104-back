require("../configs/db");

const LandingsModel = require("../models/Landings.js");
const landings = require("../data/landings.json");

const populateSongCollection = async () => {
  await LandingsModel.deleteMany({});
  console.info("> collection clean! 🗑️");

  await LandingsModel.insertMany(landings);
  console.info("> Landings added! 🔥");
};

const main = async () => {
  await populateSongCollection();
  process.exit(0);
};

main();
