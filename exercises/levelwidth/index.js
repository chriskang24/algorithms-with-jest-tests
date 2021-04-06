// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {

  const arr = [root, 'placeholder'];
  const widths = [0];

  // Using Breath First Traversal
  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 'placeholder') {
      widths.push(0);
      arr.push('placeholder');
    } else {
      arr.push(...node.children);
      widths[widths.length - 1]++;
    }
  }

  return widths;
}

module.exports = levelWidth;
