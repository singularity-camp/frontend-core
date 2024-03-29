# Redux

Redux — одна из самых популярных библиотек управления состоянием React на момент написания урока.

Во-первых, Redux позволяет управлять состоянием приложения в одном месте предсказуемо и отслеживаемо. Это упрощает понимание происходящих изменений. К сожалению, все эти преимущества сопряжены с определенными ограничениями и компромиссами.
Часто разработчики считают, что использование Redux добавляет некоторый шаблонный код, из-за чего приложение усложняется; однако это зависит исключительно от архитектурного решения.

Один из самых простых способов узнать, когда вам действительно нужно использовать Redux, это когда локальное управление состоянием начинает выглядеть беспорядочно.
По мере роста приложения использование состояния между компонентами становится сложнее.
В этот момент вы начнете искать способы сделать этот процесс беспроблемным.

## Зачем использовать Redux?

Использование Redux с React избавляет от необходимости поднимать состояние, упрощая отслеживание того, какое действие вызывает какое-либо изменение, тем самым упрощая приложение и облегчая его обслуживание.

### Redux делает состояние предсказуемым

В Redux состояние всегда предсказуемо. Если одно и то же состояние и действие перейдут к редюсеру, он получит тот же результат, потому что редюсеры — это чистые функции. Состояние также неизменно и никогда не изменяется.

### Сохранение состояния в локальном хранилище

Возможно сохранение некоторого состояния приложения в локальном хранилище и его восстановление после обновления.

### Отладка стала проще

Redux упрощает отладку приложения. Регистрируя действия и состояние, легко понять ошибки кода, сетевые ошибки и другие формы ошибок, которые могут возникнуть во время разработки.
Помимо ведения журнала, у него есть отличные [DevTools](https://github.com/zalmoxisus/redux-devtools-extension), которые позволяют перемещаться во времени, сохранять действия при обновлении страницы и т. д.

Redux сопровождается отличной [документацией](https://redux.js.org/) с туториалами:

- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)
- [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)
- [Redux Tutorial - Learn Redux from Scratch](https://youtu.be/poQXNp9ItL4)
