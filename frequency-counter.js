// problem Anagrams
// an angram returns true if the two strings have the same letters with the same frequency.
// it retrns false otherwise.
// helpful controls, length of words
// frequency of letters and letters un an object
// through for loops, key as string and frequency as the value.
// compare them in the final loop

anagram = (word1, word2) => {
  // if the length is not matching, return false
  if (word1.length != word2.length) return false;
  //   define objects to find the frequency of letters
  var object1 = {};
  var object2 = [];
  //   find the frequency for word 1
  for (i = 0; i < word1.length; i++) {
    if (!object1[word1[i]]) {
      object1[word1[i]] = 1;
    } else {
      object1[word1[i]]++;
    }
  }
  //   find the frequency of word 2
  for (i = 0; i < word2.length; i++) {
    if (!object2[word2[i]]) {
      object2[word2[i]] = 1;
    } else {
      object2[word2[i]]++;
    }
  }

  console.log(object1);
  console.log(object2);

  //   loop over the letters and make sure they have the same frequency, if not return false
  // if all correct return true
};

anagram("abdallah", "abdulla");
