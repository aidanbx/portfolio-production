const moment = require('moment');
const geoip = require('geoip-lite');
const fs = require('fs');
const logFile = './logs.txt';
const ipRegex = /[\d\.]+$/;

const logger = (req, res, next) => {
  const clientIP = req.headers;
  console.log(clientIP);
  // console.log(geoip.lookup(clientIP));
  // const log = `${moment().format()}: ${req.method} -> ${req.protocol}://${req.get(
  //   'host'
  // )}${req.originalUrl}`;

  // fs.appendFile(logFile, log + '\n', 'utf8', (err) => {
  //   if (err) {
  //     throw err;
  //   } else {
  // console.log(log);
  //   }
  // });

  next();
};

module.exports = logger;
