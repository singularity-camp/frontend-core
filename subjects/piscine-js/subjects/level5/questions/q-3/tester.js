// ::javascript
// ::header
// ::code

const badResult = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
};

const solution = () => {
  //your code
};

// ::footer
(function () {
  let arr = [];
  console.log = function (d) {
    process.stdout.write(d + "\n");
    arr.push(d);
  };
  try {
    solution();
    setTimeout(() => {
      if (arr.join("") === "0123456789") console.log("Вывод не асинхронный");
    }, 0);
    setTimeout(() => {
      if (arr.join("") === "0123456789") console.log("success");
      else console.log("Неправильный вывод");
    }, 10);
  } catch (e) {
    console.log(e.message);
  }
})();
