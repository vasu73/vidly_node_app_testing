const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  try {
    const db = config.get("db");
    winston.info(`Connecting to Vasu ${db}...`);
    mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
  } catch (ex) {
    winston.info(`Connection Error ${ex}...`);
  }
};
