var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
   pool.query('select * from book', function (error, results, fields) {
        if (error){
            res.render('discuss3', {data:[]});
        }else{
            res.render('discuss3', {data:results});
        }       
    });
});

module.exports = router;
