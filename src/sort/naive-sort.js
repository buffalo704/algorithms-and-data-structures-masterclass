function naiveSort(bigstr, smstr){
    let i = 0;
    let j = 0;

    let count = 0;
    while (j < bigstr.length) {
        if (bigstr[j] === smstr[i]) {
            if (i === smstr.length - 1) {
                count++;
                i = 0;
                j++;
                
            } else {
                i++;
                j++;
            }

            
        } else {
            j++;
            i = 0;
        }
    }
    console.log(count);
    return count;
}

naiveSort('wowomgzomg', 'omg');