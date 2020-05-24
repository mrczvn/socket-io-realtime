const app = require('./app');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;

http.listen(PORT, () => {
  console.log(` Listening on port ${PORT}...`);
});

io.on('connection', (socket) => {
  console.log('Connectd...');
  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
  });
});
