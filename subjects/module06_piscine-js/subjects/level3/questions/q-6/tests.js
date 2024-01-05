// ::javascript
// ::header
// ::code

function dayOfTheYear(date) {
  let days = 1;
  const firstDate = new Date(date.getFullYear() + "-01-01");
  while (firstDate < date) {
    firstDate.setDate(firstDate.getDate() + 1);
    days++;
  }
  return days;
}

// ::footer
const process = null;

let testcases = {
  dayOfTheYear: [
    {
      args: [new Date(2022, 0, 1)],
      answer: 1,
    },
    {
      args: [new Date(2022, 1, 1)],
      answer: 32,
    },
  ],
};

let res = testcases.dayOfTheYear.every((elem) => {
  try {
    let res = dayOfTheYear(...elem.args);
    if (res != elem.answer) {
      console.log("Error\ndayOfTheYear");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual:  ${res}`);
      console.log(`Expected: ${elem.answer} `);
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
