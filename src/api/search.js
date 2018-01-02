const express = require('express');
const router = express.Router();

const recipeRepository = require('../adaptors/recipeRepository');

router.get('/', (req, res) => {
  res.json(recipeRepository.search(req.query.q));
});

module.exports = router;