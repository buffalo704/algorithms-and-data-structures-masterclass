// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 1) {
        return arr.pop();
    }
    
    const v = arr.pop();
    return v * productOfArray(arr);
}

console.log(productOfArray([1,2,3,4,5]));
/*
productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/