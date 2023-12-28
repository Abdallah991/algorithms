// write a fucntion that reverse a string recursively
function reverse(str) {
// 1- write base case
if (str.length == 1) return str[0];
// 2- write a resursive case
return str[str.length-1]+ reverse(str.slice(0,-1))

}
console.log(reverse("jaaa"));