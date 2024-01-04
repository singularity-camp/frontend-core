# displayMethods

Напишите функцию JavaScript для вывода всех методов объекта JavaScript.

```jsx
console.log(displayMethods(Array));
//[ "isArray", "from", "of" ]
```

💡 Используйте `filter`.

## Sample input 1:

Array

## Sample output 1:

["isArray", "from", "of"]

Ответ:

```jsx
function displayMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}
```
