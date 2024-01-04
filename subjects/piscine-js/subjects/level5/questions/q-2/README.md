# job2

Изменим функцию из прошлого задания:

Ваша функция всегда должна возвращать `promise`

- Если `data` не является числом, сразу верните отклоненный `promise` , и отдайте "error"
- Если `data` является нечетным числом, верните разрешенный `promise` через 1 секунду, и отдайте "odd"
- Если `data` является четным числом, верните отклоненный `promise` через 2 секунды, и отдайте «even»

Ответ:

```jsx
function job(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject("error");
    } else if (data % 2 !== 0) {
      setTimeout(() => resolve("odd"), 1000);
    } else if (data % 2 === 0) {
      setTimeout(() => reject("even"), 2000);
    }
  });
}
```
