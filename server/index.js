require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./Routes/auth");

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/user", authRoute);

mongoose.connect(process.env.MONGO_URL).then( () =>{
  app.listen(process.env.PORT, () =>{
      console.log(`Now running on port ${process.env.PORT}`)
  })
}).catch((error) => {
  console.log(error);
})

app.get("/", (req, res) => {
  res.send("Hello Gamer");
});