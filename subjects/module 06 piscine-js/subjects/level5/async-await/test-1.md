Рассмотрим следующую асинхронную функцию и ее вывод. Что будет отображаться в консоли при вызове функции f()?

```jsx
async function f() {
  let result = "first!";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  result = await promise;

  console.log(result);
}

f();
```

- [ ] first!
- [x] done!
- [ ] Error
- [ ] ReferenceError

[Перейти к задачам](../questions/)
