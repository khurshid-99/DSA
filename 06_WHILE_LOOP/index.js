// revers Number

const prompt = require("prompt-sync")();

function revers(params) {
  let num = prompt("Enter your Number : ");
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
    // console.log(num);
    
  }
  console.log(rev);
  
}
revers()