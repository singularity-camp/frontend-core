# Is Equal

Напишите функцию, которая сравнивает два объекта на предмет совпадения параметров и значений параметров

Пример:

```jsx
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
const data4 = { a: 1, c: 2 };
isEqual(data, data2); // true
isEqual(data, data3); // false
isEqual(data, data4); // false
```

## Sample input 1:

{}, {}

## Sample output 1:

true

## Sample input 2:

{a: 1, b: 2 },
{ a: 1, b: 2 },

## Sample output 2:

true

## Sample input 3:

{ a: 2, b: 1 },
{ a: 2, b: 2 },

## Sample output 3:

false

Ответ:

```jsx
const isEqual2 = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  for (const prop in firstObj) {
    if (firstObj.hasOwnProperty(prop) && firstObj[prop] !== secondObj[prop]) {
      return false;
    }
  }

  return true;
};
```
