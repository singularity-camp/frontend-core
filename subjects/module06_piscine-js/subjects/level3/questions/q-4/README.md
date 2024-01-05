# checkDate

Создайте следующие функции:

- `isValid` - принимает 1 параметр - date, функция должна возвращать false, если дата неверная (не является датой). True если дата корректна
- `isAfter` - принимает 2 параметра - date и dateToCompare , функция получит две действительные даты и вернет true, если первая дата больше второй, false если наоборот
- `isBefore` - принимает 2 параметра - date и dateToCompare, функция получит две действительные даты и вернет true, если первая дата меньше второй даты, false если наоборот
- `isFuture` - принимает 1 параметр - date, вернет true, если дата, указанная в качестве параметра, действительна и больше текущей даты, false если наоборот
- `isPast` - принимает 1 параметр - date, вернет true, если дата, указанная в качестве параметра, действительна и меньше текущей даты, false если наоборот

<pre>
<code>
  Про класс  <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>
  Метод <a href="https://date-fns.org/v2.14.0/docs/isValid">isValid</a>
  Метод <a href="https://date-fns.org/v2.14.0/docs/isBefore">isBefore</a>
  Метод <a href="https://date-fns.org/v2.14.0/docs/isFuture">isFuture</a>
  Метод <a href="https://date-fns.org/v2.14.0/docs/isPast">isPast</a>
</code>
</pre>

Пример:

```jsx
let date = new Date();
let date2 = new Date("");

isValid(date); //true
isValid(date2); //false

isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11)); //false
isAfter(new Date(2000, 6, 10), new Date(1987, 1, 11)); //true

isFuture(new Date(2030, 11, 31)); // true
isPast(new Date(2010, 11, 31)); // true
```

### isValid

## Sample input 1:

new Date()

## Sample output 1:

true

### isAfter

## Sample input 1:

new Date(2000, 6, 10), new Date(1987, 1, 11)

## Sample output 1:

true

### isBefore

## Sample input 1:

new Date(1989, 6, 10), new Date(1987, 1, 11)

## Sample output 1:

false

### isFuture

## Sample input 1:

new Date(2077, 11, 31)

## Sample output 1:

true

### isPast

## Sample input 1:

new Date(2010, 11, 31)

## Sample output 1:

true

Ответ:

```jsx
function isValid(date) {
  if (+date === NaN) {
    return false;
  }
  if (typeof date === "string") {
    return false;
  }
  if (date.toString() === "Invalid Date") {
    return false;
  }
  if (date.toString() === "NaN") {
    return false;
  }
  return true;
}

const isAfter = (date1, date2) => date1 - date2 > 0;
const isBefore = (date1, date2) => date1 - date2 < 0;
const isFuture = (date) => isValid(date) && date - Date.now() > 0;
const isPast = (date) => isValid(date) && date - Date.now() < 0;
```

[Следующая задача](../q-5/)
