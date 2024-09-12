const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
const db = require("./Database/db.js");
app.use(express.json());
app.use(bodyParser.json());
const RoutesFilm = require("./Routes/Film.js");
const RoutesUser = require("./Routes/User.js");
app.use("/api/Films", RoutesFilm);
app.use("/api", RoutesUser);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
