# invert

Напишите функцию, которая принимает объект и возвращает новый объект, где:

- ключи — значения исходного объекта,
- значения — ключи исходного объекта.

Поля исходного объекта — строки или числа.

```jsx
function invert(obj) {
  //your code
}

console.log(invert({ test: 1 }));
// { 1: 'test' }
```

## Sample input 1:

{ a: 1, b: 2 }

## Sample output 1:

{ 1: "a", 2: "b" }

## Sample input 2:

{ a: 2, b: 2 }

## Sample output 2:

{ 2: "a", 2: "b" }

Ответ:

```jsx
function invert(obj) {
  const keys = Object.keys(obj);
  const newObj = {};
  keys.forEach((item) => (newObj[obj[item]] = item));
  return newObj;
}
```
