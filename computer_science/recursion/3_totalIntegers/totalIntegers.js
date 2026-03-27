const totalIntegers = function (data) {
  if (data === null || typeof data !== "object") return undefined;
  let count = 0;

  function helper(value) {
    if (Number.isInteger(value)) {
      count++;
      return;
    }

    if (value !== null && typeof value === "object") {
      for (const key in value) {
        helper(value[key]);
      }
    }
  }

  helper(data);
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
