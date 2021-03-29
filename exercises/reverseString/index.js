// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using Reduce:
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

reverse('apple')

// Using Built-in Methods:
// function reverse(str) {
//   const reversedString = str.split('').reverse().join('')
//   return reversedString
// }

// Using For Of Loops:
// function reverse(str) {
//   let reversedString = "";

//   for (let char of str) {
//     reversedString = char + reversedString
//   }

//   return reversedString;
// }

// Using Recursion:
// function reverse(str) {

//   console.log(str.substr(1))
//   console.log('charAt', str.charAt(0))
//   return (str === "") ? '' : reverse(str.substr(1)) + str.charAt(0);
// }

module.exports = reverse;
