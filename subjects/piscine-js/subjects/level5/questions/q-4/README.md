# sumAsync

Напишите функцию `sumAsync`, которая принимает 2 числа и возвращает `Promise` c условиями:

- `reject` c ошибкой `Error("Must provide two parameters")`, если одно из чисел не явлется числом
- `resolve` сумму чисел, если оба параметра числа

```jsx
addAsync(1, 2).then((res) => console.log(res)); // 3
addAsync(undefined, 2).catch((e) => console.log(e.message)); // Must provide two parameters
```

Ответ:

```jsx
function addAsync(x, y) {
  return new Promise((resolve, reject) => {
    if (x === undefined || y === undefined) {
      reject(new Error("Must provide two parameters"));
    } else {
      resolve(x + y);
    }
  });
}
```
