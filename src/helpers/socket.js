const handleSocketConn = ({ io }) => {
  io.on('connection', (socket) => {
    console.log('Connectd...');
    socket.on('message', (msg) => {
      socket.broadcast.emit('message', msg);
    });
  });
};

module.exports = handleSocketConn;
