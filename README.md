# Шаблон проекта на gulp

## Установка шаблона

``` sh
$ git clone https://github.com/rustamyusupov/gulp-project.git project && cd project
$ npm i
```


### Задачи gulp

 - `$ gulp` - запуск разработки с локальным сервером
 - `$ gulp build` - сборка проекта
 - `$ gulp deploy` - публикация на gh-pages


## Общая концепция

- `src/` - каталог для размещения рабочих файлов (fonts, img, js, sass)
- `tasks/` - каталог для размещения gulp задач
- `build/` - каталог для размещения готовой верстки
- `_design/` - каталог для локального хранения файлов макета
