# CSS

CSS (Cascading Style Sheets, каскадные таблицы стилей) — формальный язык для стилизации HTML-документа.

Рассмотрим простой пример:

```css
p {
  color: "red";
  font-size: 1rem;
}
```

Тут мы придали тегу `p` красный цвет и указали размер шрифта.

## CSS-правило

CSS-правило — это группа одного или нескольких свойств CSS, которые должны применяться к одному или нескольким элементам HTML.

CSS-правило состоит из элементов:

- селектор
- свойство
- значение

### Селектор

Селекторы CSS — это часть правил CSS, которые определяют, на какие элементы повлияет правило CSS.

Например:

```css
.first-selector {
  color: #6e4aff;
}
```

Тут мы присваиваем цвет элементам класса `.first-selector`

Есть разные типы селекторов. Подробнее о них можно почитать в отдельных статьях:

- [универсальный селектор](https://doka.guide/css/universal-selector/)
- [селекторы по тегу](https://doka.guide/css/tag-selector/)
- [селектор по классу](https://doka.guide/css/class-selector/)
- [селектор по идентификатору](https://doka.guide/css/id-selector/)
- [селектор по атрибуту](https://doka.guide/css/attribute-selector/)

<pre>
<code>
💡 Про СSS правила подробней <a href="https://doka.guide/css/css-rule/">тут</a>.
</code>
</pre>

## Как подключать CSS?

Есть разные способы добавить стили на страницу.

### Внешний файл со стилями

В этом способе css-стили прописываются в отдельном файле с расширением `css`. Для связывания страницы с файлом стилей используется тег <link> внутри <head>:

```html
<head>
  <link rel="stylesheet" href="main.css" />
</head>
```

Этот метод является приоритетным, так как позволяет не перегружать html-страницу дополнительным кодом.

### Встроенные стили

Можно описать CSS-свойства в самом HTML-документе внутри тега <style> в шапке страницы:

```html
<head>
  <style>
    h1 {
      color: tomato;
    }

    p {
      font-size: 24px;
    }
  </style>
</head>
```

### Inline-стили

Добавить стили внутри html-элемента можно при помощи атрибута `style`.

```html
<h1 style="сolor: yellow; margin: 10px 20px">Заголовок</h1>
<p style="text-align: right; font-size: 12px">Текст</p>
```

<pre>
<code>
💡 Про подключение стилей можно почитать тут  <a href="https://doka.guide/css/adding-styles/">тут</a>.
</code>
</pre>

Также следует почитать:

- Про блочную модель https://doka.guide/css/box-model/
- Гайд по flexbox https://doka.guide/css/flexbox-guide/
- Гайд по grid https://doka.guide/css/grid-guide/

[Следующий урок](../dom/)
