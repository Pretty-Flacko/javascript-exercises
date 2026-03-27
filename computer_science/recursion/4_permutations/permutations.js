const permutations = function (arr) {
  if (arr.length === 0) return [[]];

  const result = [];

  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      result.push(path);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      backtrack(
        [...path, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
      );
    }
  }

  backtrack([], arr);
  return result;
};

// Do not edit below this line
module.exports = permutations;
