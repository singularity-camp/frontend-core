### TypeScript

## Варианты решения типизации

Существуют различные надстройки над языком, а также другие (кроме JS ) компилируемые в машинный код языки для браузеров.

### Отдельные языки программирования:

- [Dart](https://dart.dev/)
- [CoffeeScript](https://coffeescript.org/)
- [Clojure](https://clojure.org/), и тд

### Типизированный JS

- [Flowjs](https://flow.org/)
- [TypeScript](https://www.typescriptlang.org/)

## TypeScript

TypeScript - это строго типизированный язык программирования на основе JS, созданный и поддерживаемый Microsoft. Он представляет дополнительные функции, такие как строгая привязка типов (переменные привязаны к определенным типам данных) для JS , а также может быть скомпилирован в JS.

TypeScript — это проект с открытым исходным кодом, доступен на [GitHub](https://github.com/microsoft/TypeScript).

### Возможности TS

TypeScript добавляет в JavaScript несколько дополнительных функций. Самая важная из них — строгая типизация (она включена по умолчанию, но может быть отключена, если разработчик не хочет ее использовать).

Помимо строгой типизации, TypeScript предоставляет множество функций, таких как интерфейсы, классы миксины, перечисления(`enum`) и многое другое.

Рассмотрим пример - cледующий скрипт не вызовет никаких ошибок при использовании JavaScript , но если вы используете TypeScript , компилятор укажет, что cвойство `color` не существует.

```jsx
const obj = {
  foo: "baz",
};

console.log(obj.color);
```

Редактор кода покажет ошибку, указывая на `obj.color`.

### Установка

Установим TypeScript:

```bash
# Установка компилятора
~$ level 5 npm install --save-dev module 10 level 3 typescript

# Компиляция файла
~$ tsc helloworld.ts
```

Теперь вы сможете скомпилировать любой код TypeScript в JavaScript.

Вы также можете описывать необходимые настройки с помощью файла конфигурации `tsconfig.json`:

```JSON
{
    "compilerOptions": {
    "outDir": "dist",
    "target": "es2016"
    "declaration": false,
    "module": "commonjs",
    "strictNullChecks": true,
    "sourceMap": true,
        ...
   }
}
```

Полные возможности конфиг файла можно найти в [официальной документации](https://www.typescriptlang.org/tsconfig/), пока можете использовать пример, приведённый выше.
