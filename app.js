var faker=require('faker') //invoking faker library 
var mysql=require('mysql'); //invoking mysql library

//connecting to mysql database with credentials
var connection = mysql.createConnection({
  host     : '*****',
  user     : '****',    
  password :'****', // your root username
  database :'****'   // the name of your db

});

//accessing mysql DB via app.js
var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
});

//insert take 1
var q = 'insert into user (mail) values("aarushi06@gmail.com")';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log("succesfully added");
});


//inserting unique mail id via faker package
var person={mail: faker.internet.email()}
connection.query("Insert into user set ?",person, function (error, result) {
  if (error) throw error;
  console.log("succesfully added");
});


connection.end();
