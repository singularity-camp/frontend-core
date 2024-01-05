# account

Воспользуйтесь вашем кодом из прошлого задания для класса `User`.

```jsx
class User {
  /// ваш код
}
```

Создайте новый класс `Account`, наследуещий `User`. Помимо параметров из конструктора `User`, конструктор `Account` должен принимать параметр `balance`. Также, создайте метод `getBalance`, возвращающий баланс аккаунта.

Что должно получиться:

```jsx
class Account extends User {
  constructor() {
    //...
  }
  getSalary() {
    //...
  }
}
let acc = new Account("Олег", "Морозов", 10000);
console.log(acc.getSalary()); // 10000
console.log(acc.getFullname()); // Олег Морозов
```

Cделайте проверку, чтобы `salary` принимал только числа - иначе выводите `Ошибка, salary может быть только числом` и не обновляйте значение `salary`.

<pre>
<code>
💡 Про <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/super">super</a>.
</code>
</pre>

Ответ:

```jsx
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullname() {
    return `${this.name + " " + this.surname}`;
  }
}

class Account extends User {
  constructor(name, surname, salary) {
    super(name, surname);
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}
```

[Следующая задача](../q-3/)
