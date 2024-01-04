# tempForecasts

Создайте функцию `tempForecasts`, которая будет принимать массив объектов и возвращать массив строк, отформатированных, как показано ниже:

```jsx
tempForecasts([
  {
    city: "Pasadena",
    temperature: " 101 °F",
    state: "california",
    region: "West",
  },
]); // -> ['38°Celsius in Pasadena, California']
```

<pre>
<code>
💡 Регулярное выражение - <a href="https://github.com/ziishaned/learn-regex#what-is-regular-expression"> regex </a>
</code>
</pre>

💡 Используйте `map`.

## Sample input 1:

```jsx
[
  {
    city: "Pasadena",
    temperature: " 101 °F",
    state: "california",
    region: "West",
  },
];
```

## Sample output 1:

['38°Celsius in Pasadena, California']

Ответ:

```jsx
const tempForecasts = (arr) =>
  arr.map(
    (i) =>
      Math.floor(((i["temperature"].match(/-\d+|\d+/) - 32) * 5) / 9) +
      "°Celsius in " +
      i["city"] +
      ", " +
      i["state"]
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
  );
```
