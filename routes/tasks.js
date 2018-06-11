var express = require('express');
var router = express.Router();
var url = require('url');

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

/* GET users listing. */
router.post('/', function(req, res, next) {
    taskList.push(req.body);
    console.log(taskList);
    res.json(taskList);
});

module.exports = router;