var mysql = require('mysql')

var connMysql = function() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'x5r2i6e3',
        database : 'portal_noticias'
    })
}

module.exports = function() {
    console.log('o Auto Load carregou o modulo de conexao com o banco de dados')
    return connMysql
}
    
