# ООП в JavaScript

JavaScript не является объектно-ориентированным языком в классическом понимании ООП. Он основывается не на классах, а на **прототипах**.

Для начала, рассмотрим классический вариант создания класса через конструкцию `class`.

<pre>
<code>
💡 class стал доступен с приходом ES6 версии <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Language_Resources">ECMAScript</a>.
</code>
</pre>

### Синтаксис «class»

Базовый синтаксис выглядит так:

```jsx
class MyClass {
  // методы класса
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

Для создания объекта класса используется ключевое слово `new`. Метод `constructor()` вызовется автоматически.

Пример:

```jsx
class User {
  constructor(name) {
    this.name = name;
    this.eyes = 2;
    this.mouth = 1;
  }

  sayHi() {
    console.log(`Hello, ${this.name}`);
  }
}
```

Создание объекта:

```jsx
let user = new User("Айзада");
user.sayHi();
```

Когда вызывается `new User("Айзада")`:

1. Создаётся новый объект.
2. `constructor` запускается с заданным аргументом и сохраняет его в `this.name`.

Затем можно вызывать методы объекта, такие как `user.sayHi()`.

### Наследование с помощью extends

Ключевое слово `extends` используется для создания дочернего класса.

### Синтаксис

```jsx
class ChildClass extends ParentClass { ... }
```

Пример:

```jsx
class Employee extends User {
  constructor(name, salary) {
    super(name);
    this.salary = salary;
  }
}
```

Cоздали класс `Employee`, который наследует класс `User`, т.е класс `Employee` имеет такие же методы как и `User`, хотя мы их и не прописывали.

A что насчет `constructor()`? В нашем случае мы переписали конструктор в `Employee`, и вместо 1 параметра передаем два: `name` и `salary`.

```jsx
// Создаем сотрудника
const employee = new Employee("John", 3000);

console.log(
  `name: ${employee.name}`,
  `salary: ${employee.salary} USD`,
  `eyes: ${employee.eyes}`,
  `mouth: ${employee.mouth}`,
  employee.sayHi()
);
```

В консоли мы увидим:

```bash
name: John salary: 3000 USD eyes: 2 mouth: 1
Hello, John
```

[Следующий урок](../proto/)
