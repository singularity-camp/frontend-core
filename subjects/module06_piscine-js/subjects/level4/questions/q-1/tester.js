// ::javascript
// ::header
// ::code

function forEach(array, func) {
  //your code
}

// ::footer
const process = null;
Array.prototype.forEach = undefined;

let testcases = {
  forEach: [
    {
      args: [[1, 2, 3, 4, 5], add],
      answer: 15,
    },
    {
      args: [[1, 2, 3, 4, 5, 6], add],
      answer: 21,
    },
    {
      args: [[1, 2, 3, 4, 5], minus],
      answer: -15,
    },
    {
      args: [[1, 2, 3, 4, 5, 6], minus],
      answer: -21,
    },
    {
      args: [[0, 0], minus],
      answer: 0,
    },
  ],
};

let __sum = 0;

function add(a) {
  __sum += a;
}

function minus(a) {
  __sum -= a;
}

let res = testcases.forEach.every((elem) => {
  try {
    __sum = 0;
    forEach(...elem.args);
    if (__sum != elem.answer) {
      console.log("Error");
      console.log(`Input: ${JSON.stringify(elem.args[0])}, ${elem.args[1]}`);
      console.log(`Actual: ${__sum}`);
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
