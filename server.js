const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/articleDB", { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });