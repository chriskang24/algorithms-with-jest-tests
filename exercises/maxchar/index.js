// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = {};
  let charCount = 0;
  let mostSeenChar = '';
  for (let char of str) {
    count[char] = count[char] + 1 || 1;
  }

  for (let value in count) {
    if (count[value] > charCount) {
      charCount = count[value]
      mostSeenChar = value
    }
  }

  return mostSeenChar
}

maxChar("abcccccccd")

module.exports = maxChar;
