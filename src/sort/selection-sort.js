function selectionSort(arr) {
    
    for (let i=0; i< arr.length; i++) {        
        let minValIndex = i;
        for (let j=i+1; j < arr.length; j++) {
            console.log(arr, arr[i], arr[j]);
            if (arr[j] < arr[minValIndex]) {
                minValIndex = j;
                console.log('min', j, arr[j]);
                swap = true;
            }
        }
        if (i !== minValIndex) {
            [arr[i], arr[minValIndex]]=[arr[minValIndex],arr[i]];
            console.log('swap');
        }
        console.log('pass complete');
    }
    console.log('end', arr);
    return arr;
}
selectionSort([2,10,3,9,5]);
// selectionSort([2,3,5,9,10]);