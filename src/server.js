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

app.use('/api/search', require('./api/search'));

app.use('*', (req, res) => {
  res.sendFile('index.html', { "root": __dirname });
});

const port = process.env.PORT || 3000;
server.listen(port);