"use strict";

const pg = require("pg");
const credentials = new pg.Pool({
  user: "kkawmugsklruax",
  password: "6f3b7ba62e11ea2747128756daa027fa9215e5e2f984f4f64a2212a584cad213",
  host: "ec2-54-221-201-212.compute-1.amazonaws.com",
  port: 5432,
  database: "d515p3ld7sn9cf",
  ssl: false
});

module.exports = credentials;