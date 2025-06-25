/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sorted_str1=str1.toLowerCase().split('').sort().join();
  const sorted_str2=str2.toLowerCase().split('').sort().join();


  if(sorted_str1===sorted_str2)
  {
    return true;
  }
    
  return false;

}

module.exports = isAnagram;
