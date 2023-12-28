// write a fucntion that reads a string both ways from left and right


function isPalindrome(str) {
    // 1- write base cases 
    // if lenght equals 1 its true
    if (str.length == 1) return true
    // if length equals 2 and two elements equal each other, return true
    if (str.length == 2 && str[0] == str[1]) return true
    // 2- write recursive case
    // if first and last element equal each other, call the function recursively excluding the letters compared
    if (str[0] == str[str.length-1]) {
        return isPalindrome(str.slice(1,-1));
    }

    // if any of the conditions dont meet, return false
    return false;
}

// test cases
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat'))  // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false