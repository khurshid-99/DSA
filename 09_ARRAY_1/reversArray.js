function rev1(params) {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  let temp = new Array(arr.length);
  let i = arr.length - 1;
  for (let j = 0; j < arr.length; j++) {
    temp[j] = arr[i];
    i--;
  }
  // console.log(arr, temp);
}

function rav2(params) {
  const arr2 = [10, 20, 30, 40, 50];
  let i = 0;
  let j = arr2.length - 1;
  while (i < j) {
    let temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
    i++;
    j--;
  }

  console.log(arr2);
}
rav2();
