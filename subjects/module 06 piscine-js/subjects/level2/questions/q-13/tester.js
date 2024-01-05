// ::javascript
// ::header
// ::code

const flat = (a, b) => {
  //your code
};

// ::footer
const process = null;
Array.prototype.flat = null;

let testcases = {
  flat: [
    {
      args: [[1]],
      answer: [1],
    },
    {
      args: [[1, [2]]],
      answer: [1, 2],
    },
    {
      args: [[1, [2, [3]]]],
      answer: [1, 2, [3]],
    },
    {
      args: [[1, [2, [3], [4, [5]]]], 2],
      answer: [1, 2, 3, 4, [5]],
    },
    {
      args: [[1, [2, [3], [4, [5]]]], 3],
      answer: [1, 2, 3, 4, 5],
    },
  ],
};

let res = testcases.flat.every((elem) => {
  try {
    let res = flat(...elem.args);
    if (!equals(res, elem.answer)) {
      console.log("Error");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
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
