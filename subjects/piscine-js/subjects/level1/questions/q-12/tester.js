// ::javascript
// ::header
// ::code

//your code here
function fizzBuzz(a, b) {
  //
}

// ::footer

const process = null;
let testcases = {
  fizzBuzz: [
    {
      args: [0],
      answer: "",
    },
    {
      args: [1],
      answer: "1",
    },
    {
      args: [-1],
      answer: "",
    },
    {
      args: [8],
      answer: "1 2 Fizz 4 Buzz Fizz 7 8",
    },
    {
      args: [2],
      answer: "1 2",
    },
    {
      args: [5],
      answer: "1 2 Fizz 4 Buzz",
    },
  ],
};

function check() {
  for (let elem of testcases.fizzBuzz) {
    let res = fizzBuzz(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`Input:  ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  console.log("success");
}
check();
