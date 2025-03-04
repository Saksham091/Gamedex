require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const middleware = require("./Middleware/auth");
const cors = require("cors");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRoute);
app.use("/profile", middleware, userRoute);

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