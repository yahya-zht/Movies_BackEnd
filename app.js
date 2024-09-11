const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
