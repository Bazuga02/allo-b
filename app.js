const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mealsRouter = require("./routes/meals");
const authRouter = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://ashu:ashu@cluster0.x8wfjas.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/meals", mealsRouter);
app.use("/api/auth", authRouter);

module.exports = app;
