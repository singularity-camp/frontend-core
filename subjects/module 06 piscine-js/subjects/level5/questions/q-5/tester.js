// ::javascript
// ::header
// ::code

function foo(callback) {
  setTimeout(function () {
    callback("A");
  }, Math.random() * 100);
}

function bar(callback) {
  setTimeout(function () {
    callback("B");
  }, Math.random() * 100);
}

function baz(callback) {
  setTimeout(function () {
    callback("C");
  }, Math.random() * 100);
}

// your code

// ::footer

(() => {
  let arr = [];
  console.log = function (d) {
    process.stdout.write(d + "\n");
    arr.push(d);
  };

  if (arr.join("") === "ABC") console.log("Error: log is not async");
  setTimeout(() => {
    if (arr.join("") !== "ABC") console.log("Error: log is wrong");
    if (arr.join("") === "ABC") console.log("success");
  }, 301);
})();
