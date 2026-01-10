const prompt = require("prompt-sync")();

function printNum() {
  const num = Number(prompt("Enter your Number "));
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
// printNum()
function printReversNum() {
  const num = Number(prompt("Enter your Number "));
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}
// printReversNum();

function tabel() {
  const num = Number(prompt("Enter your Number "));
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
// tabel()

// -----

function sumOfNum() {
  let total = 0;
  const num = Number(prompt("Enter your Number "));
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    total += i;
  }
  console.log(total);
}
// sumOfNum()

// ------

function factorial() {
  let total = 1;
  const num = Number(prompt("Enter your Number "));
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    total *= i;
  }
  console.log(total);
}
// factorial();

// ------

function evenAndOddRange() {
  let first = Number(prompt("Enter your first Numder "));
  let second = Number(prompt("Enter your second Number "));
  let even = 0;
  let odd = 0;
  if (first > second) {
    let temp = first;
    first = second;
    second = temp;
  }

  for (let i = first; i <= second; i++) {
    if (i % 2 === 0) {
      console.log(`This is even ${i}`);
      even += i;
    } else {
      console.log(`This is odd ${odd}`);
      odd += i;
    }
  }
  console.log(`Total even is ${even}`);
  console.log(`Total odd is ${odd}`);
}
// evenAndOddRange();

// ------------------

function findNumOfFactor() {
  let num = Number(prompt("Enter your Numder "));
  let allFactor = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      // process.stdout.write(`${i} `);
      allFactor.push(i);
    }
  }
  console.log(`These are all factor number : ${allFactor.join(" ")} `);
}
// findNumOfFactor();

function findNumOfFactor2() {
  let num = Number(prompt("Enter your Numder "));
  let allFactor = [];
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      // process.stdout.write(`${i} `);
      allFactor.push(i);
    }
  }
  console.log(`These are all factor number : ${allFactor.join(" ")} `);
}
// findNumOfFactor2();

// ------------------

function findThePrimeNumber() {
  let num = Number(prompt("Enter your Numder "));
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(`${num} is a Prime Number`);
  } else {
    console.log(`${num} is not a Prime Number`);
  }
}
// findThePrimeNumber();

function findThePrimeNumber2() {
  let num = Number(prompt("Enter your Numder "));
  let count = 0;
  if (num <= 1) {
    console.log(`${num} is not a prime number`);
  } else {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) count++;
    }
    if (count === 0) {
      console.log(`${num} is a Prime Number`);
    } else {
      console.log(`${num} is not a Prime Number`);
    }
  }
}
// findThePrimeNumber2();

function findThePrimeNumber3() {
  let num = Number(prompt("Enter your Numder "));

  if (num <= 1) {
    console.log(`${num} is not a prime number`);
  } else if (num === 0) console.log(`${num} is not a Prime`);
  else {
    let isPrime = true;
    for (let i = 0; i <= Math.floor(Math.sqrt(num)); i += 2) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
    console.log(`${isPrime ? `${num} is a Prime` : `${num} is not a Prime  `}`);
  }
}
findThePrimeNumber3();
