# Сравнение значений

Результатом любого сравнения является только значение типа boolean (true или false).

### Приведение типов (coercion)

В JS есть 2 способа приведения типов:

- явный
- неявный

Пример _явного_ приведения:

```jsx
var a = "56";

var b = Number(a);

a; // "56"
b; // 56 — число!
```

Пример _неявного_ приведения:

```jsx
var a = "56";

var b = a * 1; // здесь "56" неявно приводится к 56

a; // "56"
b; // 56 — число!
```

### Как бы истинный и ложный(Truthy & falsy)

JavaScript определяет список особых значений, которые считаются «как бы ложными», так как при приведении к логическому значению они примут значение false; такой список включает в себя 0 и "". Любое другое значение, не входящее в список «как бы ложных», автоматически считается «как бы истинным»: при приведении к логическому значению оно становится равным true.

Особый список "как бы ложных" значений в JavaScript таков:

- `""` (пустая строка)
- `0`, `-0`, `NaN` (некорректное `число`)
- `null`, `undefined`
- `false`

Любое значение, не входящее в этот список — "как бы истинно." Вот несколько примеров:

- `"hello"`
- `56`
- `true`
- `[ ]`, `[ 1, "2", 3 ]` (массивы)
- `{ }`, `{ a: 56 }` (объекты)
- `function foo() { .. }` (функции)

``` 
💡 Вам не требуется заучивать значения, на самом деле все придет с практикой.
```

### Равенство

Есть четыре операции равенства: ==, ===, != и !==.

Разница между == и === обычно состоит в том, что == проверяет на равенство значений, а === проверяет на равенство и значений, и типов. Подходящий способ охарактеризовать их: == проверяет на равенство значений с использованием приведения, а === проверяет на равенство, не разрешая приведение. Операцию === часто по этой причине называют "строгое равенство".

Посмотрите на пример неявного приведения, которое допускается нестрогим равенством == и не допускается строгим равенством ===:

```jsx
var a = "56";
var b = 56;

a == b; // true
a === b; // false
```

В сравнении a == b JS замечает, что типы не совпадают, поэтому он делает упорядоченный ряд шагов, чтобы привести одно или оба значения к другим типам, пока типы не совпадут, а затем уже может быть проверено простое равенство значений.
`"56"` становится `56`, чтобы сделать сравнение `56 == 56`. Это простой пример приведения типов для дальнейшего их сравнения.

<pre>
<code>
💡 Подробнее про операторы сравнения<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness"> тут</a>.
</code>
</pre>

[Тест](./test-1.md)