function isPalindrome(word) {
  // iterate from the beginning to the middle
  for (let i = 0; i < word.length / 2; i++) {
    // check each letter to the correponding letter from the end
    const j = word.length - 1 - i;
    // if any letters don't match, return false
    if (word[i] !== word[j]) return false;
  }

  // return true
  return true;
}

/* 
r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
0 1 2 3 4 5 6
  i       j

r a c e c a r
0 1 2 3 4 5 6
    i   j

r a c e c a r
0 1 2 3 4 5 6
      ij


  Add your pseudocode here
  That means if the
  first letter is the same as last letter, and the second letter is the same
  as the second to last letter, etc. until we reach the middle, return true.

  iterate from the beginning to the middle
    check each letter to the correponding letter from the end
      if any letters don't match, return false

  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
