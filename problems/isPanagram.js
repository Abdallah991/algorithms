// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
//  Ignore numbers and punctuation.

function isPangram(string) {
  // set to small case, and only include letters
  let value = string
    .toLowerCase()
    .split("")
    .filter((v) => v.charCodeAt(0) > 96 && v.charCodeAt(0) < 123);
  //   remove duplicates
  let val = Array.from(new Set(value));
  //   if length is 26 its true
  if (val.length === 26) return true;

  return false;
}
