var inquirer = require("inquirer");

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
      type: "list",
      message:
        "Would you like to engage in an exchange of your money for my products?",
      choices: [],
      name: "sale"
    },
    {
      type: "input",
      message: "What is the id of the product you'd like?",
      name: "product"
    },
    {
      type: "input",
      message:
        "Would you like everything I have in stock? If not, how many of these would you like?",
      name: "quantity"
    }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log("\nWelcome" + inquirerResponse.username);
      console.log(
        "\nGreat! We're happy to send you all of our item" +
          inquirerResponse.product
      );
      console.log(
        "\nThat's probably the best choice, you only need" +
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
