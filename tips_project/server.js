var express = require('express')
var bodyParser = require('body-parser');

var app = express()
var mysql = require('mysql')
var client = mysql.createConnection({
  user: 'root',
  password: 'tips1234',
  database: 'tips_project'
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));

app.get('/wether', (req, res)=>{
  client.query('SELECT * FROM wether', (error, data)=>{
    res.send(data)
  })
})

app.listen(25001, function(){
  console.log('server running at http://localhost:25001')
})
