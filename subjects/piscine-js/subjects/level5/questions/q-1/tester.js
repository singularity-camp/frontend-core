// ::javascript
// ::header
// ::code

function job() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("hello world"), 2000);
  });
}

// ::footer
const process = null;

(function () {
  var startTime, endTime;
  function start() {
    startTime = new Date();
  }

  function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    timeDiff /= 1000;
    var seconds = Math.round(timeDiff);
    return seconds;
  }

  try {
    start();
    job().then((res) => {
      if (res !== "hello world") {
        console.log("Data is not hello world");
        return false;
      }
      let time = end();
      if (time != 2) {
        console.log("Promise resolved too early or too soon");
        return false;
      }
      console.log("success");
    });
  } catch (e) {
    console.log(e.message);
  }
})();
