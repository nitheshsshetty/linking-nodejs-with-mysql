var faker=require('faker')
var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : '*****',
  user     : '****',    
  password :'****', // your root username
  database :'****'   // the name of your db

});

var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
});
//inserting uniquw mail id via faker package
var person={mail: faker.internet.email()}
connection.query("Insert into user set ?",person, function (error, result) {
  if (error) throw error;
  console.log("succesfully added");
});


connection.end();
