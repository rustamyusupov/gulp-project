# Шаблон проекта на gulp

## Установка шаблона

``` sh
$ git clone https://github.com/rustamyusupov/gulp-project.git project
$ npm i
```


### Запуск

 - `$ npm start` - разработка с локальным сервером
 - `$ npm run build` - сборка проекта
 - `$ npm run deploy` - публикация на gh-pages


## Общая концепция

- `src/` - каталог для размещения рабочих файлов (fonts, img, js, sass)
- `tasks/` - каталог для размещения gulp задач
- `build/` - каталог для размещения готовой верстки
- `_design/` - каталог для локального хранения файлов макета
