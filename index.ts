#! /usr/bin/env node

//shabang


import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction", "Multiplication","division"],
  },
]);

  //conditional statement
  if (answer.operator === "Addition") {
    console.log(
       answer.firstNumber + answer.secondNumber);
     } else if  (answer.operator === "Subtraction") {
        console.log(
           answer.firstNumber - answer.secondNumber);

         }else if   (answer.operator === "Multiplication") {
            console.log(
               answer.firstNumber * answer.secondNumber);

             }else if (answer.operator=== "division") {
             console.log(
              answer.firstNumber / answer.secondNumber);
             
             } else {
        console.log("please select valid operator")
       }



  