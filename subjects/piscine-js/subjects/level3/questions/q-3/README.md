# makeUpper

Добавляем методы через прототип

Используя свойство функций `prototype`, добавьте в функцию `Book()` метод `getUpperName()` после создания экземпляра. Метод должен вернуть значение поля `name` в верхнем регистре.

Допишите `Book.prototype`:

```jsx
function Book(name) {
  this.name = name;
}

Book.prototype = {
  getName: function () {
    return this.name;
  },

  // ваш код
};

var book = new Book("The Great Gatsby");
console.log(book.getUpperName()); // 'THE GREAT GATSBY'
```

## Sample input 1:

"Book of Words"

## Sample output 1:

"BOOK OF WORDS"

## Sample input 2:

"Bakytsyz Zhamal"

## Sample output 2:

"BAKYTSYZ ZHAMAL"

Ответ:

```jsx
Book.prototype = {
  getName: function () {
    return this.name;
  },

  // ваш код
  getUpperName: function () {
    return this.name.toUpperCase();
  },
};
```

[Следующая задача](../q-4/)
