const express = require('express');
const socket = require('../socket/server');

const router = express.Router();

router.post('/', (req, res, next) => {

  const result = req.body.result;
  const action = result.action;
  const parameters = result.parameters;

  console.log("Being spoke to...");
  console.log(action);
  console.log(parameters);

  socket.emit('message', { action, parameters });
  
  next();

});

module.exports = router;