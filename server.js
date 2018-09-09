var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",

  port: 8080,

  user: "root",

  password: "",
  database: "bamazon_db"
});

connection.connect(function(error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("connected");
  }
});
