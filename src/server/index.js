import express from "express";
import utils from "./helpers/utils.js";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

global.path = path;
global.dotenv = dotenv;

utils.loadENV();
const app = express();

app.use(express.static(path.resolve(process.cwd(), "public")));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/api", (req, res) => {
  res.send("Express to the rescue!");
});

app.listen(process.env.PORT, () => {
  utils.log(`Server has started and is listening on PORT ${process.env.PORT}!`);
});
