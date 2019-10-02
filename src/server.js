require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Routes = require("./routes");
const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(Routes);

app.listen(3333);
