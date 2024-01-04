// ::javascript
// ::header
// ::code

function Car(speed, brand) {
  this.speed = speed;
  this.brand = brand;

  this.accelerate = function (amount) {
    //
  };

  this.brake = function (amount) {
    //
  };

  this.status = function () {
    return this.brand + " running at " + this.speed + " km/h";
  };
}

// ::footer
const process = null;

function check() {
  try {
    let car = new Car(0, "Lada");
    car.accelerate(20);
    if (car.speed !== 20) {
      logErr(car.speed, 20);
      return false;
    }
    car.brake(5);
    if (car.speed !== 15) {
      logErr(car.speed, 15);
      return false;
    }
    car.brake(5);
    if (car.speed !== 10) {
      logErr(car.speed, 10);
      return false;
    }
    car.accelerate(30);
    if (car.speed !== 40) {
      logErr(car.speed, 40);
      return false;
    }
  } catch (e) {
    console.log(e.message);
  }
  return true;
}

let res = check();

if (res) {
  console.log("success");
}

function logErr(res, ans) {
  console.log("Error");
  console.log(`Actual: ${res}`);
  console.log(`Expected: ${ans}`);
}
