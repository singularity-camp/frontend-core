Что выведется в консоль в коде ниже:

```jsx
function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  var a = 1;
  console.log(this.a);
}

foo();
```

- [x] `undefined`
- [ ] `null`
- [ ] `1`
- [ ] `2`

[Следующий урок](../comparison)
