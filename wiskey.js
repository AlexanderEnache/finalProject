"use strict";

const express = require("express");
const wine = express.Router();
const pool = require("./pg-connection-pool.js");

wine.get("/wiskey/:loadmore", function (req, res) {
  pool.query(`select * from allofit where type = 'Whiskey' limit ${req.params.loadmore}`).then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});






module.exports = wine;