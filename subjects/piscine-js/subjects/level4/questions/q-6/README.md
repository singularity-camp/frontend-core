# adder

Создайте функцию `adder`, которая получает массив, и возвращает сумму всех элементов.
Она принимает 2 параметра:

- `arr` - массив
- начальное значение (необязательный параметр)

```jsx
const arr = [1, 2, 3, 4];
adder(arr); //10

const arr = [1, 2, 3, 4];
adder(arr, 2); //12
```

💡 Используйте `reduce`.

## Sample input 1:

[1, 2, 2, 2, 2, 2, 4]

## Sample output 1:

15

Ответ:

```jsx
const adder = (arr, result) =>
  arr.reduce((a, b) => a + b, (result = result || 0));
```
