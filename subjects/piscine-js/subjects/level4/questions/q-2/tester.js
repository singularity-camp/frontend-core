// ::javascript
// ::header
// ::code

function displayMethods(obj) {
  //your code
  return [];
}

// ::footer
const process = null;

function _testDisplayMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}

let testcases = {
  displayMethods: [
    {
      args: [Array],
      answer: ["isArray", "from", "of"],
    },
    {
      args: [Object],
      answer: [
        "assign",
        "getOwnPropertyDescriptor",
        "getOwnPropertyDescriptors",
        "getOwnPropertyNames",
        "getOwnPropertySymbols",
        "is",
        "preventExtensions",
        "seal",
        "create",
        "defineProperties",
        "defineProperty",
        "freeze",
        "getPrototypeOf",
        "setPrototypeOf",
        "isExtensible",
        "isFrozen",
        "isSealed",
        "keys",
        "entries",
        "fromEntries",
        "values",
      ],
    },
  ],
};

let res = testcases.displayMethods.every((elem) => {
  try {
    let res = displayMethods(...elem.args);
    let res2 = _testDisplayMethods(...elem.args);
    if (!equals(res, res2)) {
      console.log("Error");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${res2}`);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
});

if (res) {
  console.log("success");
}

function equals(array, array2) {
  if (array2.length != array.length) return false;
  for (var i = 0, l = array2.length; i < l; i++) {
    if (array2[i] instanceof Array && array[i] instanceof Array) {
      if (!array2[i].equals(array[i])) return false;
    } else if (array2[i] != array[i]) {
      return false;
    }
  }
  return true;
}
