const mongoose = require("mongoose");
const filmSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  backdrop_path: {
    type: String,
    // required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  original_title: {
    type: String,
    // required: true,
  },
  adult: {
    type: Boolean,
    default: true,
  },
  poster_path: {
    type: String,
    // required: true,
  },
  media_type: {
    type: String,
    // required: true,
  },
  genre_ids: {
    type: Array,
    // required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  video: {
    type: Boolean,
    // default: true,
  },
  popularity: {
    type: Number,
    default: 0,
  },
  vote_average: {
    type: Number,
    default: 0,
  },
  vote_count: {
    type: Number,
    default: 0,
  },
});
const Film = mongoose.model("film", filmSchema);
module.exports = Film;
