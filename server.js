const mysql = require("mysql")
const util = require("util")
const express = require('express');
const connection = require('./config/connection.js');
var routes = require("./controllers/burgerController.js");

var PORT = process.env.PORT || 3000;

const app = express()

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});