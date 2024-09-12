const FilmModul = require("../Models/Film");
const axios = require("axios");
let filmsFetched = false;
const ListeFilms = async (req, res) => {
  try {
    if (!hasFilmsBeenFetched()) {
      await FetchFilms();
      setFilmsFetched(true);
    }
    const resultats = await FilmModul.find({});
    res.json(resultats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const AjouterFilm = async (req, res) => {
  const {
    id,
    title,
    backdrop_path,
    overview,
    original_title,
    adult,
    poster_path,
    media_type,
    genre_ids,
    release_date,
    video,
    popularity,
    vote_average,
    vote_count,
  } = req.body;
  let newFilm = new FilmModul({
    id,
    title,
    backdrop_path,
    overview,
    original_title,
    adult,
    poster_path,
    media_type,
    genre_ids,
    release_date,
    video,
    popularity,
    vote_average,
    vote_count,
  });

  newFilm.save();
  res.redirect("/api/Films");
};

const DetailsFilm = async (req, res) => {
  const id = req.params.id;
  FilmModul.findOne({ id: id })
    .then((doc) => {
      if (!doc) {
        return res.status(404).send("Document not found");
      }
      res.json(doc);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server error");
    });
};

const ModifierFilm = async (req, res) => {
  const id = req.params.id;
  FilmModul.findOneAndUpdate({ id: id }, req.body, { new: true })
    .then((doc) => {
      if (!doc) {
        return res.status(404).send("Document not found");
      }
      res.json(doc);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server error");
    });
};
const SupprimerFilm = async (req, res) => {
  const id = req.params.id;
  FilmModul.findOneAndDelete({ id: id })
    .then((doc) => {
      if (!doc) {
        return res.status(404).send("Document not found");
      }
      res.json(doc);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server error");
    });
};
const FetchFilms = async () => {
  try {
    const URL =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=dd8596e812aa1ea865a8c164dc2c0836";
    const response = await axios.get(URL);
    const data = response.data;
    const savedItems = [];

    for (let item of data.results) {
      const existingFilm = await FilmModul.findOne({ id: item.id });
      if (!existingFilm) {
        const newFilm = new FilmModul({
          id: item.id,
          title: item.title,
          backdrop_path: item.backdrop_path,
          overview: item.overview,
          original_title: item.original_title,
          adult: item.adult,
          poster_path: item.poster_path,
          media_type: item.media_type,
          genre_ids: item.genre_ids,
          release_date: item.release_date,
          video: item.video,
          popularity: item.popularity,
          vote_average: item.vote_average,
          vote_count: item.vote_count,
        });

        const savedItem = await newFilm.save();
        savedItems.push(savedItem);
      }
    }

    return savedItems;
  } catch (error) {
    console.error("Error fetching data from API or saving to MongoDB:", error);
    throw error;
  }
};
const setFilmsFetched = (status) => {
  filmsFetched = status;
};

const hasFilmsBeenFetched = () => {
  return filmsFetched;
};
https: module.exports = {
  ListeFilms,
  AjouterFilm,
  DetailsFilm,
  ModifierFilm,
  SupprimerFilm,
};
