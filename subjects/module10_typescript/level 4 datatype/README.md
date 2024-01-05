# Типы данных

Тип переменной можно указывать через двоеточие:

```tsx
let a: number = 1;

function makeJob(value: number) {
  /**/
}

function calcSum(a: number, b: number): number {
  /**/
}

makeJob("hello"); // приведет к ошибке:
// Argument of type 'string' is not assignable to parameter of type 'number'
```

TypeScript это надстройка над JS, поэтому в нем присутствуют те же типы данных что и в JavaScript.

## Посмотрим на возможности TS

### Объединенные типы

Переменная может иметь несколько типов:

```tsx
let age = number | string;
age = 26;
age = "26";
```

### Динамичный тип

`any` указывает на любой тип:

```tsx
let age: any = "100";
age = 100;
age = {
  years: 100,
  months: 2,
};
```

### Литералы

Можно указывать определенные значения (числа или строки) как типы:

```tsx
// Union type with a literal type in each position
let favouriteColor: "red" | "blue" | "green" | "yellow";

favouriteColor = "blue";
favouriteColor = "crimson"; // ERROR: Type '"crimson"' is not assignable to type '"red" | "blue" | "green" | "yellow"'.
```

### Объекты

Свойства объектов и значения должны иметь определенные типы:

```tsx
// Declare a variable called person with a specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
  name: "Danny",
  location: "UK",
  isProgrammer: true,
};

person.isProgrammer = "Yes"; // ERROR: should be a boolean

person = {
  name: "John",
  location: "US",
};
// ERROR: missing the isProgrammer property
```

### Массивы

Можно указать тип значений в массиве:

```tsx
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Функции

Можно указать тип параметров и тип возвращения функции:

```tsx
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
  return "The circumference is " + Math.PI * diam;
}

console.log(circle(10)); // The circumference is 31.41592653589793
```

### Создание своих типов

Можно создавать имя для уже существyющих типов:

```tsx
type StringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person1: PersonObject = {
  name: "John",
  id: 1,
};

const person2: PersonObject = {
  name: "Delia",
  id: "2",
};

const sayHello = (person: PersonObject) => {
  return "Hi " + person.name;
};

const sayGoodbye = (person: PersonObject) => {
  return "Seeya " + person.name;
};
```

### Интерфейсы

Интерфейсы описывают объекты:

```tsx
interface Person {
  name: string;
  age: number;
}

function sayHi(person: Person) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: "John",
  age: 48,
}); // Hi John
```

### Дженерики

Дженерики позволяют динамично указывать тип:

```tsx
// <T> is just the convention - e.g. we could use <X> or <A>
const addID = <T,>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person1 = addID({ name: "John", age: 40 });
let person2 = addID("Sally"); // Pass in a string - no problem

console.log(person1.id); // 271
console.log(person1.name); // John

console.log(person2.id);
console.log(person2.name); // ERROR: Property 'name' does not exist on type '"Sally" & { id: number; }'.
```

### Перечисления

Сет связанных значений:

```jsx
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType.BOOK); // 0
console.log(ResourceType.AUTHOR); // 1

// To start from 1
enum ResourceType {
  BOOK = 1,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType.BOOK); // 1
console.log(ResourceType.AUTHOR); // 2
```

Полезные ссылки:

- [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
