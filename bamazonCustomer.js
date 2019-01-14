// require modules
var inquirer = require("inquirer");
var mysql = require("mysql");

// connection object
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

// function to connect to the bamazon database
connection.connect(function(err) {
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
});

// display all of the items available for sale. Include the ids, names, and prices of products for sale.
function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].id + " | " + res[i].product_name + " | " + res[i].price
      );
    }
    console.log("-----------------------------------");
  });
}

// prompt the user a question asking what ID of the product they would like to buy.
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    {
      type: "input",
      message: "What is the ID of the product you'd like to purchase?",
      name: "productID"
    },
    {
      type: "input",
      message:
        "Would you like everything I have in stock? If not, how many units of the product would you like?",
      name: "quantity"
    }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log(
        "\nHello, " +
          inquirerResponse.username +
          "! Welcome to Leslie's bAmazon."
      );

      console.log(
        "\nThat's probably the best choice, you only need " +
          inquirerResponse.quantity
      );
    } else {
      console.log(
        "\nThat's okay " +
          inquirerResponse.username +
          ", come again when you have money to blow.\n"
      );
    }
  });
