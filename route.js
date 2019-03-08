"use strict";

const express = require("express");
const colors = express.Router();
const pool = require("./connection/pg-connection-pool.js");

function selectAll(req, res) {
  pool.query("select * from colors order by id asc").then(function(result) {
    res.send(result.rows);
  });
}

module.exports = colors;