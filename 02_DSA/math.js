// console.log(Math.random());
// console.log(Math.abs(-19)); // it is change negative valu to positive
// console.log(Math.ceil(10.3));
// console.log(Math.floor(10.9));
// console.log(Math.round(10.5));
// console.log(Math.trunc(10.54567890));
// console.log(Math.pow(10, 4));
// console.log(Math.max(20, 40, 50, 30, 80, 1000, 30, 10, 70));
// console.log(Math.sqrt(10)); // don't undustand
// console.log((Math.random() *10).toFixed(2));

const prompt = require("prompt-sync")();

//  It is calculate compound interest
// const p = prompt("Enter principle ");
// const r = prompt("Enter rate of interest ");
// const t = prompt("Enter time ");

// let cp = p * Math.pow(1 + r / 100, t) - p;
// console.log(cp.toFixed(2));

// console.log(Math.trunc((Math.random() * 9000) + 1000)); // it is OPT Generater

// ? 1/ Area of triangle by heron's formula

const triangleArea = (a, b, c) => {
  const s = (a + b + c) / 2;

  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area.toFixed(4));
};

triangleArea(5, 6, 7);

// ? 2/ Circumference of circle
