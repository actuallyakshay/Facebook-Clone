require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db");
const authRoute = require("./features/Auth/auth.route");
const cors = require("cors");
const dataRoute = require("./features/data/data.route");
const storyRoute = require("./features/Story/story.route");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", authRoute);
app.use("/data", dataRoute);
app.use("/story", storyRoute);


app.get("/", async (req, res) => {
  res.send("Hello facebook");
});


app.listen(8000, async (req, res) => {
  try {
    await connect();
    console.log("http://localhost:8000");
  } catch (err) {
    console.log(err);
  }
});
