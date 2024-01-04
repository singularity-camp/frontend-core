# getName

Есть класс `User`, конструктор которого принимает как параметр имя. Сделайте так, чтобы он принимал еще и фамилию `surname`, а также добавьте метод `getFullname`, который вернет полное имя в формате `name surname`.

```jsx
class User {
  constructor(name) {
    this.name = name;
  }
}
```

Что должно получится:

```jsx
let user = User("Oleg", "Matrosov");
console.log(user.getFullname()); //Oleg Matrosov
```

## Sample input 1:

"Oleg", "Matrosov"

## Sample output 1:

"Oleg Matrosov"

## Sample input 2:

"", "Matrosov"

## Sample output 2:

" Matrosov"

## Sample input 3:

"", ""

## Sample output 3:

" "
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
```

[Следующая задача](../q-2/)
