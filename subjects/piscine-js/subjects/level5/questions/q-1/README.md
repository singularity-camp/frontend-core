# job

Cоздайте функцию `job`, которая возвращает `promise`.
`promise` должен резолвиться через 2 секунды, после вызова `job` и отдавать `hello world`.

Ответ:

```jsx
function job() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("hello world"), 2000);
  });
}
```
