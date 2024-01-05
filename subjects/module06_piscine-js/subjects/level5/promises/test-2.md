# Что будет выведено в консоль?

```jsx
new Promise((resolve, reject) => {
  console.log("Стартуем");
  resolve();
})
  .then(() => {
    throw new Error("Ой, произошла ошибка");
    console.log("Раз");
  })
  .then(() => {
    console.log("Два");
  })
  .catch(() => {
    console.log("Три");
  })
  .then(() => {
    console.log("Четыре");
  });
```

'Стартуем', 'Три', 'Четыре'
