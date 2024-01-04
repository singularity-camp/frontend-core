# isPlainObject

Напишите функцию, которая проверяет является ли element объектом, а не массивом или null.

Пример:

```jsx
// ({ a: 1 }) => true,
// ([1, 2, 3]) => false
const data = { a: 1 };
console.log(isPlainObject(data)); // true
```

## ## Sample input 1:

{}

## ## Sample output 1:

true

## ## Sample input 2:

-1, 3

## ## Sample output 2:

false

## ## Sample input 3:

() => {}

## ## Sample output 3:

false

Ответ:

```jsx
isPlainObject = (element) =>
  typeof element === "object" && !Array.isArray(element) && element !== null;
```

[Cледующая задача](../q-2/)
