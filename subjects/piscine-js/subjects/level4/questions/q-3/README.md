# citiesOnly

Создайте функцию с именем citiesOnly, которая принимает массив объектов и возвращает массив строк из городов, по ключу `city`.

```jsx
citiesOnly([
  {
    city: "Los Angeles",
    temperature: "  101 °F   ",
  },
  {
    city: "San Francisco",
    temperature: " 84 ° F   ",
  },
]); // ['Los Angeles', 'San Francisco']
```

## Sample input 1:

```jsx
[
  {
    city: "Los Angeles",
    temperature: "  101 °F   ",
  },
  {
    city: "San Francisco",
    temperature: " 84 ° F   ",
  },
];
```

## Sample output 1:

['Los Angeles', 'San Francisco']

💡 Используйте `map`.

Ответ:

```jsx
const citiesOnly = (arr) => arr.map((i) => i["city"]);
```
