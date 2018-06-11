var express = require('express');
var router = express.Router();

// Data story in memory making the app 
// stateful. Use a db to store in the future
var taskList = [{
  name: "code"
}, {
  name: "run"
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(taskList);
});

module.exports = router;
