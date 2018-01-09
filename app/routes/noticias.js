module.exports = function(app) {

app.get('/noticias', function(req, res) {
    var mysql = require('mysql')
    
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'x5r2i6e3',
        database : 'portal_noticias'
    })

    connection.query('select * from noticias', function(erro, result){
        res.render('noticias/noticias', {noticias : result})
    })
    //res.render('noticias/noticias')
    })
}
