const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

//const port = process.env.PORT || config.get("port");
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  winston.info(`Debug -- Listening on heroku port ${port}...`);
  winston.info(`Debug -- config DB ${config.get("db")}...`);
});

module.exports = server;
