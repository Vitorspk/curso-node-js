var mysql = require('mysql')

module.exports = function() {

    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'x5r2i6e3',
        database : 'portal_noticias'
    })
}
    
