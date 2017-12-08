import Express from 'express';
import socket from './socket/server';
import http from 'http';
import bodyParser from 'body-parser';

const app = Express();
const server = http.Server(app);

socket.init(server);

app.use(bodyParser.json());
app.use('/public', Express.static('public'));
app.use('/dist', Express.static('dist'));
app.use('/ai', require('./ai/index'));

app.use('*', (req, res) => {
  res.sendFile('index.html', { "root": __dirname });
});

socket.on('connection', (socket) => {
  console.log("connection made");
});

const port = process.env.PORT || 3000;
server.listen(port);