"use strict";

const express = require("express");
const app = express();
const route = require("route.js");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", route);

const port = process.env.PORT || 7000;

app.listen(port, function(){
	console.log("Server is running.")
});