const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Films")
  .then(() => {
    console.log("connexion réussi au serveur de données");
  })
  .catch((err) => console.log(err));
