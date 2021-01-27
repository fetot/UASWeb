const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uas_172113641'
})

connection.connect((err)=>{
    if(err)
        console.log("Terjadi kesalahan dengan mySQL " + err)
    else
        console.log("Terhubung dengan Database")
})

const port = 3001
app.use('/static', express.static('statics'))
app.use(cors())
app.use(express.json())

app.get('/film', (req, res) => {
    connection.query('SELECT * FROM tbl_film ORDER BY tbl_film.wwgross DESC', function (err, rows, fields) {
        if (err) throw err
      
        res.json(rows)
    })
})


app.post('/addfilm', (req, res)=>{
    var data = {
        title : req.body.title,
        released : req.body.released,
        studio : req.body.studio,
        wwgross : req.body.wwgross,
        domgross : req.body.domgross
    }
    connection.query('INSERT INTO tbl_film SET ?', data, (err, result)=>{
        if (err) 
            throw err
        else 
            res.json(result)
    })
})

app.delete('/del/:id', (req, res)=>{
    var id = req.params.id
    connection.query('DELETE FROM tbl_film WHERE id = ' + id, (err, result)=>{
        if (err) 
            throw err
        else 
            res.json(result)
    })
})

app.put('/edit/:id', (req, res)=>{
    var id = req.params.id
    var title = req.params.title
    var released = req.params.released
    var studio = req.params.studio
    var wwgross = req.params.wwgross
    var domgross = req.params.domgross
    connection.query('UPDATE tbl_film SET title = "' + title + '", released = "' + released + '", studio = "' + 
    studio + '", wwgross = "' + wwgross + '", domgross = "' + domgross + '" WHERE id = ' + id, (err, result)=>{
        if (err) 
            throw err
        else 
            res.json(result)
    })
})


app.listen(port, () => console.log(`Server berjalan di port ${port}!`))