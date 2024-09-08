var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var crypto = require('../lib/crypto');
var db = require('../lib/async-db');
//var sqlData = require('../lib/publicvar').mySQLData;



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: 'Express'});
});



module.exports = router;