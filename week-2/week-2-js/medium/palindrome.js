/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.replace(/[^a-z]/gi, '');
  /*/[^a-z]/gi

    [^a-z]: Match anything that's not a letter

    g: global (all matches)

    i: case-insensitive*/

    
  str=str.replace(/\s+/g,'');
    /* /\s+/g is a regular expression:

    \s matches any whitespace character (spaces, tabs, newlines)

    + means one or more of those

    g is for global, so it replaces all occurrences*/

  let flag=0;/*assuming the string is a palindrome*/
  let i=0;
  let j=str.length-1;
  while(i<j)
  {
    if(str[i].toLowerCase()===str[j].toLowerCase())
    {
      i++;
      j--;
    }
    else 
      {
        flag=1;/*string is not a palindrome*/
        break;
      }
  }
  
  if (flag===0)
    return true;
  else 
    return false;
      

  
  
}

module.exports = isPalindrome;
