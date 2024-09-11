const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
const db = require("./Database/db");
app.use(express.json());
const Routes = require("./routes");
app.use("/api/Films", Routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
