// ::javascript
// ::header
// ::code

let is = {};
is.num = (arg) => true;
//your code

// ::footer
const process = null;

let testcases = {
  num: [
    {
      args: [5],
      answer: true,
    },
    {
      args: [NaN],
      answer: true,
    },
  ],
  nan: [
    {
      args: [NaN],
      answer: true,
    },
  ],
  str: [
    {
      args: [""],
      answer: true,
    },
    {
      args: ["💩"],
      answer: true,
    },
  ],
  bool: [
    {
      args: [true],
      answer: true,
    },
    {
      args: [false],
      answer: true,
    },
  ],
  undef: [
    {
      args: [undefined],
      answer: true,
    },
  ],
  arr: [
    {
      args: [[1, Array(1), [], 2]],
      answer: true,
    },
  ],

  obj: [
    {
      args: [Object.create(null)],
      answer: true,
    },
    {
      args: [{ a: 1 }],
      answer: true,
    },
  ],
  fun: [
    {
      args: [console.log],
      answer: true,
    },
  ],
  falsy: [
    {
      args: [0],
      answer: true,
    },
    {
      args: [NaN],
      answer: true,
    },
    {
      args: [""],
      answer: true,
    },
    {
      args: [undefined],
      answer: true,
    },
    {
      args: [null],
      answer: true,
    },
    {
      args: [0],
      answer: true,
    },
  ],
  truthy: [
    {
      args: [true],
      answer: true,
    },
    {
      args: ["🍀"],
      answer: true,
    },
    {
      args: [[]],
      answer: true,
    },
    {
      args: [console.log],
      answer: true,
    },
    {
      args: [2],
      answer: true,
    },
  ],
};

let res = testcases.num.every((elem) => {
  try {
    let res = is.num(...elem.args);
    if (res != elem.answer) {
      console.log("Error\nnum");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});

let res1 = testcases.nan.every((elem) => {
  try {
    let res = is.nan(...elem.args);
    if (res != elem.answer) {
      console.log("Error\nnan");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});
let res2 = testcases.str.every((elem) => {
  try {
    let res = is.str(...elem.args);
    if (res != elem.answer) {
      console.log("Error\nstr");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});

let res3 = testcases.bool.every((elem) => {
  try {
    let res = is.bool(...elem.args);
    if (res != elem.answer) {
      console.log("Error\nbool");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});
let res4 = testcases.undef.every((elem) => {
  try {
    let res = is.undef(...elem.args);
    if (res != elem.answer) {
      console.log("Error\nundef");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});

let res5 = testcases.arr.every((elem) => {
  try {
    let res = is.arr(...elem.args);
    if (res != elem.answer) {
      console.log("Error\narr");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});

let res6 = testcases.obj.every((elem) => {
  try {
    let res = is.obj(...elem.args);
    if (res != elem.answer) {
      console.log("Error\nobj");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});
let res7 = testcases.fun.every((elem) => {
  try {
    let res = is.fun(...elem.args);
    if (res != elem.answer) {
      console.log("Error\nfun");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});
let res8 = testcases.falsy.every((elem) => {
  try {
    let res = is.falsy(...elem.args);
    if (res != elem.answer) {
      console.log("Error\nfalsy");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});
let res9 = testcases.truthy.every((elem) => {
  try {
    let res = is.truthy(...elem.args);
    if (res != elem.answer) {
      console.log("Error\ntruthy");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});

if (
  res &&
  res1 &&
  res2 &&
  res3 &&
  res4 &&
  res5 &&
  res6 &&
  res7 &&
  res8 &&
  res9
) {
  console.log("success");
}
