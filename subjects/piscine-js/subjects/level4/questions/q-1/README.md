# forEach

Создайте функцию `forEach`, которая принимает массив в качестве первого аргумента, функцию в качестве второго и работает как метод `.forEach`.

```jsx
let arr = [1, 2, 3];
function log(a) {
  console.log(a);
}

function forEach(array, func) {
  //your code
}

forEach(arr, log);
/*  1
    2
    3 *\
```

## Sample input 1:

[1, 2, 3, 4, 5], (a) => sum += a;

## Sample output 1:

15

## Sample input 1:

[1, 2, 3, 4, 5], (a) => sum -= a;

## Sample output 1:

-15

Ответ:

```jsx
function forEach(array, func) {
  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }
}
```
