const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
// db connection
const domain = process.env.DOMAIN;
// middleware!
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    await axios
      .get(`${domain}/users`)
      .then((response) => {
        return res.status(200).json(response.data);
      })
      .catch((error) => {
        console.log(error);
        return res.json({ message: "failed!" });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", TypeError: error });
  }
});

app.post("/users", async (req, res) => {
  try {
    console.log("Request info: ", req.body);
    const body = {
      id: req.body.id,
      name: req.body.name,
    };

    await axios
      .post(`${domain}/users`, body)
      .then((response) => {
        console.log(response.data);
        return res.status(201).json({ message: "user created" });
      })
      .catch((error) => {
        console.log(error);
        return res.json({ message: "failed!" });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", TypeError: error });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
