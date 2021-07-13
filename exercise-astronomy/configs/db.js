const mongoose = require("mongoose");

const mongooseConfigs = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose
  .connect("mongodb://localhost/astronomy", mongooseConfigs)
  .then(() => {
    console.info(
      "> succesfully connected to mongoDB",
      "\nSuerte, la vas a necesitar."
    );
  })
  .catch((error) => {
    console.error("> error trying to connect to mongoDB: ", error.message);
    process.exit(0);
  });
