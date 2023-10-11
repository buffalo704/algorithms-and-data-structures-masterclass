function bubblesort(arr) {
    let swap = false;
    for (let i = arr.length; i >= 0; i--) {
        for (let j = 0; j < i - 1; j++) {            
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
                swap= true;
            }
            
        }
        console.log('pass complete');
        if (!swap) break;
    }
    console.log('end', arr);
    return arr;
}

bubblesort([2, 10, 3,9,5]);