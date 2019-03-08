"use strict";

const express = require("express");
const app = express();

app.use(express.static("./public"));
app.use(express.json());

const port = process.env.PORT || 7000;

app.listen(port, function(){
	console.log("Server is running.")
});