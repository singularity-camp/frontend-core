# Переменные

Мы ознакомились с JS и разными средами разработки, теперь перейдем к особенностям JS и его применении.

### Переменные

Мы можем объявить переменные для хранения данных с помощью ключевых слов `var`, `let` или `const`.

- `let` – это современный способ объявления.
- `var` – это устаревший способ объявления. Обычно мы вообще не используем его, но мы рассмотрим тонкие отличия от `let` в главе [Устаревшее ключевое слово "var"](https://learn.javascript.ru/var) на случай, если это всё-таки вам понадобится.
- `const` – похоже на `let`, но значение переменной не может изменяться.

Переменные должны быть названы таким образом, чтобы мы могли легко понять, что у них внутри.

```jsx
let age;
```

<pre>
<code>
💡 JavaScript чувствителен к регистру — `myVariable` отличается от переменной `myvariable`.
   Если у вас возникают проблемы в вашем коде, проверьте регистр!
</code>
</pre>

<pre>
<code>
💡 Для получения более подробной информации о разнице между var и let, смотрите:  <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let"> Разница между var и let. </a>
</code>
</pre>

После объявления переменной вы можете присвоить ей значение

```jsx
myVariable = "Bob";
```

Вы можете сделать обе эти операции на одной и той же строке, если вы захотите:

```jsx
var myVariable = "Bob";
```

Вы можете получить значение, просто вызвав переменную по имени:

```jsx
myVariable;
```

После установки значения переменной  вы можете изменить его позже:

```jsx
var myVariable = "Bob";
myVariable = "Steve";
```

[Tест](./test-1.md)