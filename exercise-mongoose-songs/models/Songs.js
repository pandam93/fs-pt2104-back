const mongoose = require("mongoose");
// Importar Schema desde mongoose
const { Schema } = mongoose;

const SongSchema = new Schema({
  artist: {
    type: String,
    unique: false,
    required: true,
  },
  link: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: false,
    required: true,
  },
  youtube_id: {
    type: String,
    unique: true,
    required: true,
  },
});

const Songs = mongoose.model("Songs", SongSchema);

module.exports = Songs;
