var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

    if (typeof req.session.user == "undefined") {
        res.redirect('/login')
    }

    res.send('respond with a resource');
});

module.exports = router;
