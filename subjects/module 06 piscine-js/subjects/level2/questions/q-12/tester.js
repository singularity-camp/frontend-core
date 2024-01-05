// ::javascript
// ::header
// ::code

const reverse = (a) => {
  //your code
};

// ::footer
const process = null;
Array.prototype.reverse = null;

let testcases = {
  reverse: [
    {
      args: [[1, 2, "add"]],
      answer: ["add", 2, 1],
    },
    {
      args: [[1, 2, 3]],
      answer: [3, 2, 1],
    },
    {
      args: ["pouet"],
      answer: "teuop",
    },
    {
      args: ["Almaty"],
      answer: "ytamlA",
    },
  ],
};

let res = testcases.reverse.every((elem) => {
  try {
    let res = reverse(...elem.args);
    if (Array.isArray(elem.answer)) {
      if (!equals(res, elem.answer)) {
        console.log("Error");
        console.log(`Input: ${elem.args}`);
        console.log(`Actual: ${res}`);
        console.log(`Expected: ${elem.answer}`);
        return false;
      }
    } else {
      if (res !== elem.answer) {
        console.log("Error");
        console.log(`Input: ${elem.args}`);
        console.log(`Actual: ${res}`);
        console.log(`Expected: ${elem.answer}`);
        return false;
      }
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
