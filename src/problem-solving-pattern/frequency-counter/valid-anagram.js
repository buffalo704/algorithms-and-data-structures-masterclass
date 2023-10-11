function validAnagram(a,b){
    // add whatever parameters you deem necessary - good luck!
    const ra = f(a);
    const rb = f(b);
    console.log('ra', JSON.stringify(ra));
    console.log('rb', JSON.stringify(rb));
    for (const [key, value] of Object.entries(rb)) {
    console.log(`${key}: ${value}`);
      ra[key] =ra[key] - rb[key];
      }
      console.log('raafter', JSON.stringify(ra))
      console.log('values',Object.keys(ra).length, Object.keys(ra).length);
      return  (Object.keys(ra).length === Object.keys(rb).length)
      && 
      Object.values(ra).every(a => a === 0 ) 
  
  }
  
  const f = (a) => {
      const result = {};
      a.split('').forEach((str) => {
          result[str] = result[str] ? result[str] + 1 : 1;
          
      });
      return result;
  }
  
  validAnagram('aaz', 'zza') 
  validAnagram('anagram', 'nagaram')
  

/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

