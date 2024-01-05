<h1>Linux cmd lines</h1>

<h1>first-touch</h1>

<h3>Полезное</h3>

<ul>
	<li><a href="https://linuxize.com/post/create-a-file-in-linux/" rel="nofollow noopener noreferrer">Статья: создание файлов в linux</a></li>
	<li>Команда <code>touch</code></li>
	<li>Команда <code>echo</code></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>В корневой директории <code>/home/box</code> создать файл с названием <code>jusan</code> и с текстом внутри <code>singularity</code>.</li>
</ol>

<p>Пример для проверки:</p>

<pre><code class="language-bash">$ cat jusan
singularity</code></pre>

<h1>second-touch</h1>

<h3>Полезное</h3>

<ul>
	<li><a href="https://younglinux.info/bash/chmod" rel="nofollow noopener noreferrer">Изменение прав с помощью chmod</a></li>
	<li>Команда <code>chmod</code></li>
	<li>Команда <code>ls</code></li>
	<li><a href="https://linuxize.com/post/understanding-linux-file-permissions/" rel="nofollow noopener noreferrer">Understanding Linux File Permissions</a></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Cоздать файл с названием <code>second</code> и с текстом внутри <code>touch</code>.</li>
	<li>Установить созданному файлу права <code>rw--wx-w-</code>.</li>
</ol>

<p>Пример проверки прав:</p>

<pre><code class="language-bash">$ ls -l
-rw--wx-w-  1 root  staff    6 Mar  7 16:23 second
</code></pre>

<h1>touch-art</h1>

<h3>Полезное</h3>

<ul>
	<li>Команда для создания ссылок <code>ln</code></li>
	<li>Команда для создания папок <code>mkdir</code></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>В корневой директории создайте папку <code>touch-art</code> и создайте папки и файлы в <code>touch-art</code>, чтобы права, названия файлов, ссылок и папок был таким же как по примеру ниже.</li>
</ol>

<p>Пример проверки прав:</p>

<pre><code class="language-bash">$ cd touch-art
$ ls -lF
total 4
-rwxrwxrwx. 1 box box    0 Mar 28 08:22 a*
lrwxrwxrwx. 1 box box    1 Mar 28 08:22 b -&gt; a*
-rw-----wx. 1 box box    0 Mar 28 08:22 c*
drw--w--wx. 2 box box 4096 Mar 28 08:22 d/
-rw--w--wx. 1 box box    0 Mar 28 08:22 e*
-rw-----wx. 1 box box    0 Mar 28 08:22 f*
-rwx---rwx. 1 box box    0 Mar 28 08:22 g*
-rwxrwxrwx. 1 box box    0 Mar 28 08:22 h*</code></pre>

<h1>ultra-ls</h1>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который использует команду <code>ls</code>:

	<ul>
		<li>Не показывать директории <code>.</code> и <code>..</code>;</li>
		<li>Вывести <code>/</code> символ <em>slash</em> после название папки;</li>
		<li>Отсортировать по <em>time modified</em> по убыванию;</li>
	</ul>
	</li>
</ol>

<h1>project-structure</h1>

<h3>Задание</h3>

<ol>
	<li>Cоздайте папку <code>project</code> в корневой директории. В ней создайте такую структуру файлов и папок как показано ниже:</li>
</ol>

<pre><code>.
├── README.md
├── usecase
│   └── registration
│       ├── registration.go
│       └── registration_test.go
└── pkg
    └── util
        ├── helper.go
        ├── util_test.go
        └── util.go

</code></pre>

<h1>missing-line</h1>

<h3>Задание</h3>

<ol>
	<li>В корневой директории <code>/home/box</code> создать папку <code>sandbox</code> и в ней создать файл <code>jusan</code>.</li>
	<li>В файл <code>jusan</code> записать слово <code>singularity</code> без новой линии в конце.</li>
</ol>

<p>Пример для проверки:</p>

<pre><code class="language-bash">box@dec74273716e: ~ $ cat jusan | wc -l
     0</code></pre>


<h1>where-is</h1>

<h3>Полезное</h3>

<ul>
	<li>Команда <code>find</code> для поиска файлов</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который будет искать в текущей директории и в ее поддиректориях файлы по следующим условиям:
	<ul>
		<li>Начинается на символ <code>j</code>, или</li>
		<li>Заканчивается на символ <code>n</code>, или</li>
		<li>Начинается на <code>n</code> и заканчивается на <code>j]</code></li>
	</ul>
	</li>
</ol>

<p>Пример вывода:</p>

<pre><code>./ton
./jack
./nokoj]
</code></pre>


<h1>where-is-md</h1>

<h3>Задание</h3>

<p>1. Написать скрипт, который будет искать в текущей директории и в ее поддиректориях файлы по следующим условиям:</p>

<ul>
	<li>Заканчивается на <code>.md</code></li>
</ul>

<h1>count-files</h1>

<h3>Полезное</h3>

<ul>
	<li>Команда для подсчета <code>wc</code></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать команду, которая посчитает количество файлов в текущей директории и в ее поддиректориях.</li>
</ol>

<h1>count-dirs</h1>

<h3>Задание</h3>

<ol>
	<li>Написать команду, которая посчитает количество папок в текущей директории и в ее поддиректориях.</li>
</ol>   


<h1>who-is-author</h1>

<h3>Полезное</h3>

<ul>
	<li><code>ls</code></li>
	<li><code>awk</code></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать команду, которая покажет все содержимое в текущей директории в формате <code>user filename</code>. Не показывать в выводе директории <code>.</code> и <code>..</code>.</li>
</ol>

<p>Пример вывода:</p>

<pre>
<code>root avatar.png
amurat solution.txt
jchris song.mp3
</code></pre>


<h1>echo-cat</h1>

<h3>Полезные команды</h3>

<ul>
	<li><code>cat</code></li>
</ul>

<p>В директории текущей директории есть файл <code>dont-open.txt</code>.</p>

<h3>Задание</h3>

<ol>
	<li>Создайте в папку <code>/sandbox</code>  и в ней файл c dont-open.txt который содержит текст из  <code>dont-open.txt</code>.</li>
</ol>

<h1>rm-test</h1>

<h3>Полезное</h3>

<ul>
	<li>Команда <code>rm</code> для удаления</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>В директории <code>/home/box/project</code> удалите все файлы, которые заканчиваются на <code>_test.py</code>.</li>
</ol>

<h1>last-5</h1>

<h3>Подсказка</h3>

<ul>
	<li>Команда <code>tail</code> для показа последних строк в файле</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который покажет последние 5 линии из файла <code>./access.log</code>.</li>
</ol>

<p>Файл <code>access.log</code> для примера:</p>

<pre><code>80.91.33.133 - - [17/May/2015:08:05:50 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
173.203.139.108 - - [17/May/2015:08:05:03 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:35 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
5.83.131.103 - - [17/May/2015:08:05:51 +0000] "GET /downloads/product_1 HTTP/1.1" 200 490 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
80.91.33.133 - - [17/May/2015:08:05:59 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
200.6.73.40 - - [17/May/2015:08:05:42 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:48 +0000] "GET /downloads/product_1 HTTP/1.1" 404 324 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
</code></pre>

<h1>first-5</h1>

<h3>Подсказка</h3>

<ul>
	<li>Команда <code>head</code> для показа первых строк в файле</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который покажет первые 5 линии из файла <code>./access.log</code>.</li>
</ol>

<p>Файл <code>access.log</code> для примера:</p>

<pre><code>80.91.33.133 - - [17/May/2015:08:05:50 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
173.203.139.108 - - [17/May/2015:08:05:03 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:35 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
5.83.131.103 - - [17/May/2015:08:05:51 +0000] "GET /downloads/product_1 HTTP/1.1" 200 490 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
80.91.33.133 - - [17/May/2015:08:05:59 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
200.6.73.40 - - [17/May/2015:08:05:42 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:48 +0000] "GET /downloads/product_1 HTTP/1.1" 404 324 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
</code></pre>

<h1>replace-inplace</h1>

<h3>Полезное</h3>

<ul>
	<li><code>sed</code></li>
	<li><code>tr</code></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который заменит в файле <code>access.log</code> текст <code>jusan.kz</code> на <code>example.com</code> глобально.</li>
</ol>

<p>Файл <code>access.log</code> для примера:</p>

<pre><code>80.91.33.133 - - [17/May/2015:08:05:50 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
173.203.139.108 - - [17/May/2015:08:05:03 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:35 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
5.83.131.103 - - [17/May/2015:08:05:51 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 200 490 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
80.91.33.133 - - [17/May/2015:08:05:59 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
200.6.73.40 - - [17/May/2015:08:05:42 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:48 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 404 324 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
</code></pre>

<h1>grep</h1>

<h3>Полезное</h3>

<ul>
	<li>Команда <code>grep</code> для поиска в текста</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который покажет в файле <code>./access.log</code> только линии содержащие <code>jusan.kz</code>.</li>
</ol>

<p>Файл <code>access.log</code> для примера:</p>

<pre><code>180.179.174.219 - - [17/May/2015:18:05:22 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 339 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
152.90.220.18 - - [17/May/2015:18:05:18 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 336 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
10.16.62.10 - - [17/May/2015:18:05:32 +0000] "GET http://example.com/downloads/product_1 HTTP/1.1" 404 318 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
180.179.174.219 - - [17/May/2015:18:05:52 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 336 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
62.210.152.199 - - [17/May/2015:18:05:38 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 200 2592 "-" "urlgrabber/3.9.1 yum/3.2.29"
204.77.169.137 - - [17/May/2015:18:05:23 +0000] "GET https://jusan.kz/downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.2)"
94.23.21.169 - - [17/May/2015:18:05:07 +0000] "GET http://example.com/downloads/product_1 HTTP/1.1" 404 328 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
85.214.47.178 - - [17/May/2015:18:05:08 +0000] "GET http://example.com/downloads/product_1 HTTP/1.1" 404 331 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
176.58.26.49 - - [17/May/2015:18:05:37 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 200 2575 "-" "urlgrabber/3.9.1 yum/3.2.29"
54.194.93.59 - - [17/May/2015:18:05:33 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 333 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
204.77.169.137 - - [17/May/2015:18:05:09 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 319 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.2)"
54.183.135.30 - - [17/May/2015:18:05:50 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
204.77.169.137 - - [17/May/2015:18:05:46 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 319 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.2)"
202.78.200.137 - - [17/May/2015:18:05:12 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 333 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
194.76.107.17 - - [17/May/2015:18:05:53 +0000] "HEAD /downloads/product_2 HTTP/1.1" 200 0 "-" "Wget/1.13.4 (linux-gnu)"
212.83.167.232 - - [17/May/2015:18:05:38 +0000] "GET http://example.com/downloads/product_1 HTTP/1.1" 404 341 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
</code></pre>

<h1>grep-exclude</h1>

<h3>Полезное</h3>

<ul>
	<li><code>ls</code></li>
	<li><code>grep</code></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который:
	<ul>
		<li>перечислит содержимое в текущей директории, не включая <code>.</code> и <code>..</code>;</li>
		<li>откинет из перечисленного папку <code>.git</code>.</li>
	</ul>
	</li>
</ol>

<h1>count-grep</h1>

<h3>Полезное</h3>

<ul>
	<li>Команда <code>wc</code> для подсчета</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который покажет в файле <code>./access.log</code> количество линий, содержащих <code>jusan.kz</code>.</li>
</ol>

<p>Файл <code>access.log</code> для примера:</p>

<pre><code>180.179.174.219 - - [17/May/2015:18:05:22 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 339 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
152.90.220.18 - - [17/May/2015:18:05:18 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 336 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
10.16.62.10 - - [17/May/2015:18:05:32 +0000] "GET http://example.com/downloads/product_1 HTTP/1.1" 404 318 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
180.179.174.219 - - [17/May/2015:18:05:52 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 336 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
62.210.152.199 - - [17/May/2015:18:05:38 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 200 2592 "-" "urlgrabber/3.9.1 yum/3.2.29"
204.77.169.137 - - [17/May/2015:18:05:23 +0000] "GET https://jusan.kz/downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.2)"
94.23.21.169 - - [17/May/2015:18:05:07 +0000] "GET http://example.com/downloads/product_1 HTTP/1.1" 404 328 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
85.214.47.178 - - [17/May/2015:18:05:08 +0000] "GET http://example.com/downloads/product_1 HTTP/1.1" 404 331 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
176.58.26.49 - - [17/May/2015:18:05:37 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 200 2575 "-" "urlgrabber/3.9.1 yum/3.2.29"
54.194.93.59 - - [17/May/2015:18:05:33 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 333 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
204.77.169.137 - - [17/May/2015:18:05:09 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 319 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.2)"
54.183.135.30 - - [17/May/2015:18:05:50 +0000] "GET https://jusan.kz/downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
204.77.169.137 - - [17/May/2015:18:05:46 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 319 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.2)"
202.78.200.137 - - [17/May/2015:18:05:12 +0000] "GET http://example.com/downloads/product_2 HTTP/1.1" 404 333 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
194.76.107.17 - - [17/May/2015:18:05:53 +0000] "HEAD /downloads/product_2 HTTP/1.1" 200 0 "-" "Wget/1.13.4 (linux-gnu)"
212.83.167.232 - - [17/May/2015:18:05:38 +0000] "GET http://example.com/downloads/product_1 HTTP/1.1" 404 341 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
</code></pre>

<h1>ultra-cat</h1>

<h3>Полезное</h3>

<ul>
	<li><code>cat EOF</code></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать скрипт, который запишет в файл <code>output.txt</code> следующие линии:</li>
</ol>

<pre><code>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque purus,
rutrum vel purus eget, mattis aliquam tortor. Morbi rhoncus metus faucibus
tortor blandit, in luctus leo ultrices. Donec finibus vulputate ex, vel
feugiat erat. Ut ultrices felis sit amet urna tincidunt tempor. Suspendisse
vel eleifend augue. Nam porta leo urna. Mauris augue mi, lacinia in consectetur
a, accumsan nec nibh. Mauris ornare pulvinar lorem, sit amet venenatis enim
feugiat non. Praesent aliquet nec lorem ac interdum. Mauris quis finibus orci,
at tempor mi.
</code></pre>

<h1>stepik-join-date</h1>

<h3>Полезные команды</h3>

<ul>
	<li>Команда для выполнения HTTP запросов <code>curl</code></li>
	<li>Команда для парсинга JSON <code>jq</code></li>
</ul>

<p>У <em>stepik.org</em> есть публичный API. Через него можно получать общедоступную информацию по платформе.</p>

<p>Например, такой запрос вернет пользователя под id <code>1</code>, т.е. самого первого пользователя на <em>stepik.org</em>.</p>

<pre>curl -s https://stepik.org:443/api/users/1</pre>

<pre><code>{"meta": {"page": 1, "has_next": false, "has_previous": false}, "users": [{"id": 1, "profile": 1, "is_private": false, "is_active": true, "is_guest": false, "is_organization": false, "short_bio": "", "details": "", "first_name": "Andrey", "last_name": "Balandin", "full_name": "Andrey Balandin", "alias": null, "avatar": "https://stepik.org/users/1/59109f498310fb45ff2ae4642cd06f96fa7382dc/avatar.svg", "cover": null, "city": 498817, "knowledge": 167, "knowledge_rank": 401819, "reputation": 2, "reputation_rank": 111316, "join_date": "2013-07-02T10:41:22Z", "social_profiles": [], "solved_steps_count": 164, "created_courses_count": 0, "created_lessons_count": 2, "issued_certificates_count": 0, "followers_count": 4}]}
</code></pre>

<h3>Задание</h3>

<ol>
	<li>В корневой директории <code>/home/box</code> создайте файл <code>stepik.sh</code></li>
	<li>Напишите скрипт в <code>stepik.sh</code>, который выведет <code>join_date</code> вашего профиля.</li>
	<li>Дайте права 755 на <code>stepik.sh</code>.</li>
</ol>

<p>Например, для пользователя под id <code>1</code> ответ:</p>

<pre><code>2013-07-02T10:41:22Z
</code></pre>



<h1>Настройка сервера</h1>

<h1>apt-nginx</h1>

<p>В этом уроке начнем знакомиться с <code>apt</code>.</p>

<h3>Полезное</h3>

<ul>
	<li><a href="https://itsfoss.com/apt-get-linux-guide/" rel="nofollow noopener noreferrer">apt для новичков</a></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Обновите (англ. "update") базу пакетов.</li>
	<li>Обновите (англ. "upgrade") установленные пакеты.</li>
	<li>Установите (англ. "install") пакет nginx.</li>
	<li>Напишите команды по порядку </li>
</ol>


<h1>apt-delete-nginx</h1>

<p>В этом уроке полностью удалим nginx из сервера.</p>

<p>На сервере заранее установлен nginx.</p>

<h3>Полезные ссылки</h3>

<ul>
	<li><a href="https://itsfoss.com/apt-get-linux-guide/" rel="nofollow noopener noreferrer">apt для новичков</a></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Удалить (англ. "delete") полностью nginx вместе с конфигурационными файлами.</li>
</ol>

<h1>apt-gcc</h1>

<p>В этом уроке разберем подкоманду <code>show</code>.</p>

<h3>Полезное</h3>

<ul>
	<li><code>apt show</code></li>
	<li><a href="https://itsfoss.com/apt-get-linux-guide/" rel="nofollow noopener noreferrer">apt для новичков</a></li>
</ul>

<h3>Задание</h3>

<ul>
	<li>Обновите (англ. "update") базу пакетов.</li>
	<li>Отправьте значение поля <code>Bugs</code> от информации по пакету <code>gcc</code>.</li>
</ul>




<h1>ssh-key</h1>

<p>В этом уроке разберем как работать с удаленным сервером по <code>ssh</code>.</p>

<p>Для выполнения задачи нам понадобится запустить локальный VPS сервер. На компьютере должен быть установлен <code>docker</code>.</p>

<p>В терминале выполним следующую команду для запуска VPS:</p>

<pre><code class="language-bash">PORT=22 &amp;&amp; docker run -d --rm --name local-vps-$PORT -p $PORT:$PORT atlekbai/local-vps $PORT</code></pre>

<p>Для подключения:</p>

<pre><code class="language-bash">ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no root@127.0.0.1 -p 22</code></pre>

<p>Пароль: <code>password</code></p>

<h3>Полезные ссылки</h3>

<ul>
	<li><a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-1804" rel="nofollow noopener noreferrer">Установка ssh ключей</a></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Сгенерируйте связку ключей, если нет.</li>
	<li>Установите ключи на VPS сервере, чтобы подключаться без пароля.</li>
	<li>Выполненные команды отправьте в поле ввода.</li>
</ol>

<h1>Пользователи и группы</h1>

<h1>useradd-junior</h1>

<p>Каждый пользователь Linux должен иметь отдельную учетную запись. В учетной записи можно безопасно хранить файлы, настраивать окружение и конфигурации.</p>

<p>Группы &mdash; это способ назначения прав в системе, которые могут быть определены для нескольких пользователей одновременно.</p>

<p>Самый простой способ создания нового пользователя &mdash; команда <code>useradd</code>.</p>

<p>Единственным обязательным параметром является логин пользователя, но можно включить в него дополнительную информацию. Для данного урока понадобится следующий флаг.</p>

<ul>
	<li><strong>-c</strong> <em>&quot;комментарий&quot;</em> &mdash; комментарий к новой учетной записи пользователя. Обычно это полное имя пользователя.</li>
</ul>

<h3>Полезное</h3>

<ul>
	<li>Введите команду <code>useradd</code> в терминале для получения списка всех флагов</li>
	<li>Используйте <code>passwd</code> для установки пароля</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Создать учетную запись с именем пользователя <code>sara</code> и полным именем <code>Sara Smith</code>.</li>
	<li>Установить пароль пользователю <code>sara</code> - <code>smith95</code>.</li>
</ol>





<h1>useradd-middle</h1>

<h3>Полезное</h3>

<ul>
	<li>Команда <code>su</code> для того, чтобы зайти как другой пользователь. Обычно используют с флагом <code>-l</code>.</li>
	<li><a href="https://www.tecmint.com/difference-between-su-and-su-commands-in-linux/" rel="nofollow noopener noreferrer">Про команду "su"</a></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Создать учетную запись с именем пользователя <code>murat</code> и полным именем <code>Murat Serik</code>.</li>
	<li>Установите оболочку по умолчанию (англ. "default shell", см. <code>флаг -s</code>) - <code>/bin/sh</code>.</li>
	<li>Установите пользователю домашний каталог (см. <code>флаг -m</code>).</li>
	<li>Установить основную группу (см. <code>флаг -g</code>) <code>bin</code>.</li>
	<li>Установить пароль пользователю <code>murat</code> - <code>H3l70!vv0r7d</code>.</li>
	<li>Зайдите в систему как пользователь <code>murat</code> и создайте в домашнем каталоге файл <code>config.txt</code> с содержимым:
	<pre><code>success: true</code></pre>
	</li>
</ol>

<h1>useradd-senior</h1>

<h3>Задание</h3>

<ol>
	<li>Создать учетную запись с именем пользователя <code>mark</code> и полным именем <code>Mark Twain</code>.</li>
	<li>Установите оболочку по умолчанию (англ. "default shell", см. <code>флаг -s</code>) - <code>/bin/bash</code>.</li>
	<li>Установите пользователю домашний каталог (см. <code>флаги -m,-d</code>) - <code>/home/marktwain</code>.</li>
	<li>Установить основную группу, которой нет в системе (см. <code>флаг --user-group</code>) <code>mark</code>.</li>
	<li>Установить уникальный идентификатор пользователя (прим. "user ID, UID", см. <code>флаг -u</code>) - 567</li>
	<li>Установить дату устаревания учетной записи (англ. "expiration date", см. <code>флаг -e</code>) - 30.11.2035</li>
	<li>Указать каталог с шаблоном (прим. "skeleton directory", см. <code>флаг -k</code>) - <code>/proc</code></li>
	<li>Добавить в группы (см. <code>флаг -G</code>) <code>bin</code> и <code>staff</code>.</li>
	<li>Установить пароль пользователю <code>mark</code> - <code>S@wYer</code>.</li>
	<li>Зайдите в систему как пользователь <code>mark</code> и создайте в домашнем каталоге файл <code>config.txt</code> с содержимым:
	<pre><code>success: true</code></pre>
	</li>
</ol>




<h1>useradd-service</h1>

<p>Помимо обычных пользователей в системе Linux, могут быть системные пользователи (англ. "system account"). Невозможно залогиниться за системного пользователя - у него попросту нет терминала и домашней директории.</p>

<p>Системные пользователи используются программами. Программа запускается от имени системного пользователя и может выполнять такие же действия как обычный пользователь.</p>

<p>Суперпользователь может ограничить системному пользователю:</p>

<ul>
	<li>область видимости - к каким файлам и директория есть доступ;</li>
	<li>разрешенные команды - какие команды пользователь может запускать, а какие нет.</li>
</ul>

<p>Системный пользователь создавался для безопасности системы. Если кто-то взломает программу, то сможет иметь только ограниченный доступ.</p>

<h3>Задание</h3>

<ol>
	<li>Создать учетную запись с именем пользователя <code>ghost</code> и полным именем <code>Ghost Background Service</code>.</li>
	<li>Указать как системный аккаунт (англ. "system account", см. <code>флаг --system</code>).</li>
	<li>Не создавать домашний каталог пользователю</li>
	<li>Установить основную группу, которой нет в системе (см. <code>флаг --user-group</code>) <code>ghost</code>.</li>
	<li>Установите оболочку по умолчанию (англ. "default shell", см. <code>флаг -s</code>) - <code>/usr/sbin/nologin</code>.</li>
</ol>




<h1>usermod</h1>

<p>Команда <code>usermod</code> проста и позволяет изменять параметры учетной записи. Для нее доступны многие параметры из тех, что используются с <code>useradd</code>.</p>

<h3>Полезное</h3>

<ul>
	<li>Введите команду <code>usermod</code> в терминале для получения списка всех флагов</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Измените учетную запись с именем пользователя <code>mark</code> на логин - <code>marktwain</code></li>
	<li>Установить другой пароль пользователю - <code>marktwain1835</code>.</li>
</ol>



<h1>usermod-ultra</h1>

<p>Порой в системе Linux может понадобиться заблокироваль пользователя.</p>

<p>Блокировка учетной записи не дает пользователю возможности залогиниться в систему. Однако позже его можно восстановить.</p>

<h3>Задание</h3>

<ol>
	<li>Измените учетную запись с именем пользователя <code>serik</code> на логин - <code>serikbek</code>.</li>
	<li>Изменить полное имя (прим. "комментарии") на <code>Serik</code>.</li>
	<li>Дополнительно добавить в группы - <code>daemon</code>, <code>bin</code>, <code>mail</code>.</li>
	<li>Заблокировать пользователя.</li>
</ol>



<h1>userdel</h1>

<p>Команда <code>userdel</code> удаляет пользователей.</p>

<p>Если запускать с флагом <code>userdel -r</code>, то удалит еще домашний каталог пользователя.</p>

<h3>Полезное</h3>

<ul>
	<li>Введите команду <code>userdel</code> в терминале для получения списка всех флагов</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Удалите учетную запись с именем пользователя <code>john</code> вместе с домашним каталогом.</li>
</ol>



<h1>newgrp</h1>

<ul>
	<li>Когда пользователь <code>john</code> создает файл или папку, по умолчанию они принадлежат основной группе <code>john</code>.</li>
	<li>Пользователь <code>john</code> может принадлежать к нескольким дополнительным группам или не принадлежать ни к одной. Если бы пользователь <code>john</code> был членом групп <code>finance</code> и <code>developer</code>, запись об этом отображалась бы в файле <code>/etc/group</code> следующим образом:</li>
</ul>

<pre><code>finance:x:908:sara,mike,murat,john
developer:x:909:serik,adil,john
</code></pre>

<ul>
	<li>
	<p>Пользователь не может добавить себя в дополнительную группу, как и включить другого пользователя в свою. Назначать пользователей в группы может только обладающий правами суперпользователя.</p>
	</li>
	<li>
	<p>Любой файл, назначенный группе <code>finance</code> или <code>developer</code>, доступен пользователю <code>john</code> с правами, установленными для группы. Если пользователь хочет создать файл с назначенными ему группами <code>finance</code> или <code>developer</code>, то он должен использовать команду <code>newgrp</code>. В этом примере <code>john</code> задействует команду <code>newgrp</code>, чтобы группа <code>finance</code> временно стала основной, и создает файл:</p>
	</li>
</ul>

<pre><code class="language-bash">$ touch file1
$ ls -l file*
­rw­rw­r­­. 1 john john  0 Jan 18 22:22 file1
$ newgrp finance
$ touch file2
$ ls -l file*
­rw­rw­r­­. 1 john john  0 Jan 18 22:22 file1
­rw­rw­r­­. 1 john finance 0 Jan 18 22:23 file2
$ exit</code></pre>

<h3>Задание</h3>

<ol>
	<li>Создать учетную запись <code>john</code> c полным именем <code>John Cena</code>, с домашней директорией <code>/home/john</code> и паролем <code>myTimeIsNoW!</code>.</li>
	<li>Установить основную группу (см. <code>флаг --user-group</code>) <code>john</code>.</li>
	<li>Добавить в группу (см. <code>флаг -G</code>) <code>daemon</code>.</li>
	<li>Зайдите в систему как пользователь <code>john</code> и временно назначьте группу <code>daemon</code> как основную.</li>
	<li>Создайте в домашнем каталоге файл <code>config-daemon.txt</code> с содержимым <code>success: true</code>.</li>
	<li>Временно назначьте группу <code>john</code> как основную.</li>
	<li>Создайте в домашнем каталоге файл <code>config-john.txt</code> с содержимым <code>success: true</code>.</li>
</ol>


<h1>groupadd</h1>

<p>Суперпользователь может создавать группы из командной строки с помощью команды <code>groupadd</code>.</p>

<h3>Полезное</h3>

<ul>
	<li>Введите команду <code>groupadd</code> в терминале для получения списка всех флагов</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Создайте группу <code>kings</code>.</li>
	<li>Создать учетную запись <code>john</code> c полным именем <code>John Cena</code>, с домашней директорией <code>/home/john</code> и паролем <code>myTimeIsNoW!</code>.</li>
	<li>Установить основную группу (см. <code>флаг --user-group</code>) <code>john</code>.</li>
	<li>Добавьте <code>john</code> в дополнительную группу <code>kings</code>.</li>
	<li>Зайдите в систему как пользователь <code>john</code>.</li>
	<li>Создайте в домашнем каталоге файл <code>config-john.txt</code> с содержимым <code>success: true</code>.</li>
	<li>Временно назначьте группу <code>kings</code> как основную.</li>
	<li>Создайте в домашнем каталоге файл <code>config-kings.txt</code> с содержимым <code>success: true</code>.</li>
</ol>



<h1>groupmod</h1>

<p>Суперпользователь может изменять группы из командной строки с помощью команды <code>groupmod</code>.</p>

<h3>Полезное</h3>

<ul>
	<li>Введите команду <code>groupmod</code> в терминале для получения списка всех флагов</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Измените название группы <code>kings</code> на <code>kingdom</code>.</li>
</ol>


<h1>Процессы</h1>

<h1>ps-all</h1>

<p>Linux - многозадачная операционная система. Многозадачность означает, что много программ могут выполняться одновременно.</p>

<p>Процесс — это запущенная программа. Linux позволяет перечислять запущенные процессы, мониторить использование системы и убивать процессы.</p>

<p>Процесс идентифицируется в системе с помощью идентификатора процесса (PID). Этот PID уникален для системы.</p>

<p>Каждый процесс связан с учетной записью пользователя и учетной записью группы. Информация об учетной записи помогает определить, к каким ресурсам процесс может получить доступ.</p>

<p>Например, у процесса, запущенного от суперпользователя, есть доступ ко всем файлам и ресурсам системы.</p>

<p>Команда <code>ps</code> — одна из первых и наиболее распространенных команд для перечисления процессов.</p>

<h3>Полезное</h3>

<ul>
	<li><code>man ps</code></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Написать команду, которая перечислит все запущенные процессы (см. "all processes") с полным набором столбцов информации (см. "full-format listing").</li>
	<li>Получившуюся команду записать в <code>/home/box/ps-all.sh</code>.</li>
</ol>


<h1>ps-sort</h1>

<h3>Задание</h3>

<ol>
	<li>Перечислите все запущенные процессы с полным набором столбцов информации в отсортированном по использовании CPU порядке (прим. "cpu utilization") по убыванию.</li>
	<li>Получившуюся команду записать в <code>/home/box/ps-sort.sh</code>.</li>
</ol>




<h1>ps-column</h1>

<h3>Задание</h3>

<ol>
	<li>Перечислите все запущенные процессы в отсортированном по использовании CPU порядке по убыванию и отобразите столбцы (см. "user-defined format"):
	<ul>
		<li>идентификатор процесса</li>
		<li>имя пользователя</li>
		<li>имя группы</li>
		<li>размер виртуальной памяти</li>
		<li>утилизация CPU</li>
		<li>команда</li>
	</ul>
	</li>
	<li>Получившуюся команду записать в <code>/home/box/ps-column.sh</code>.</li>
</ol>


<h1>top-sort</h1>

<p><code>top</code> - интерактивный просмотрщик процессов.</p>

<p>Программа top динамически выводит в режиме реального времени информации о работающей системе, т.е. о фактической активности процессов. По умолчанию она выдает задачи, наиболее загружающие процессор сервера, и обновляет список каждые две секунды.</p>

<p><code>htop</code> - аналог <code>top</code>, дополнительно визуально выводит утилизацию по CPU и RAM.</p>

<p style="text-align: center;"><img alt="" height="380" name="image.png" src="https://ucarecdn.com/fff1de50-2e40-4e85-8341-7f756c8effff/" width="625"></p>

<h3>Полезное</h3>

<ul>
	<li><a href="https://wiki.dieg.info/top" rel="nofollow noopener noreferrer">Статья про top, htop</a></li>
</ul>

<h3>Задание</h3>

<ul>
	<li>Через <code>top</code> узнайте сколько ядер на сервере Linux от stepik.org. Можете запустить сервер из предыдущего задания.</li>
	<li>Запишите число.</li>
</ul>


<h1>kill</h1>

<p>Команды <code>kill</code> и <code>killall</code> используются для завершения процессов. Завершение происходит путем отправки сигнала программе. Список сигналов указан ниже.</p>

<table>
	<thead>
		<tr>
			<th>Сигнал</th>
			<th>Номер</th>
			<th>Описание</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>SIGHUP</td>
			<td>1</td>
			<td>Обнаружен обрыв связи с управляющим терминалом либо завершение управляющего процесса</td>
		</tr>
		<tr>
			<td>SIGINT</td>
			<td>2</td>
			<td>Прерывание с клавиатуры</td>
		</tr>
		<tr>
			<td>SIGQUIT</td>
			<td>3</td>
			<td>Выход с клавиатуры</td>
		</tr>
		<tr>
			<td>SIGABRT</td>
			<td>6</td>
			<td>Сигнал прерывания, посланный функцией abort(3)</td>
		</tr>
		<tr>
			<td>SIGKILL</td>
			<td>9</td>
			<td>Сигнал немедленного завершения</td>
		</tr>
		<tr>
			<td>SIGTERM</td>
			<td>15</td>
			<td>Сигнал завершения</td>
		</tr>
		<tr>
			<td>SIGCONT</td>
			<td>19, 18, 25</td>
			<td>Продолжить выполнение, если остановлен</td>
		</tr>
		<tr>
			<td>SIGSTOP</td>
			<td>17, 19, 23</td>
			<td>Приостановить выполнение процесса</td>
		</tr>
	</tbody>
</table>

<p>Примеры завершения процессов с PID 35. Обе команды делают одно и тоже.</p>

<pre><code class="language-bash">kill -9 35
kill -SIGKILL 35</code></pre>

<h3>Задание</h3>

<ol>
	<li>Прислать команду завершения процесса c PID 999 сигналом <code>SIGTERM</code>.</li>
</ol>


<h1>Сети</h1>

<h1>Сеть</h1>

<p>Практически все взаимодействия в веб-приложениях – являются <em>сетевыми</em>:</p>

<ul>
	<li>Запросы к сайтам из браузера,</li>
	<li>взаимодействие с базами данных,</li>
	<li>между Docker-контейнерами,</li>
	<li>системами кеширования,</li>
	<li>API внешних сервисов.</li>
</ul>

<p>Всё это сводится к сетевым запросам.</p>

<p>Знание сетей можно грубо разделить на два уровня – <em>инфраструктурный</em> и <em>прикладной</em>.</p>

<ol>
	<li><em>Инфраструктурный</em> – это всё что касается проводов, устройств и технологий (wi-fi, соты). На данном уровне работают сетевые инженеры и это слишком далеко от прикладной разработки.</li>
	<li><em>Прикладной</em> уровень работает поверх инфраструктуры и не завязан на неё. Здесь мы оперируем программами на разных компьютерах, которые общаются друг с другом, не задумываясь о том, как физически данные ходят между ними.</li>
</ol>

<p><em>HTTP</em> – протокол прикладного уровня, он не знает про существование компьютеров в сети и работает уже поверх установленного соединения между компьютерами. Соединение устанавливается с помощью протокола <em>TCP</em>. На <em>TCP</em> держится практически всё сетевое взаимодействие.</p>

<h3> </h3>

<h3>TCP/IP</h3>

<p>Протокол TCP позволяет общаться между собой не только отдельным компьютерам в сети, но и процессам, расположенным как на одном компьютере, так и на разных.</p>

<p>Подключение по TCP идёт из конкретного процесса в конкретный процесс. Для соединения нужно два параметра:</p>

<ul>
	<li>IP–адрес</li>
	<li>порт</li>
</ul>

<p>IP-адрес обычно устанавливается автоматически, а вот порт выбирается самим разработчиком, хотя и он может присваиваться автоматически. Связка адреса и порта однозначно говорит нам о том, с какой программой происходит связь. Именно поэтому параметра два. Одного IP-адреса недостаточно, тогда мы не сможем понять, какая программа хочет работать по сети.</p>

<p>TCP это клиент-серверный протокол. То есть один компьютер выступает в качестве сервера, а те, кто к нему присоединяются – клиенты. Сервер во время старта указывает IP-адрес и порт, на которых нужно запуститься. Говорят, что сервер "слушает" порт.</p>

<p>В картинке ниже:</p>

<ul>
	<li>справа окно запускает сервер, который слушает <code>9000</code> порт,</li>
	<li>слева окно запускает клиента, который подключается к этому серверу по адресе <code>127.0.0.1</code> и порту <code>9000</code>.</li>
</ul>

<p>Адрес <code>127.0.0.1</code> - это локальный IP-адрес компьютера.</p>

<p>Если ввести IP-адрес, другого компьютера на котором запущен сервер, то можно сделать такое же подключение.</p>

<p style="text-align: center;"><img alt="" height="494" name="image.png" src="https://ucarecdn.com/9c86b44a-1182-483d-90c4-8a639a1d8633/" width="770"></p>

<blockquote>
<p>🕹 Попробуйте запустить такую же команду у себя на разных окнах терминала.</p>
</blockquote>

<h3> </h3>

<h3>Интерфейсы</h3>

<p>Сетевое взаимодействие в Linux работает через понятие "сетевой интерфейс".</p>

<p>Сетевой интерфейс – это программный способ обращаться к сетевой карте в том случае, когда он связан с физическим устройством.</p>

<p>Но сетевой интерфейс может быть "виртуальным", то есть он не связан с железом, а существует лишь на уровне самой операционной системы. Нужно это для взаимодействия программ, которые изначально сетевые, но запускаются на одном компьютере.</p>

<p>Посмотреть сетевые интерфейсы внутри операционной системы можно командой <code>ifconfig</code> или <code>ip a</code>:</p>

<pre><code>en0: flags=8863&lt;UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST&gt; mtu 1500
	options=6463&lt;RXCSUM,TXCSUM,TSO4,TSO6,CHANNEL_IO,PARTIAL_CSUM,ZEROINVERT_CSUM&gt;
	ether f4:d4:88:7c:d4:07
	inet6 fe80::1d:21df:8e7:3b4d%en0 prefixlen 64 secured scopeid 0xe
	inet 10.11.0.220 netmask 0xfffff800 broadcast 10.11.7.255
	nd6 options=201&lt;PERFORMNUD,DAD&gt;
	media: autoselect
	status: active
lo0: flags=8049&lt;UP,LOOPBACK,RUNNING,MULTICAST&gt; mtu 16384
	options=1203&lt;RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP&gt;
	inet 127.0.0.1 netmask 0xff000000
	inet6 ::1 prefixlen 128
	inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1
	nd6 options=201&lt;PERFORMNUD,DAD&gt;
</code></pre>

<ul>
	<li>
	<p><code>eth0</code> – интерфейс, связанный с сетевой картой, работающей через Ethernet (по кабелю). В выводе выше можно увидеть множество полезной информации, например, IP-адрес, привязанный к этому интерфейсу. Если бы сетевых карт было несколько, то кроме <code>eth0</code>, мы бы увидели <code>eth1</code> и так далее.</p>
	</li>
	<li>
	<p><code>lo</code> (англ. "loopback device") – виртуальный интерфейс, присутствующий по умолчанию в любом Linux. Он используется для отладки сетевых программ и запуска серверных приложений на локальной машине. С этим интерфейсом всегда связан адрес <code>127.0.0.1</code>. У него есть dns-имя – <code>localhost</code>. Посмотреть привязку можно в файле <code>/etc/hosts</code>.</p>
	</li>
</ul>

<h1>ping</h1>

<p>Чтобы убедиться, что вы можете связаться с системами, доступными в сети, используйте команду <code>ping</code>. Она отправляет специальные пакеты в удаленную систему, ожидая от них ответа, например:</p>

<pre><code class="language-bash">$ ping google.com
PING google.com (209.85.233.113): 56 data bytes
64 bytes from 209.85.233.113: icmp_seq=0 ttl=101 time=87.974 ms
64 bytes from 209.85.233.113: icmp_seq=1 ttl=101 time=80.757 ms
64 bytes from 209.85.233.113: icmp_seq=2 ttl=104 time=102.039 ms
64 bytes from 209.85.233.113: icmp_seq=3 ttl=101 time=171.253 ms
64 bytes from 209.85.233.113: icmp_seq=4 ttl=101 time=135.148 ms
^C
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 80.757/115.434/171.253/33.587 ms</code></pre>

<p>Команда <code>ping</code> в примере непрерывно "пингует" <code>google.com</code>. После нескольких пингов нажмите сочетание клавиш <code>Ctrl+C</code>, чтобы завершить процесс, и в последних нескольких строках вывода будет показано, сколько запросов команде удалось выполнить.</p>

<h3>Задание</h3>

<ol>
	<li>Проверьте командой <code>ping</code> домен <code>jusan.kz</code>.</li>
	<li>Отправьте <code>Да</code>, если сервер пингуется. Отправить <code>Нет</code> в обратном случае.</li>
</ol>


<h1>nc</h1>

<p>Еще одним полезным инструментом для диагностики сети является - <code>nc</code>.</p>

<p>С помощью этой программы можно как запускать сервер для приема подключения, так и запускать клиент для соединения с сервером.</p>

<p>Такая программа полезна, если вы хотите проверить доступность сети между компьютерами.</p>

<p>Например, можно на одном удаленном компьютере запустить сервер:</p>

<pre><code class="language-bash">nc -l 1234</code></pre>

<p>На втором, проверить соединение:</p>

<pre><code class="language-bash">$ nc -z -v 185.22.64.126 1234
Connection to 185.22.64.126 port 1234 succeeded!</code></pre>

<h3>Полезное</h3>

<ul>
	<li><code>man nc</code></li>
</ul>

<h3>Задание</h3>

<ul>
	<li>На предыдущем уроке, мы пинговали <code>jusan.kz</code>. На этот раз проверьте соединение с <code>jusan.kz</code> с помощью <code>nc</code> по порту 80.</li>
	<li>Отправьте вывод.</li>
</ul>



<h1>netstat</h1>

<p>Используя команду <code>netstat</code>, в выводе вы увидите процессы, которые прослушивают порты.</p>

<p>Запустите от имени суперпользователя, чтобы увидеть <code>PID</code> и название программы <code>Program name</code>.</p>

<pre><code class="language-bash">$ sudo netstat -tupln
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      88592/sshd
tcp        0      0 0.0.0.0:8088            0.0.0.0:*               LISTEN      68131/python
tcp        0      0 0.0.0.0:5432            0.0.0.0:*               LISTEN      121934/postgres
tcp        0      0 0.0.0.0:25              0.0.0.0:*               LISTEN      1262/master
tcp        0      0 0.0.0.0:443             0.0.0.0:*               LISTEN      113832/nginx: worke
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      113832/nginx: worke</code></pre>

<h3>Полезное</h3>

<ul>
	<li>Чтобы понять назначение флагов, запустите <code>man netstat</code>.</li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Запустите у себя <code>netstat -tupln</code>.</li>
	<li>Найдите сервис который работает на порту <code>53</code>.</li>
	<li>Отправьте название программы (англ. "Program name") этого сервиса.</li>
</ol>


