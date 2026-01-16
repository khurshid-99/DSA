let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let k =5;
for (let i = 1; i <= k; i++) {
  let temp = arr[0];
  for (let j = 1; j < arr.length; j++) {
    arr[j - 1] = arr[j];
  }
  arr[arr.length - 1] = temp;
}

console.log(arr);
