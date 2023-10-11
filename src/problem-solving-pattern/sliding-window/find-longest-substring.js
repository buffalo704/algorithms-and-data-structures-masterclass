function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let longestSubString = Number.NEGATIVE_INFINITY;
    let i=0;
    let j=1;
    let windowArr = [str[i]];
    
    while (i < str.length) {
        console.log('i j', i,j);
        console.log(longestSubString, windowArr.length, windowArr);
        if (windowArr.includes(str[j])) {
            windowArr.shift();
            i++;
        } else {
            windowArr.push(str[j]);
            longestSubString = Math.max(longestSubString, windowArr.length);
            
            if (j < str.length - 1) {
                j++;
            } 
        }
    }
    console.log(longestSubString);
    return longestSubString === Number.NEGATIVE_INFINITY ? 0 : longestSubString;
  }
  
  // findLongestSubstring('rithmschool') // 7
  // findLongestSubstring('thisisawesome') // 6
  // findLongestSubstring('thecatinthehat') // 7
  // findLongestSubstring('bbbbbb') // 1
  // findLongestSubstring('longestsubstring') // 8
  findLongestSubstring('thisishowwedoit') // 6
  
/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/