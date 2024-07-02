#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code!!!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operations",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "Fast Cash", "Pin change"],
    },
  ]);
  //if user slect withdraw
  if (operationAns.operations === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      let balance = myBalance - amountAns.amount;
      console.log(`The remaining balance is ${balance}`);
    } else {
      console.log(`you have insufficient balance`);
    }
  }
  //if user select fast cash
  else if (operationAns.operations === "Fast Cash") {
    let fastcashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["1000", "5000", "10000", "15000"],
      },
    ]);
    if (fastcashAns.amount <= myBalance) {
      let balance2 = myBalance - fastcashAns.amount;
      console.log(`the remaining balance is ${balance2}`);
    } else {
      console.log(`you have insufficient amount`);
    }
  } else if (operationAns.operations === "check balance") {
    console.log(myBalance);
  } else if (operationAns.operations === "Pin change") {
    let newPinAns = await inquirer.prompt({
      name: "newPin",
      message: "Enter your new pin",
      type: "number",
    });
    let myPin = newPinAns.newPin;
    console.log("Your PIN has been changed successfully!");
  }
} else {
  console.log("your pin is wrong");
}
