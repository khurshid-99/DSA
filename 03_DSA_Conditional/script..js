const prompt = require("prompt-sync")();

// let unit = Number(prompt("Enter your units "));
let amount = 0;

// first
const bileAmountOne = () => {
  let unit = Number(prompt("Enter your units "));
  if (unit <= 100) {
    console.log(`Your bile is ${unit * 4.2} `);
  } else if (unit > 100 && unit <= 200) {
    console.log(`Your bile is ${100 * 4.2 + (unit - 100) * 6}`);
  } else if (unit > 200 && unit <= 400) {
    console.log(`Your bile is ${100 * 4.2 + 100 * 6 * 6 + (unit - 200) * 8}`);
  } else if (unit > 500) {
    console.log(
      `Your bile is ${100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13}`
    );
  }
};
// bileAmountOne()
// ---------------

// second

const bileAmountTwo = () => {
  let unit = Number(prompt("Enter your units "));
  if (unit > 400) {
    amount = (unit - 400) * 13;
    unit = 400;
  }
  if (unit > 200 && unit <= 400) {
    amount += (unit - 200) * 8;
    unit = 200;
  }
  if (unit > 100 && unit <= 200) {
    amount += (unit - 100) * 6;
    unit = 100;
  }
  amount += unit * 4.2;

  console.log(amount);
};
// bileAmountTwo()

const findGreatestNumber = () => {
  let numOne = Number(prompt("Enter your Fitst Number "));
  let numTwo = Number(prompt("Enter your Second Number "));
  if (numOne === numTwo) {
    console.log(`Thses two number is sume ${numOne}, ${numTwo}`);
  } else if (numOne > numTwo) {
    console.log(`Big number is ${numOne}`);
  } else if (numTwo > numOne) {
    console.log(`Big number is ${numTwo}`);
  } else {
    console.log(`Sumthing is wrong`);
  }
};
// findGreatestNumber();

const EvenOrOdd = () => {
  let num = Number(prompt("Enter your Number "));
  if (num % 2 === 0) {
    console.log(`${num} this Number is Even`);
  } else {
    console.log(`${num} this Number is Odd`);
  }
};
// EvenOrOdd()

const validVoter = () => {
  let age = Number(prompt("Enter your Age "));
  let name = prompt("Enter your Name ");

  let userName = name?.trim();

  if (age >= 18) {
    console.log(`${userName} is valid for voting age is ${age} `);
  } else {
    console.log(`${userName} is not valid for voting age is ${age}`);
  }
};
// validVoter();

const leapYear = () => {
  let year = Number(prompt("Enter year "));

  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(`${year} this year is a Leap year`);
  }else{
    console.log(`${year} this year is not a Leap year`);
  }
};
leapYear()