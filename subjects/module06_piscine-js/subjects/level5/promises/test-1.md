Каков будет вывод в консоль?

```jsx
// Task queue
setTimeout(() => console.log("timeout"), 0);

// Microtask queue
Promise.resolve().then(() => console.log("promise"));
```

- [x] `promise timeout`
- [ ] `timeout promise`
- [ ] `promise`
- [ ] `timeout`

(Колбэк `setTimeout()` добавляется в очередь задач во время первой итерации и будет закинут в стек только во время следующей итерации.)

[Следующий урок](../async-await/)
