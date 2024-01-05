// DESCRIPTION:
// Write a function that, given a string of text (possibly with punctuation and line-breaks),
//  returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, , / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

// Examples:
/* "In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income." -> ["a", "of", "on"]
"e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e" -> ["e", "ddd", "aa"]
 " //wont won't won't" -> ["won't", "wont"] */

// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.

function findTopWords(text) {
    // Step 1: Convert the text to lowercase and replace non-alphanumeric characters with whitespace
    const cleanedText = text.toLowerCase().replace(/[^a-z' ]+/g, ' ');
    // Step 2: Split the cleaned text into an array of words
    const words = cleanedText.split(' ');
    // Step 3: Count the frequency of each word using an object
    const wordCounts = {};
    for (const word of words) {
      if (word !== '') { // Skip empty words
        // Remove leading and trailing apostrophes
        const cleanedWord = word.replace(/^'|'$/g, '');
  
        // Increment the count for the word or initialize it to 1 if it doesn't exist
        wordCounts[cleanedWord] = (wordCounts[cleanedWord] || 0) + 1;
      }
    }

    // Step 4: Convert the word counts object into an array of [word, count] pairs
    const wordCountPairs = Object.entries(wordCounts);

    // Step 5: Sort the word count pairs based on the count (descending order)
    wordCountPairs.sort((a, b) => b[1] - a[1]);

    // Step 6: Extract the top 3 words (or less if there are fewer unique words)
    const topWords = wordCountPairs.slice(0, 3).map(pair => pair[0]);
  // return top words
    return topWords;
  }

  const text1 = "In a village of La Mancha, the name of which I have no desire to call to\n" +
  "mind, there lived not long since one of those gentlemen that keep a lance\n" +
  "in the lance-rack, an old buckler, a lean hack, and a greyhound for\n" +
  "coursing. An olla of rather more beef than mutton, a salad on most\n" +
  "nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra\n" +
  "on Sundays, made away with three-quarters of his income.";
// console.log(findTopWords(text1));
// Output: ["a", "of", "on"]

const text2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
// console.log(findTopWords(text2));
// Output: ["e", "ddd", "aa"]

const text3 = "  //wont won't won't";
console.log(findTopWords(text3));
