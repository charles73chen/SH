var express = require('express');

var router = express.Router();
var db = require('../lib/async-db');
var crypto = require('../lib/crypto');

router.get('/GetMenuAjax', async function (req, res, next) {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    var data = {
        state: 0,
        msg: ''
    }
    try {

        var sql = "SELECT *\n" +
            "FROM SH.MENU M\n" +
            "WHERE PARENT_CODE = 'MAIN' ORDER BY MENU_ORDER";
        let result = await db.query(sql);
        if (result.length > 0) {
            console.log(result)
            for(i=0;i<result.length;i++){
                sql = "SELECT *\n" +
                    "FROM SH.MENU M\n" +
                    "WHERE PARENT_CODE = '"+result[i].URL+"' ORDER BY MENU_ORDER";
                var subresult = await db.query(sql)
                result[i].sub=subresult;
            }
            data.result = result;
            res.end(JSON.stringify(data));
        }

    } catch (e) {
        data.state = 1;
        data.msg = e
        res.end(JSON.stringify(data));
    }
});
router.get('/logout', function (req, res, next) {
    req.session.user=undefined;
    res.redirect('/login')

});
router.get('/LoginAjax', async function (req, res, next) {
    var data = {
        state: 0,
        msg: ''
    }
    try {

        var sql = "SELECT *\n" +
            "FROM SH.AP_USER AU\n" +
            "WHERE AU.USER_ID = '" + req.query.id + "'\n" +
            "  AND AU.USER_PASS='" + crypto.cryptPwd(req.query.password) + "'";
        console.log(sql);
        let result = await db.query(sql)
        if (result.length>0) {
            req.session.user = req.query.id
            data.state = 0;
        } else {
            data.state = 1;
            data.msg = '帳密錯誤';
        }
        res.end(JSON.stringify(data));
    } catch (err) {
        console.log("****")
        data.state = 1;
        data.msg = err
        res.end(JSON.stringify(data));
    }

});

module.exports = router;
