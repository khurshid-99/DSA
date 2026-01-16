let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr_0 = arr[0];

for (let i = 1; i < arr.length; i++) {
  arr[i - 1] = arr[i];
}

arr[arr.length - 1] = arr_0;

console.log(arr);
