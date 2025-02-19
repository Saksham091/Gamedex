require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Gamer");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
