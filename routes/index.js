var express = require('express');
var router = express.Router();
var database = require('../mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/queryRenovation', function(req, res, next) {
  database.query('select * from renovation_type',function (err,result) {
    if (err) {
      console.log('[SELECT ERROR]:', err.message);
    }
    res.send(result)
  })
});

module.exports = router;
