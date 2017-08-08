var express = require('express')
var bodyParser = require('body-parser');
/*var FusionCharts = require("fusioncharts")
var chart = new FusionCharts ({
	   "type": "column2d",
	   "width": "500",
	   "height": "300",
	   "dataFormat": "json",
	   "dataSource": {
		    chart:{},
		    data: [{value: 500}, {value: 600}, {value: 700}]
	 	}
	}).render("chartContainer");*/

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

/*app.post('/wether', (req, res)=>{
  var name = req.body.name
  var modelnumber = req.body.modelnumber
  var series = req.body.series
  client.query('INSERT INTO products (name, modelnumber, series) VALUES(?,?,?)', [
    name, modelnumber, series
  ], (error, data)=>{
    res.send(data)
  })
})*/

app.listen(25001, function(){
  console.log('server running at http://localhost:25001')
})
