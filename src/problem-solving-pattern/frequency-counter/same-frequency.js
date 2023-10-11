function sameFrequency(a,b){
    // good luck. Add any arguments you deem necessary.
      a= String(a);
      b= String(b);
  if (a.length !== b.length) {
      return false;
  } 
      let lookup = {};
      for (let i=0; i< a.length; i++) {
          console.log(a[i]);
          lookup[a[i]] = lookup[a[i]] ? lookup[a[i]] + 1: 1; 
      }
      
      console.log(JSON.stringify(lookup));
      for (let i=0; i< b.length; i++) {
          if (!lookup[b[i]]){
              return false;
          } else {
              lookup[b[i]] = lookup[b[i]] - 1; 
          }
      }
      
      return true;
      
  }
  
  sameFrequency(182,281);

/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/