const express = require('express');
const bodyParser = require('body-parser');

const socket = require('./socket/server');
const http = require('http');

const app = express();
const server = http.Server(app);

socket.init(server);

app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/ai', require('./ai/index'));

app.use('*', (req, res) => {
  res.sendFile('index.html', { "root": __dirname });
});

socket.on('connection', (socket) => {
  console.log("connection made");
});

const port = process.env.PORT || 3000;
server.listen(port);