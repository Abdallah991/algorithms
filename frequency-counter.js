// problem Anagrams
// an angram returns true if the two strings have the same letters with the same frequency.
// it retrns false otherwise.
// helpful controls, length of words
// frequency of letters and letters in an object
// through for loops, key as string and frequency as the value.
// compare them in the final loop

anagram = (word1, word2) => {
  // if the length is not matching, return false
  if (word1.length != word2.length) return false;
  //   define objects to find the frequency of letters
  var object1 = {};
  var object2 = {};
  for (i = 0; i < word1.length; i++) {
    // frequency of word 1
    if (!object1[word1[i]]) {
      object1[word1[i]] = 1;
    } else {
      object1[word1[i]]++;
    }
    //   find the frequency of word 2
    if (!object2[word2[i]]) {
      object2[word2[i]] = 1;
    } else {
      object2[word2[i]]++;
    }
  }

  // ? to see your objects
  console.log(object1);
  console.log(object2);

  //  loop over the letters and make sure they have the same frequency, if not return false
  // if all correct return true
  for (i = 0; i < word1.length; i++) {
    if (object1[word1[i]] != object2[word1[i]]) {
      return false;
    }
  }
  return true;
};

// the time complexity is O(n)
// two loops, no nested loops
// space complexity O(n)
// two objects, two strings
// ? call the function
console.log(anagram("abdallah", "abdallah"));
