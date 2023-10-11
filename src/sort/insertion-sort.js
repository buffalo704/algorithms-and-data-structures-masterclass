function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];
      console.log('temp', arr[j], temp);
      while (j >= 0 && arr[j] > temp) {
        console.log('bef', arr, arr[j], arr[i], j, i);
        console.log('assign', arr[j+1], arr[j], j+1,j);
        arr[j + 1] = arr[j];
        j--;
        console.log('aft', arr, arr[j], arr[i], j, i);
      }
      console.log('outside', arr[j+1], temp);
      arr[j + 1] = temp;
      console.log('pass complete', arr, arr[j], arr[i], j, i);
    }
    console.log('end', arr);
    return arr;
  }

insertionSort([2,10,3,9,5]);