const prompt = require("prompt-sync")();

function strongeNumber() {
  let num = Number(prompt("Enter your number : "));
  let copyNum = num;
  let ans = 0;

  while (num > 0) {
    let dig = num % 10;
    // console.log(dig);
    let fact = 1;
    for (let i = 1; i <= dig; i++) {
      fact *= i;
    }
    ans += fact;
    console.log(Math.floor(num / 10));

    num = Math.floor(num / 10);
  }
  console.log(ans, copyNum);
}
strongeNumber();
