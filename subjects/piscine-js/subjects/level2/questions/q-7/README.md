# unique

Напишите метод, возвращающий массив без дубликатов

```jsx
const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]
```

## Sample input 1:

[1, 2, 1, 2, 3]

## Sample output 1:

[1, 2, 3]

## Sample input 2:

[]

## Sample output 2:

[]

Ответ:

```jsx
const unique = (array) => Array.from(new Set(array));
```

[Cледующая задача](../q-8/)
