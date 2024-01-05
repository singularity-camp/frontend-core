# ABC

Даны 3 асинхронные функции со случайным `setTimeout`. Напишите код, который выведет в консоль:

```jsx
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
```

```bash
A
B
С
```

Исходные функции можно только вызывать, но не менять.

Ответ:

```jsx
[foo, bar, baz].reduce((p, fn) => {
  return p
    .then(() => new Promise((resolve) => fn(resolve)))
    .then((result) => console.log(result));
}, Promise.resolve());
```
