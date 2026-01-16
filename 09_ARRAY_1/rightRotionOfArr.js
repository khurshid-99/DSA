let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrLastIndex = arr[arr.length - 1];
console.log(arrLastIndex);

for (let i = arr.length - 2; i >= 0; i--) {
  arr[i + 1] = arr[i];
}

arr[0] = arrLastIndex;
console.log(arr);
