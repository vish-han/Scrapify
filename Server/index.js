const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// routes import here
const UserRoutes= require('./routes/UserRoutes.js')
const TransRoutes = require('./routes/TransacRoutes')

app.get("/", (req, res) => {
  res.send("its working");
});

app.use('/auth',UserRoutes);
app.use('/transac', TransRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`app is listening on port ${process.env.PORT}`);
});
