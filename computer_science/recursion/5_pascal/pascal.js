const pascal = function (n) {
  if (n === 1) return [1];

  const prev = pascal(n - 1);
  const row = [];

  row.push(1);

  for (let i = 0; i < prev.length - 1; i++) {
    row.push(prev[i] + prev[i + 1]);
  }

  row.push(1);

  return row;
};

// Do not edit below this line
module.exports = pascal;
