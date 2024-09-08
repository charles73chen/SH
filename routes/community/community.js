var express = require('express');
var router = express.Router();
var db = require('../../lib/async-db');
/* GET users listing. */
router.get('/community', function (req, res, next) {

    if (typeof req.session.user == "undefined") {
        res.redirect('/login')
    }

    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.render('community/community', {title: 'Express'});
});

router.get('/Ajax/GetAllCommunity',async function (req, res, next) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if (typeof req.session.user == "undefined") {
        res.redirect('/login')
    }
    var data = {
        state: 0,
        msg: ''
    }

    try{
        var sql="SELECT *\n" +
            "FROM SH.COMMUNITY C\n" +
            "ORDER BY C.COMMUNITY_ID";
        let result = await db.query(sql);
        if (result.length > 0) {
            data.result = result;
            res.end(JSON.stringify(data));
        }
    }catch (e) {
        data.state = 1;
        data.msg = e
        res.end(JSON.stringify(data));
    }


});

router.get('/room', function (req, res, next) {

    if (typeof req.session.user == "undefined") {
        res.redirect('/login')
    }

    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.render('community/room', {title: 'Express'});
});

module.exports = router;
