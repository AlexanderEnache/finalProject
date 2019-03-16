"use strict";

const express = require("express");
const wine = express.Router();
const pool = require("./pg-connection-pool.js");

wine.get("/wine/:loadmore", function (req, res) {
  console.log(req.params.loadmore + "fgh")
  pool.query(`select * from noneofit where type = 'Wine' limit ${req.params.loadmore}`).then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});

wine.get("/mainsearch/:searchterm", function (req, res) {
  pool.query("select * from noneofit where name like '%"+req.params.searchterm+"%' ").then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});

wine.get("/winesearch/:id", function (req, res) {
  console.log(req.params.id + "fgh")
  pool.query(`select pricedate from noneofit where id=${req.params.id}`).then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});

wine.get("/getprice/:id", function (req, res) {
  console.log(req.params.id + "fgh")
  pool.query(`select price from noneofit where id=${req.params.id}`).then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});

wine.put("/winesearch/:id", function (req, res) {
  console.log(req.params.id + "fgh")
  pool.query(`update noneofit set pricedate = $1::text , price=$2::float where id=${req.params.id}`, [req.body.newprice, req.body.price]).then(function(result) {
	console.log(result);
    res.send(result.rows);
  });
});

module.exports = wine;