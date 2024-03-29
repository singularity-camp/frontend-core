# retry

Создайте функцию `retry`, которая принимает 2 аргумента:

- `count` указывает максимальное количество повторных попыток
- асинхронный обратный вызов, который будет вызываться при каждой попытке

`retry` возвращает функцию, которая вызывает и возвращает значение из функции обратного вызова, передавая свои аргументы и перехватывая ошибки. Если ошибка обнаружена, она должна вернуть функцию обратного вызова с помощью `catch`. Если количество ошибок превышает количество, выдайте ошибку.

> при счете 3 функция будет вызываться не более 4 раз: первоначальный вызов + 3 попытки.

Пример использования:

```jsx
const failNTimes = (n) =>
    async (...v) =>
    --n < 0 ? v : Promise.reject(Error(`x:${v}`));

retry(0, ctx.failNTimes(0)(2) // 2
```

Ответ:

```jsx
const retry = (count, callback) => {
  let attempts = 1;
  const _retry = async (...args) =>
    callback(...args).catch((err) => {
      if (attempts > count) throw err;
      attempts++;
      return _retry(...args);
    });
  return _retry;
};
```
