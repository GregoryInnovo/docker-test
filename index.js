const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const Console = mongoose.model(
  "Console",
  new mongoose.Schema({
    name: String,
    price: Number,
  })
);

const app = express();
const port = process.env.PORT || 3000;
// db connection
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const domain = process.env.DOMAIN;

const mongoUri = `mongodb://${user}:${password}@${domain}:27017/myapp?authSource=admin`;

mongoose.connect(mongoUri);

app.get("/", async (req, res) => {
  const consoles = await Console.find();
  return res.json(consoles);
});

app.get("/create", async (req, res) => {
  await Console.create({ name: "Nintendo Switch", price: 299.99 });
  return res.json({ message: "Console created" });
});

app.listen(3000, () => {
  console.log(`Server started on port ${port}`);
});
