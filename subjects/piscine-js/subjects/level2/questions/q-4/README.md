# doesExist

Напишите функцию, проверяющую, содержит ли объект заданное свойство.

```jsx
let obj = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

exists(obj, "green"); //true
```

## Sample input 1:

{ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "red"

## Sample output 1:

true

## Sample input 2:

{ nested: { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" } },
"kek"

## Sample output 2:

false

Ответ:

```jsx
function exists(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
```

[Cледующая задача](../q-5/)
