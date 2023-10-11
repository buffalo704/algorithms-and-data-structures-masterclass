function minSubArrayLen (arr, digit) {
    let minLength = Infinity;
    let i = 0;
    let j = 1;
    let window = arr[i];
    let windowArr = [window];
    
    while (i < arr.length) {
        console.log('total',i, j, window);
        
        if (window >= digit) {
            minLength = Math.min(minLength, windowArr.length);
            window = window - arr[i];
            windowArr.shift();
            i++;
            
            console.log('minLength', minLength, window);
        } else {
            window = window + arr[j];
            windowArr.push(arr[j]);
            if (j < arr.length) {
                j++; 
            } else {
                break;
            }
        } 
         console.log('windowArr', windowArr);
    }
    console.log('minLength result', minLength === Infinity ? 0 : minLength);
    return minLength === Infinity ? 0 : minLength;
}
// minSubArrayLen([2,3,1,2,4,3], 7)
// minSubArrayLen([2,1,6,5,4], 9)
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/