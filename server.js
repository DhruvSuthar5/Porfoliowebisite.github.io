process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// development is by default value and || is OR operator
const express = require('./config/express');

const app = express(); //this app contains everything from express file
app.listen(8081);

module.exports = app;

console.log("Server is RUNNING.....");
