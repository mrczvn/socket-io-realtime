require('dotenv').config();

const app = require('./app');
const http = require('http').createServer(app);

http.listen(process.env.APP_PORT, () => {
  console.log(` Listening on port ${process.env.APP_PORT}...`);
});

app.io.attach(http);
