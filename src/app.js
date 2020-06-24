const express = require('express');
const { join } = require('path');
const socket = require('socket.io');
const handleSocketConn = require('./helpers/socket');

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.io = socket();

handleSocketConn({ io: app.io });

module.exports = app;
