const express = require('express')
const app = express();

var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kavin'

})

connection.connect()



  var sql = "INSERT INTO user (name, dep, email,number,year) VALUES ('kavin', 'ece','kavinsurya@outlook.in','90806898110','3')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("data entered successfully");
  });




app.get('/', (req, res) => {
   connection.query('select * from user', function (err, rows, fields)
   {
       if (err) throw err
       console.log('The data is', rows)
       res.send(rows);
   })
});

 
var sql = "UPDATE user SET email = 'kavin@gmail.com' WHERE email = 'kavinsurya@gmail.com'";
 connection.query(sql, function (err, result) {

  console.log("data has been updated  successfully");
   
 });


 var sql = "DELETE from user WHERE dep = 'Higy 37'";
 connection.query(sql, function (err, result) {
   if (err) throw err;
   console.log("Number of records deleted: " + result.affectedRows);
 });


app.listen(8000, () => {
  console.log('listening on port: 8000')
});