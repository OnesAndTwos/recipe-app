const express = require('express');
const router = express.Router();

const actions = {
  "search-recipe": require("./search")
};

router.post('/', (req, res) => {
  const result = req.body.result;
  const action = result.action;
  const parameters = result.parameters;

  var resolvedAction = actions[action];

  if(resolvedAction) {
    res.json(
      resolvedAction(parameters)
    );
  } else {
    console.error(`There was no resolved action for ${action}`)
    res.json({
      "speech": "There was an error",
      "displayText": "There was an error",
      "source": "cookbook"
    });
  }

});

module.exports = router;