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
connection.end();
