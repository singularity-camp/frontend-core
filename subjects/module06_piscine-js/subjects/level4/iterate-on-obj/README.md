# Итерации на объекте

### Object.keys, values, entries

Для простых объектов доступны следующие методы:

- `Object.keys(obj)` – возвращает массив ключей.
- `Object.values(obj)` – возвращает массив значений.
- `Object.entries(obj)` – возвращает массив пар [ключ, значение].

Например:

```jsx
let user = {
  name: "John",
  age: 30,
};

Object.keys(user); // ["name", "age"]
Object.values(user); // ["John", 30]
Object.entries(user); // [ ["name","John"], ["age",30] ]
```

Вытащив из объекта массив ключей, мы можем перебирать значния объекта любым удобным способом, например:

```jsx
// перебор значений
for (let value of Object.values(user)) {
  console.log(value); // John, 30
}
```

или:

```jsx
// перебор значений через ключи и forEach
let keys = Object.keys(user);
keys.forEach((key) => console.log(key, ":", user[key])); /* name : John 
                                                            age : 30 */
```

или:

```jsx
// перебор значений через entries и forEach
let entries = Object.entries(user);
entries.forEach(([key, val]) => console.log(key, ":", val)); /* name : John 
                                                                age : 30 */
```

Как всегда полезный ресурс MDN 🤓:

<pre>
<code>
💡 Про Object.keys <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">тут</a>.
</code>
</pre>

<pre>
<code>
💡 Про Object.entries <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">тут</a>.
</code>
</pre>
<pre>
<code>
💡 Про Object.values <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values">тут</a>.
</code>
</pre>

[Тест](./test-1.md)
