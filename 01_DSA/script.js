// Understanding Conditional Statements
// Types of Conditional Statements if , if-else , if-else if , switch
// Making decisions in a program based on inputs or variables.
// Validating user data or input forms.
// Creating interactive menus or options in applications.
const prompt = require("prompt-sync")();

const a = 10;
const b = 20;

// console.log(a+b);

// const userName = prompt("Enter your name ");
// const age = +prompt("Enter your age ");
// const age = Number(prompt("Enter your age "));

// console.log(`Hello ${userName} your ${age} age`); // this is simple

const userGreet = () => {
  const userName = prompt("Enter your name ");
  if (
    userName === "" ||
    userName.trim() === null ||
    userName.length > 100 ||
    userName.length < 0
  ) {
    console.log("Enter your currect name");
    return;
  }

  const age = Number(prompt("Enter your age "));
  if (!age === isNaN() || age > 120 || age <= 0) {
    console.log("Enter your currect age");
    return;
  }

  console.log(`Hello ${userName.trim()} you are ${age} years old.`);
};
userGreet();
