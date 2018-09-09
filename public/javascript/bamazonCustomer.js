var inquirer = require('inquirer');

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
      type: "password",
      message: "Set your password",
      name: "password"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    {
      type: "confirm",
      message: "Would you like to engage in an exchange of your money for my products?",
      name: "confirm",
      default: true
    },
    {
      type: "input",
      message: "Great! What is the id of the product you'd like?",
      name: "products",
    },
    {
      type: "input",
      message: "Would you like everything I have in stock? If not, how many of these would you like?",
      name: "quantity",
    }
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log("")
    }
    typeof input !== 'number') {
      done('You need to provide a number');
        return;
    }
    // Use user feedback for... whatever!!
  });
