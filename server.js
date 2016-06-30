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

app.use(bodyParser.json());

connection.connect();


console.log("Empezó.");

// Get en root
app.get('/', function(req, res){
  console.log("Entró a get.");
    console.log('Connection succesfull');
    connection.query('USE hola;');
    connection.query('SELECT * FROM PersonID', function(err, rows, fields) {
      if (err) throw err;
      console.log("Successsss, se desplegó la informmación. Lo de abajo solamente es la primera entrada de la base de datos")
      console.log('The ID is: ', rows[0].ID);
    });


});

// Post
app.post('/post/:id', function(req, res){
  var input = req.params.id;

  console.log(input);
  console.log("Entró a post.");
    console.log('Connection succesfull');

    connection.query('USE hola;');
    connection.query('INSERT INTO PersonID (ID) VALUES("123")', function(err, rows, fields) {
      console.log("Successsss, se metió la informmación")
    });


});

app.listen(8001);
