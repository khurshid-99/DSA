    let arr = [3, -7, 12, -1, 0, -9, 8, -4, 15, -2];

    let i = 0;
    let j = 0;

    while (i < arr.length) {
    if (arr[i] <= 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++
    }
    i++
    }

    console.log(arr);
