const prompt = require("prompt-sync")();

let n;
do {
  console.log(`Enter 1 for Additions`);
  console.log(`Enter 2 for Subtrations`);
  console.log(`Enter 3 for Multiplecation`);
  n = Number(prompt("Enter your case : "));
  switch (n) {
    case 1:
      let a = Number(prompt("Enter Your First Number : "));
      let b = Number(prompt("Enter Your Second Number : "));
      console.log(a + b);
      break;
    case 2:
      let c = Number(prompt("Enter Your First Number : "));
      let d = Number(prompt("Enter Your Second Number : "));
      console.log(c - d);
      break;
    case 3:
      let e = Number(prompt("Enter Your First Number : "));
      let f = Number(prompt("Enter Your Second Number : "));
      console.log(e * f);
      break;

    default:
      console.log(`You type wrong number `);
      break;
  }
  n = Number(prompt("Enter 10 for continu"));
} while (n === 10);
