# fixThis

Функция выводит '11 is undefined' вместо '11 is string'. Исправьте её

```jsx
const object = {
  value: "11",
  print() {
    function type() {
      return typeof this.value;
    }

    console.log(`${this.value} is ${type()}`);
  },
};

object.print(); // Поправьте замыкание
```

<pre>
<code>
💡 Про контекст <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this">this</a>.
</code>
</pre>

Ответ:

```jsx
const object = {
  value: "11",
  print() {
    const t = this;
    function type() {
      return typeof t.value;
    }

    console.log(`${this.value} is ${type()}`);
    return type;
  },
};
```
