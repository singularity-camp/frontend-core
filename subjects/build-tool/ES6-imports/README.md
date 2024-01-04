# ES6 Импорты

В стандарте ES6 стали доступны две инструкции:

- `import` - для подключения модуля
- `export` - для экспорта функций, объектов или примитивов из файла

Выполним импорт из файла `file2.js` в `file1.js`:

- file2.js

```jsx
function greet(obj) {
  console.log("Привет, ", obj.name);
}

export const person = { name: "Alibek" }; // экспортируем объект person

export function second() {
  console.log("second");
} // экспортируем функцию second

export default greet; // экспортируем функцию greet
```

- file1.js

```jsx
import otherGreet, { person as obj, second } from "./file2";
```

Мы использовали разные способы импорта и экспорта:

- При импорте функция `greet` получила другое название: `import otherGreet, ... from "./file1"`. Это возможно если функция, переменная или класс были экспортированы с помощью `export default`.

- Для объекта `person` использован «именованный» экспорт.

```jsx
otherGreet(obj); // Привет, {a: 1}
second(); // second
```

Данный вид модулей — очень мощный инструмент в JavaScript, который позволяет писать изолированные модули.

Еще больше примеров можно найти тут:

- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export

### Браузеры

Чтобы подключить модуль в теге `<script>` нужно указать `type="module"`

```html
<script src="file.js" type="module"></script>
```

### Особенности модулей ES6+

- В модулях действует режим `use strict` - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode
- Изолированная область видимости для каждого модуля
- Код в модуле выполняется один раз за один импорт
- В модулях нельзя обратиться к глобальному объекту:

```jsx
<script>
  console.log(this); // window
</script>

<script type="module">
  console.log(this); // undefined
</script>
```
