# Is Empty

Напишите функцию, которая проверяет, определены все параметры объекта ‘object’.
Пример:

```jsx
isEmpty({}); //true
isEmpty({ a: undefined }); //true,
isEmpty({ a: 1 }); //false
```

## Sample input 1:

{}

## Sample output 1:

true

## Sample input 2:

{ a: undefined }

## Sample output 2:

true

## Sample input 3:

{ a: 1 }

## Sample output 3:

false

Ответ:

```jsx
const isEmpty = (object) => {
  const objectKeys = Object.keys(object);
  if (objectKeys.length === 0) {
    return true;
  }

  return !objectKeys.filter(
    (key) => object[key] || object[key] === 0 || object[key] === false
  ).length;
};
```
