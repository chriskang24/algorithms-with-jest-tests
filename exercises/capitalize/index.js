// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = str.split(' ');
  let newSentence = [];

  for (let word of words) {
    newSentence.push(word[0].toUpperCase() + word.slice(1));
  }

  return newSentence.join(' ');
}

console.log(capitalize('a short sentence'))

module.exports = capitalize;

// function capitalize(str) {

//   let words = str.split(' ');
//   let newSentence = [];

//   for (let word in words) {
//    newSentence.push(words[word][0].toUpperCase() + words[word].slice(1))
//   }

//   return newSentence.join(' ')
// }