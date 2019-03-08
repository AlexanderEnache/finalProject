"use strict";

const express = require("express");
const wine = express.Router();
const pool = require("./pg-connection-pool.js");

  pool.query("select * from wine").then(function(result) {
	  console.log(result);
    res.send(result.rows);
  });

module.exports = wine;