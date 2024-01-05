# zip

Напишите функцию `zip`. Она принимает любое число объектов, а возвращает единый объект, который содержит все поля исходных объектов. Если один и тот же ключ встречается в нескольких объектах, следует оставить то значение, что встретилось первым.

Подсказка:
Чтобы обойти все элементы массива и вернуть результирующее значение, используйте метод `reduce`.

```jsx
function zip() {
  //your code
}

// Пример работы
const objects = [
  { foo: 5, bar: 6 },
  { foo: 13, baz: -1 }, // foo - повторяющийся ключ
];

zip(...objects); // { foo: 5, bar: 6, baz: -1 }
```

## Sample input 1:

{ foo: 5, bar: 6 },
{ foo: 13, baz: -1 }

## Sample output 1:

{ foo: 5, bar: 6, baz: -1 }

## Sample input 2:

{ foo: 5, bar: 6 }, { baz: -1 }

## Sample output 2:

{ foo: 5, bar: 6, baz: -1 }

## Sample input 3:

{ foo: 2 }, { bar: 2 }

## Sample output 3:

{ foo: 2, bar: 2 }

Ответ:

```jsx
const zip = (...arguments) => {
  const args = Array.from(arguments);
  const newObj = args.reduce((res, item) => ({ ...item, ...res }));
  return newObj;
};
```
