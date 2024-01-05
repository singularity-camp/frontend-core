Какая из следующих функций сложит две переменные и передаст сумму в колбэк через 2 секунды?

```jsx
// A
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2);
};

// B
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};

// C
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y, 2);
  });
};

// D
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y, 2000);
  });
};
```

- [ ] A
- [x] B
- [ ] C
- [ ] D

[Следующий урок](../promises)
