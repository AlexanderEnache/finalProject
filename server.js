"use strict";

const express = require("express");
const app = express();
const wine = require("./wine.js");
const wiskey = require("./wiskey.js");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", wine);
app.use("/", wiskey);

const port = process.env.PORT || 7000;

app.listen(port, function(){
	console.log("Server is running.")
});