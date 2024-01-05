# is

Добавить новые функции объекту `is`, чтобы проверить тип значения:

- `is.num` - проверить, что значение `number`
- `is.nan` - проверить, что значение `NaN`
- `is.str` - проверить, что значение `string`
- `is.bool` - проверить, что значение `boolean`
- `is.undef` - проверить, что значение `undefined`
- `is.arr` - проверить, что значение `array`
- `is.obj` - проверить, что значение `object` или `null`
- `is.fun` - проверить, что значение `function`
- `is.truthy` - проверить, что значение `truthy`
- `is.falsy` - проверить, что значение `falsy`

```jsx
is.truthy("🍀"); // true
is.truthy(0); // false

is.falsy(0); // true

is.fun(() => {}); //true
is.fun({}); //false

is.num(NaN); //true

is.nan(NaN); //true
```

```
💡 falsy : "", 0, -0, NaN, null, undefined, false
```

Ответ:

```jsx
is.num = (arg) => typeof arg === "number" && arg !== NaN;
is.nan = (arg) => Number.isNaN(arg);
is.str = (arg) => typeof arg === "string";
is.bool = (arg) => typeof arg === "boolean";
is.undef = (arg) => typeof arg === "undefined";
is.def = (arg) => typeof arg !== "undefined";
is.arr = (arg) => Array.isArray(arg);
is.obj = (arg) =>
  !Array.isArray(arg) && typeof arg === "object" && arg !== null;
is.fun = (arg) => typeof arg === "function";
is.truthy = (arg) => Boolean(arg);
is.falsy = (arg) => !Boolean(arg);
```

[Следующая задача](../q-6/)
