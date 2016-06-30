var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');


// Application initialization

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1212'
});

var app = express();

//connection.connect();



console.log("Empezó.");
// Main route sends our HTML file
app.get('/', function(req, res){
  //console.log("Entró a /");
  console.log("Entró.");
  connection.connect();
    console.log('SUCCESSSSSSS CONEXION');
    connection.query('USE hola;');
    connection.query('SELECT * FROM PersonID', function(err, rows, fields) {
      if (err) throw err;
      console.log('SUCCESSSSSSS');
      console.log('The ID is: ', rows[0].ID);
    });

  connection.end();

});
/*
app.get('/', function(req, res){
  res.send('hello world');
});
*/

app.listen(8001);
