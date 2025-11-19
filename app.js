const express = require('express');
const routes = require('./routes');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use('/calc', routes);

console.log("Hallo world!")

module.exports = app    
