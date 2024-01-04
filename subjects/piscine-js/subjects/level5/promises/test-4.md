# Что будет выведено в консоль?

```jsx
Promise.resolve("Успех")
  .then((data) => {
    data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
  });
```

Ответ:
undefined
