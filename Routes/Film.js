const express = require("express");
const {
  ListeFilms,
  AjouterFilm,
  DetailsFilm,
  SupprimerFilm,
  ModifierFilm,
} = require("../Controllers/FilmController");
const router = express.Router();
router.get("/", ListeFilms);
router.post("/", AjouterFilm);
router.get("/:id", DetailsFilm);
router.put("/:id", ModifierFilm);
router.delete("/:id", SupprimerFilm);

module.exports = router;
