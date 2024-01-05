# Что будет выведено в консоль?

```jsx
Promise.resolve("Успех")
  .then(() => {
    throw new Error("Ой, произошла ошибка");
  })
  .catch(() => {
    return "Поймал!";
  })
  .then(() => {
    throw new Error("Снова ошибка");
  })
  .catch((error) => {
    console.log(error.message);
  });
```

Ответ:
'Снова ошибка'
