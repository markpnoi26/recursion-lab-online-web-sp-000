// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  let finalChar = string[string.length - 1]
  
  if (string.length > 1) {
    let substring = string.substring(0, string.length - 1)
    return(finalChar + reverseString(substring))
  } else {
    return string[0]
  }
}

function isPalindrome(string) {
  let count = string.length
  
  if (count === 1) {
    return true
  } else if (string[0] === string[string.length -1]) {
    let substring = string.substring(1, string.length - 2)
    return true && isPalindrome(substring)
  } else {
    return false
  }
}