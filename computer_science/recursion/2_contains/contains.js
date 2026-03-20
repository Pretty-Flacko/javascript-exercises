const contains = function (obj, value) {
  for (const key in obj) {
    const current = obj[key];

    if (current === value || (Number.isNaN(current) && Number.isNaN(value)))
      return true;

    if (current && typeof current === "object") {
      if (contains(current, value)) return true;
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
