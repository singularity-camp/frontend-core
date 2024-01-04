# Инструменты веб-разработки

В этом уроке мы сделаем обзор современных веб-инструментов – какие типы инструментов доступны и где вы встретите их в жизненном цикле разработки веб-приложений.

### Современная экосистема

Написание софта для веб с течением времени стало более сложным. Хотя по-прежнему вполне разумно писать HTML, CSS и JavaScript «вручную», сейчас существует множество инструментов, которые разработчики могут использовать для ускорения процесса создания веб-сайта или приложения.

Их можно поделить на 3 категории:

- `Инструменты безопасности` - инструменты, полезные при разработке кода.
- `Трансформация` — инструменты, которые каким-то образом преобразуют код. Например - превращение промежуточного языка в JavaScript, понятный браузеру.
- `Пост-разработка` — инструменты, полезные после написания кода, такие как инструменты тестирования и развертывания.

## `Инструменты безопасности`

Инструменты, которые делают написанный код немного лучше.

Зачастую компании имеют какую-то политику разработки или заранее подготовленную конфигурацию среды разработки.
Это нужно чтобы все девелоперы использовали одни и те же процессы разработки.

Эти инструменты включают в себя все, что упрощает процесс разработки с точки зрения создания стабильного и надежного кода.

Несколько популярных примеров:

### Линтеры

Линтеры — это инструменты, которые проверяют ваш код и сообщают вам о любых присутствующих ошибках, их типах и строках кода, в которых они присутствуют. Часто линтеры можно настроить так, чтобы они не только сообщали об ошибках, но и сообщали о любых нарушениях руководства по стилю кода, которое может использовать ваша команда (например, код, который использует неправильное количество пробелов для отступа или использует литералы шаблонов, а не обычные строки).

- [eslint](https://eslint.org/) — это стандартный линтер JavaScript — легко настраиваемый инструмент для выявления потенциальных синтаксических ошибок и поощрения «best practice» во всем вашем коде. Некоторые компании и проекты также [поделились своими конфигами eslint](https://www.npmjs.com/search?q=keywords:eslintconfig).

Вы также можете найти инструменты анализа для других языков, такие как [csslint](http://csslint.net/).

### Форматировщики кода

Форматировщики кода чем-то похожи на линтеры, за исключением того, что вместо того, чтобы указывать на ошибки в вашем коде, они обычно стремятся убедиться, что ваш код отформатирован правильно, в соответствии с вашими правилами стиля, в идеале автоматически исправляя найденные ошибки.

[Prettier](https://prettier.io) — очень популярное средство форматирования кода, который мы будем использовать позже в этом модуле.

### Упаковщики

Это инструменты, которые подготавливают ваш код к продакшену.

[Parcel](https://ru.parceljs.org) — особенно умный инструмент, который помогает упаковывать HTML, CSS и файлы изображений, в удобные пакеты, которые затем можно развернуть, а также добавляет зависимости автоматически всякий раз, когда вы пытаетесь использовать их. Он даже может выполнять некоторые обязанности по преобразованию кода.

[Webpack](https://webpack.js.org/) - еще один очень популярный упаковщик, который выполняет аналогичные функции.

## `Трансформация`

Инструменты, которые помогают повысить совместимость кода с различными браузерами. Например, преобразование новейших функции CSS или JavaScript, которые могут еще не иметь встроенной поддержки в браузерах. Или перевод TypeScript в JS.

Пример:

Для JS:

- [Babel](https://babeljs.io/) - компилятор JavaScript, преобразовывает JS в код, совместимый со всеми современными браузерами.

Для CSS:

- [PostCSS](https://postcss.org/) - делает то же самое, что и Babel, но для CSS.

Возможность написать свой код на совершенно другом языке и преобразовать его в веб-совместимый язык, например:

- [Sass/SCSS](https://sass-lang.com/) - это расширение CSS позволяет вам использовать переменные, вложенные правила, миксины, функции и многие другие функции, некоторые из которых доступны в собственном CSS (например, переменные).
- [TypeScript](https://www.typescriptlang.org/) - это надмножество JavaScript, предлагающее множество дополнительных функций. Компилятор TypeScript преобразует код TypeScript в JavaScript при сборке для продакшена.

- Такие фреймворки, как [React](https://reactjs.org/), [Ember](https://emberjs.com/) и [Vue](https://vuejs.org/). О них мы поговорим позже.

## Пост-разработка

Инструменты пост-разработки гарантируют, что ваш код будет стабильно работать, будучи опубликованным в Интернете. Сюда входят процессы развертывания, среды тестирования, инструменты аудита и многое другое.

### Тестирование

Такие инструменты автоматически запускают тесты вашего кода, чтобы убедиться, что он корректен, прежде чем вы пойдете дальше (например, когда вы пытаетесь отправить изменения в репозиторий GitHub).

- [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/) и [Jasmine](https://jasmine.github.io/).
- Автоматизированные системы запуска тестов и уведомлений, включающие в себя [Travis CI](https://travis-ci.org/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/) и [другие](https://en.m.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

### Развертывание

Системы развертывания позволяют опубликовать как статические, так и динамические сайты. Обычно они работают вместе с системами тестирования.

[Netlify](https://www.netlify.com/) — один из самых популярных инструментов развертывания на сегодняшний день, но также некоторые используют [Vercel](https://vercel.com/) и [GitHub Pages](https://pages.github.com/).

<!-- # Пакетный менеджер npm

`npm` — это пакетный менеджер JavaScript. Аналоги в других ЯП / системах — `pip`, `apt`. Этот менеджер по умолчанию устанавливается вместе с NodeJS. -->

### Итого

На этом мы закончим введение в инструменты веб-разработки. Некоторые из них мы будем использовать на протяжении курса.