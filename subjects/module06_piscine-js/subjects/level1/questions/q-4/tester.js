// ::javascript
// ::header
// ::code

function more(a) {
  //
}

// your code here ...

// ::footer

const process = null;
let testcases = {
  more: [
    {
      args: [1],
      answer: 2,
    },
    {
      args: [2],
      answer: 3,
    },
    {
      args: [0],
      answer: 1,
    },
    {
      args: [-5],
      answer: -4,
    },
  ],
  less: [
    {
      args: [1],
      answer: 0,
    },
    {
      args: [2],
      answer: 1,
    },
    {
      args: [0],
      answer: -1,
    },
    {
      args: [-5],
      answer: -6,
    },
  ],
  add: [
    {
      args: [1, 3],
      answer: 4,
    },
    {
      args: [-100, 100],
      answer: 0,
    },
    {
      args: [123, 123],
      answer: 246,
    },
    {
      args: [-500000, -234],
      answer: -500234,
    },
  ],
  sub: [
    {
      args: [1, 3],
      answer: -2,
    },
    {
      args: [-100, 100],
      answer: -200,
    },
    {
      args: [123, 123],
      answer: 0,
    },
    {
      args: [-500000, -234],
      answer: -499766,
    },
  ],
};

function check() {
  for (let elem of testcases.more) {
    let res = more(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`more:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  for (let elem of testcases.less) {
    let res = less(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`less:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  for (let elem of testcases.add) {
    let res = add(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`add:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  for (let elem of testcases.sub) {
    let res = sub(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`sub:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }
  console.log("success");
}
check();
