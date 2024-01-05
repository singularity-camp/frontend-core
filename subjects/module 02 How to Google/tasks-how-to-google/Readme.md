<h1>Tasks for module 2</h1>

<p>You can check the answers in Learning Management System.</p>

<h1>Task 1 none-type</h1>

<p>Прогуглите как исправить ошибку:</p>

<pre>
<code>TypeError: 'NoneType' object is not subscriptable
</code></pre>

<p>Исходный код программы Python:</p>

<pre>
<code class="language-python">numbers = [3, 2, 1]
output = numbers.sort()

print(output[0])</code></pre>

<p>Прислать исправленный код.</p>

<blockquote>
<p>P.S. В этом задании не важно, знаете ли вы Python. Главное, чтобы вы научились находить решение для проблем, даже тех, в которых вы не разбираетесь.</p>
</blockquote>





<h1>Task 2 site</h1>

<h3>Полезное</h3>

<ul>
	<li><a href="https://betterprogramming.pub/11-tricks-to-master-the-art-of-googling-as-a-software-developer-2e00b7568b7d" rel="nofollow noopener noreferrer">11 Tricks To Master the Art of Googling as a Software Developer</a></li>
</ul>

<h3>Задание</h3>

<p>1. Прогуглите следующую строку именно на сайте <code>docs.oracle.com</code></p>

<pre><code>you can use the isSymbolicLink(Path)
</code></pre>

<p>2. Пришлите URL страницы на которой встречается эта строка.</p>





<h1>Task 3 forgot</h1>

<h3>Полезное</h3>

<ul>
	<li><a href="https://betterprogramming.pub/11-tricks-to-master-the-art-of-googling-as-a-software-developer-2e00b7568b7d" rel="nofollow noopener noreferrer">11 Tricks To Master the Art of Googling as a Software Developer</a></li>
</ul>

<h3>Задание</h3>

<p>1. Диас пытается вспомнить цитату, о котором рассказывал друг. И по нему узнать название сериала. Но Диас помнит, что цитата содержала слова:</p>

<pre><code>дверь замок лениво воображение
</code></pre>

<p>2. Помогите вспомнить название сериала в котором была эта цитата. Введите название сериала.</p>






<h1>Task 4 investigate-code</h1>

<p>В этом задании, вам нужно найти репозиторий в GitHub по кусочку кода ниже.</p>

<p>Прислать ссылку на репозиторий, например <code>https://github.com/torvalds/linux</code></p>

<pre><code class="language-go">func NewApp(config *config.AppConfig) (*App, error) {
	app := &amp;App{
		closers:   []io.Closer{},
		Config:    config,
		ErrorChan: make(chan error),
	}
	var err error
	app.Log = log.NewLogger(config, "23432119147a4367abf7c0de2aa99a2d")
	app.Tr, err = i18n.NewTranslationSetFromConfig(app.Log, config.UserConfig.Gui.Language)
	if err != nil {
		return app, err
	}
	app.OSCommand = commands.NewOSCommand(app.Log, config)

	// here is the place to make use of the docker-compose.yml file in the current directory

	app.DockerCommand, err = commands.NewDockerCommand(app.Log, app.OSCommand, app.Tr, app.Config, app.ErrorChan)
	if err != nil {
		return app, err
	}
	app.closers = append(app.closers, app.DockerCommand)
	app.Gui, err = gui.NewGui(app.Log, app.DockerCommand, app.OSCommand, app.Tr, config, app.ErrorChan)
	if err != nil {
		return app, err
	}
	return app, nil
}</code></pre>