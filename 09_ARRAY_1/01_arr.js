let arr = [10, 20, 30, 40, 50];
// console.log(arr);
arr.push(100); // add in array End
arr.pop(); // remove element from array  End
// console.log(arr);
arr.shift(); // deleting from start
// console.log(arr);
arr.unshift(500); // insertion from start
// console.log(arr);

let arr2 = [10, 20, 30, 40, 50];
// console.log(arr2[3]);

let arr3 = new Array(3);
// console.log(arr3);

arr3.unshift(1000);
arr3.push(4000);
// console.log(arr3);

const prompt = require("prompt-sync")();
const n = Number(prompt("Enter your Array length : "));
let arr4 = new Array(n);

// for (let i = 0; i < arr4.length; i++) {
//   arr4[i] = Number(prompt("Enter a value : "))
// }

// console.log(arr4);


let arr5 = new Array(5).fill(true);
console.log(arr5);
