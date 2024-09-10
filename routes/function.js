
module.exports.checksession=function (req ,res) {
    var flg = flg
    if (typeof req.session.user == "undefined") {
        res.redirect('/login')
    }
  }