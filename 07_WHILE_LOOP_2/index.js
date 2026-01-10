const prompt = require("prompt-sync")();

console.log("hi");

function findISBNNumber() {
  let num = prompt("Enter Your ISBN Number for check isValide or not : ");
  let copyOfNum = num;
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  console.log(count);

  if (count !== 10) return console.log("Invalid ISBN Number");
  else {
    let ans = 0;
    while (count > 0) {
      let dig = copyOfNum % 10;
      ans += dig * count;
      count--;
      copyOfNum = Math.floor(copyOfNum / 10);
    }
    console.log(ans);
    console.log(ans % 11 === 0 ? "it is ISBS" : "Not ISBN");
  }
}
findISBNNumber();
