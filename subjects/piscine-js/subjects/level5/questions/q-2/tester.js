// ::javascript
// ::header
// ::code
const job = (data) => {
  //your code
};

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

  let _res = true;
  try {
    start();
    job(3).then((res) => {
      if (res !== "odd") {
        console.log("Data is not odd");
        _res = false;
      }
      let time = end();
      if (time !== 1) {
        console.log("job(3): Promise resolved too early or too soon");
        _res = false;
      }
    });

    job(2).catch((res) => {
      if (res !== "even") {
        console.log("Data is not even");
        _res = false;
      }
      let time = end();
      if (time !== 2) {
        console.log("job(2): Promise resolved too early or too soon");
        _res = false;
      }
    });

    job(undefined).catch((res) => {
      if (res !== "error") {
        console.log("Data is not error");
        _res = false;
      }
      let time = end();
      if (time !== 0) {
        console.log("job(undefined): Promise resolved too early or too soon");
        _res = false;
      }
    });
  } catch (e) {
    console.log(e.message);
  }

  setTimeout(() => {
    if (_res) {
      console.log("success");
    }
  }, 2000);
})();
