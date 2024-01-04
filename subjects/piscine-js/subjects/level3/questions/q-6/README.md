# dayOfTheYear

Создайте функцию `dayOfTheYear`, которая принимает дату и возвращает количество дней, прошедших с первого дня этого года до этой даты.

```jsx
console.log(dayOfTheYear(new Date(2022, 0, 1))); // 1
console.log(dayOfTheYear(new Date(2022, 1, 1))); // 32
```

## Sample input 1:

new Date(2022, 0, 1)

## Sample output 1:

1

## Sample input 2:

new Date(2022, 1, 1)

## Sample output 2:

32
Ответ:

```jsx
function dayOfTheYear(date) {
  let days = 1;
  const firstDate = new Date(date.getFullYear() + "-01-01");
  while (firstDate < date) {
    firstDate.setDate(firstDate.getDate() + 1);
    days++;
  }
  return days;
}
```

[Следующая задача](../q-7/)
