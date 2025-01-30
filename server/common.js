const pg = require("pg");
const client = new pg.Client(
  "postgres://postgres:palestinedeathcircle@localhost:5432/acme_auth_store_db"
);

module.exports = { client };