let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 9;

k = k % arr.length; // edg case
for (let i = 1; i <= k; i++) {
  const temp = arr[arr.length - 1];
  for (let j = arr.length - 2; j >= 0; j--) {
    arr[j + 1] = arr[j];
  }

  arr[0] = temp;
}

console.log(arr);
