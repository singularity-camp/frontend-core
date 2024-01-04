# get

Создайте функцию `get`, которая принимает 2 аргумента:

- `src` - object
- `path` - string

И возвращает значение по ключу, указаному в `path`.

```jsx
const src = { user: { name: "Andrii" } };
const path = "user.name";

get(src, path); // -> 'Andrii'
```

## Sample input 1:

{ key: "value" }, "key"

## Sample output 1:

"value"

## Sample input 2:

{ key: "value" }, "nx"

## Sample output 2:

undefined

## Sample input 3:

{ nested: { key: "value" } }, "nested.key"

## Sample output 3:

"value"

Ответ:

```jsx
function get(src, path) {
  var arr = path.split(".");
  var obj = src;
  for (let i = 0; i < arr.length; i++) {
    obj = obj[arr[i]];
    if (obj == undefined) {
      return undefined;
    }
  }
  return obj;
}
```

[Cледующая задача](../q-4/)
