var express = require('express');
let  {create_user} = require('D:/PassportJs/middleware.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
