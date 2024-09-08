var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (typeof req.session.user == "undefined") {
        res.redirect('/login')
    }
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.render('index', {title: 'Express'});
});

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Express'});
});

module.exports = router;
