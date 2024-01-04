# operation

Напишите функцию, которая принимает три аргумента - число1, число2 и операцию, которую нужно произвести с числами. Список операций:

- `add` складывает два аргумента
- `sub` рассчитывает разницу аргументов
- `div` делит число1 на число2
- `mult` умножает число1 на число2

Пример:

```jsx
console.log(operation(1, 2, "add")); // 3
```

## Sample input 1:

1, 2, "add"

## Sample output 1:

3

## Sample input 2:

1, 2, "sub"

## Sample output 2:

-1

Ответ:

```jsx
const operation = (a, b, operation) => {
  if (operation === "add") {
    return a + b;
  }
  if (operation === "sub") {
    return a - b;
  }
  if (operation === "div") {
    return a / b;
  }
  if (operation === "mult") {
    return a * b;
  }
};
```

[Cледующая задача](../q-10/)
