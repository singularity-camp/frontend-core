# timeout

Создайте функцию `timeout`, которая принимает 2 аргумента:

- `delay` указывает максимальное время ожидания
- асинхронный обратный вызов, который будет вызываться

`timeout` возвращает функцию, которая либо вызывает и возвращает значение из функции обратного вызова, передавая свои аргументы, либо возвращает `Error('timeout')`, если обратный вызов не разрешился до истечения времени задержки.

Пример использования:

```jsx
const sum = (a, b) => {
  return a + b;
};

timeout(2000, sum)(2, 3)
  .then((res) => console.log(res)) // 5
  .catch((err) => console.log(err));
```

Или:

```jsx
const delayed =
  (delay) =>
  (...v) =>
    new Promise((res) => setTimeout(res, delay, v));

timeout(3000, delayed(1000))(2, 3)
  .then((res) => console.log(res)) // [2, 3]
  .catch((err) => console.log(err.message));

timeout(0, delayed(1000))(2, 3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message)); //timeout
```

💡 Используйте <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/race">Promise.race</a>.
Ответ:

```jsx
const timeout = (delay, callback) => {
  const _delayed = async (...args) => {
    let _promice1 = new Promise((res, rej) => {
      setTimeout(() => rej(), delay);
    });
    let _promice2 = new Promise((res, rej) => {
      res(callback(...args));
    });

    return Promise.race([_promice1, _promice2])
      .then((val1) => {
        return val1;
      })
      .catch((err) => {
        throw Error("timeout");
      });
  };
  return _delayed;
};
```
