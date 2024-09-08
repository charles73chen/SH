var mysql = require('mysql2');
var sqlData = require('./publicvar').mySQLData;
console.log(sqlData)
const pool = mysql.createConnection(sqlData)

module.exports.query = function (sql) {
    return new Promise((resolve, reject) => {

        if(sql!=undefined){
            pool.connect(function (err) {
                if (err) reject(err);
                console.log("sql:"+sql)
                pool.query(sql, function (err, result) {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( result )
                    }
                    //res.end(JSON.stringify(data));
                });
            })
        }





    })
}

