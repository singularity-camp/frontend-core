# makeItFunction

Допишите функции `accelerate` и `brake`:

- `accelerate` - добавляет скорость
- `brake` - уменьшает скорость

```jsx
function Car(speed, brand) {
  this.speed = speed;
  this.brand = brand;

  this.status = function () {
    return this.brand + " running at " + this.speed + " km/h";
  };
}

let car = new Car(0, "Lada");
car.accelerate(20);
console.log(car.status()); // Lada running at 20 km/h
car.brake(5);
console.log(car.status()); // Lada running at 15 km/h
```

Ответ:

```jsx
function Car(speed, brand) {
  this.speed = speed;
  this.brand = brand;

  this.accelerate = function (amount) {
    this.speed += amount;
  };

  this.brake = function (amount) {
    this.speed -= amount;
  };

  this.status = function () {
    return this.brand + " running at " + this.speed + " km/h";
  };
}
```
