var crypto = require('crypto');
var salt='1234'
module.exports.cryptPwd=function (password) {
    var saltPassword = password ;
    var md5 = crypto.createHash('md5');
    var result = md5.update(saltPassword).digest('hex');
    return result;
}