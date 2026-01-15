const arr = [20, 30, 40, 10, 50, 96, 62, 70, 99, 50, 20, 100, 40, 10,  ];

let max = arr[0];
let secMax = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secMax = max;
    max = arr[i];
  }
}

console.log(max);
console.log(secMax);


