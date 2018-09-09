var mysql = require("mysql");

var connection = mysql.creatConnection({
  host: "localhost" ,
  port: 3036 ,
  user: "root" ,
  password: ""
  databases: "bamazon_db";
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
