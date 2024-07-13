Для работы с текстом в вебе бывает полезна функция `truncate()`, которая обрезает слишком длинный текст и ставит в конце многоточие:

`truncate('long text', { length: 3 }); // lon...`

## truncater.js

Реализуйте в классе `Truncater` конструктор и метод `truncate()`. Метод принимает текст и следующие опции:

- `separator` - символ, заменяющий обрезанную часть строки
- `length`- максимальная длина исходной строки. Если строка не длиннее, чем эта опция, то возвращается исходная строка.
- Конфигурацию по умолчанию можно переопределить через конструктор класса и вторым аргументом метода `truncate()`. Оба способа можно комбинировать.

```
const truncater = new Truncater();
truncater.truncate('one two'); // 'one two'
truncater.truncate('one two', { 'length': 6 }); // 'one tw...'

const truncater = new Truncater({ 'length': 6 });
truncater.truncate('one two', { 'separator': '.' }); // 'one tw.'
truncater.truncate('one two', { 'length': 3 }); // 'one...'
```

### Подсказки

Опции по умолчанию заданы, как [статическое свойство класса](https://ru.hexlet.io/courses/js-introduction-to-oop/lessons/static/theory_unit).
Обратите на это внимание при объединении исходных опций с пользовательскими.

### Решение

1. Попробую построить класс как в прошлой задаче ---> пока нет понимания.

2. Опции по умолчании будут в статическом `defaultOptions`

- `separator` - пустая строка
- `length` - text.length - должно быть конкретное значение. Может быть `undefined`. Все проходит

3. Как переопределить опции в методе `truncate`.

- во первых это переопределение будет внутри метода. Значит к опциям по умолчанию можно обратиться через `this.constructor`
  - `const newObject = {...this.constructor.defaultOptions, ...param}`
