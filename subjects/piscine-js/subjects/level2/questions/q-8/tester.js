// ::javascript
// ::header
// ::code

const isEqual = (arr1, arr2) => {
  //your code
};

// ::footer
const process = null;

let testcases = {
  isEqual: [
    {
      args: [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ],
      answer: true,
    },
    {
      args: [
        [1, 2, 3, 4],
        [1, 2, 3, 5],
      ],
      answer: false,
    },
    {
      args: [
        [1, 2, 3, 4],
        [1, 1, 3, 4],
      ],
      answer: false,
    },
    {
      args: [[5], [5]],
      answer: true,
    },
    {
      args: [[], []],
      answer: true,
    },
  ],
};

let res = testcases.isEqual.every((elem) => {
  try {
    let res = isEqual(...elem.args);
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

if (res) {
  console.log("success");
}
