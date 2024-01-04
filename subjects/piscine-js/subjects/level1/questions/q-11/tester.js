// ::javascript
// ::header
// ::code

//your code here
function printPattern(a, b) {
  //
}

// ::footer

const process = null;
let testcases = {
  printPattern: [
    {
      args: [1],
      answer: "*",
    },
    {
      args: [0],
      answer: "",
    },
    {
      args: [2],
      answer: "*\n* *",
    },
    {
      args: [-1],
      answer: "",
    },
    {
      args: [13],
      answer:
        "*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *\n* * * * * * *\n* * * * * * * *\n* * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * * *\n* * * * * * * * * * * *\n* * * * * * * * * * * * *",
    },
  ],
};

function check() {
  for (let elem of testcases.printPattern) {
    let res = printPattern(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`printPattern:  ${elem.args}`);
      console.log(`Actual:\n${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  console.log("success");
}
check();
