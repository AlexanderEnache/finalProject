"use strict";

const express = require("express");
const wine = express.Router();
const pool = require("./pg-connection-pool.js");

wine.get("/wine/:loadmore", function (req, res) {
  console.log(req.params.loadmore + "fgh")
  pool.query(`select * from wine limit ${req.params.loadmore}`).then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});

wine.get("/mainsearch/:searchterm", function (req, res) {
  pool.query("select * from wine where name like '%"+req.params.searchterm+"%' ").then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});

// wine.put("/wine/:priceupdate", function(req, res){
//   pool.query("update wiskey set description='fuckin eh right??' where id=")
// })
wine.get("/winesearch/:id", function (req, res) {
  console.log(req.params.id + "fgh")
  pool.query(`select description from holdall where id=${req.params.id}`).then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});

module.exports = wine;