const express = require('express');
const path = require('path');

const app = express();

const public = path.resolve(__dirname, '../public');

app.use(express.static(public));

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '../index.html');
  res.sendFile(filePath);
});

module.exports = app;
