// ::javascript
// ::header
// ::code

class User {
  constructor(name) {
    this.name = name;
  }
  //your code
}

class Account extends User {
  constructor() {
    //...
  }
  getSalary() {
    //...
  }
}

// ::footer
const process = null;

let testcases = {
  user: [
    {
      args: ["Oleg", "Matrosov", 1000],
      answer: ["Oleg Matrosov", 1000],
    },
    {
      args: ["Oleg", "Matrosova", 1000],
      answer: ["Oleg Matrosova", 1000],
    },
    {
      args: ["O", "Matrosov", 10000],
      answer: [" Matrosov", 1000],
    },
    {
      args: ["O", "A", 1000],
      answer: [" ", 1000],
    },
  ],
};

let res = testcases.user.every((elem) => {
  let acc = new Account(...elem.args);
  let res1 = acc.getSalary();
  let res2 = acc.getFullname();
  if (res1 != elem.answer[1] || res2 !== elem.answer[0]) {
    console.log("Error");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual: salary: ${res1} fullname:${res2}`);
    console.log(
      `Expected: salary:${elem.answer[1]} fullname:${elem.answer[0]}}`
    );
    return false;
  }
  return true;
});

if (res) {
  console.log("success");
}
