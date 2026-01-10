let prompt = require("prompt-sync")();

function matchNum() {
  const num = Number(prompt("Enter your number"));

  switch (num) {
    case 1:
    case 4:
      console.log(`hello it is ${num}`);
      break;
    default:
      console.log(`it is not found ${num}`);
      break;
  }
}

// matchNum()

function vawel() {
  const userInput = prompt("Enter your text : ");
  let v = 0;
  let c = 0;
  for (let i = 0; i < userInput.length; i++) {
    let element = userInput.charAt(i).toLowerCase();

    switch (element) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        v++;
        break;
      default:
        c++;
        break;
    }
  }

  console.log(v);
  console.log(c);
}
// vawel();

function findArea() {
  console.log(`Enter 1 for area of rectangle`);
  console.log(`Enter 2 for area of sqaure`);
  console.log(`Enter 3 for area of triangle`);

  const num = Number(prompt("Enter your number "));
  switch (num) {
    case 1:
      const len = Number(prompt("Enter length "));
      const breadth = Number(prompt("Enter breadth "));
      console.log(len * breadth);
      break;
    case 2:
      const side = Number(prompt("Enter side "));
      console.log(side * side);
      break;
    case 3:
      const height = Number(prompt("Enter height "));
      const base = Number(prompt("Enter base "));
      console.log((height * base) / 2);
      break;
    default:
      console.log(`Invalid number `);
      break;
  }
}
// findArea()
