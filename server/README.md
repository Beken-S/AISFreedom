# API AISFreedom

## Запуск

### Первый запуск

Перед тем как работать с API необходимо выполнить команду:

```sh
npm run preparation
```

Данная команда создаст все необходимые каталоги.
Затем нужно добавить в папку `/secrets` файл `db.env` со следующим содержимым:

```sh
DB = ***
DB_HOST = ***
DB_USER = ***
DB_PASSWORD = ***
DB_DIALECT = mysql
```

> **Примечание**: вместо `***` необходимо ввести информацию о вашей базе данных.

### Команды запуска

```sh
 npm start  # запуск сервера.
 npm run dev # запуск сервера в режиме разработки.
```

## Program

### Получение всех программ

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `GET` | `/api/programs/` |

#### Параметры

| Параметр         | Значение | Описание                                                              |
| ---------------- | -------- | --------------------------------------------------------------------- |
| `?page`          | `number` | Номер страницы (не может использоваться без `items_on_page`).         |
| `?items_on_page` | `number` | Количество программ на странице (не может использоваться без `page`). |

> Пример: `https://localhost:3000/api/programs/?page=1&items_on_page=10`

#### Ответ

Без параметров:

```typescript
  Program[]
```

С параметрами:

```typescript
  {
    items: Program[],
    page_count: number,
  }
```

где `Program`:

```typescript
{
  id: number;
  name: string;
  program_type_id: number;
  description: string | null;
  developer: string | null;
  home_page_url: string | null;
  proprietary_counterparts: string[] | null;
  logo: string | null;
  images: string[] | null;
  manual_url: string | null;
  rating: number | null;
  license_id: number | null;
  sources: Sources[];
}
```

где `Sources:`

```typescript
{
  distrib_url: string;
  operation_system_id: number;
}
```

### Получение программы по id

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `GET` | `/api/programs/` |

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` программы (целое положительное число) |

> Пример: `https://localhost:3000/api/programs/1`

#### Ответ

```typescript
Program;
```

### Поиск программ

#### Запрос

| Метод | URI                     |
| ----- | ----------------------- |
| `GET` | `/api/programs/search/` |

#### Параметры

| Параметр              | Значение                                          | Описание                                                              |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| `?q`                  | `string`                                          | Строка для поиска (обязательный параметр)                             |
| `?_in`                | `name`, `description`, `proprietary_counterparts` | Где осуществлять поиск (значение по умолчанию `name`)                 |
| `operation_system_id` | `number`                                          | Фильтр по `id` операционной системы                                   |
| `program_type_id`     | number                                            | Фильтр по `id` класса программы                                       |
| `?page`               | `number`                                          | Номер страницы (не может использоваться без `items_on_page`).         |
| `?items_on_page`      | `number`                                          | Количество программ на странице (не может использоваться без `page`). |

> Пример: `http://localhost:3001/api/programs/search/?q=GIMP&_in=name&_in=description&_in=proprietary_counterparts&operation_system_id=2&program_type_id=1&page=1&items_on_page=1`

#### Ответ

Без параметров `page` и `items_on_page`:

```typescript
  Program[]
```

С параметрами `page` и `items_on_page`:

```typescript
  {
    items: Program[],
    page_count: number,
  }
```

### Создание программы

#### Запрос

| Метод  | URI              |
| ------ | ---------------- |
| `POST` | `/api/programs/` |

#### Тело запроса

JSON строка

```
{
  "program_type_id": number,
  "name": string,
  "license_id": number | null,
  "description": string | null,
  "developer": string | null,
  "home_page_url": string | null,
  "proprietary_counterparts": string[],
  "logo": string | null,
  "images": string[],
  "manual_url": string | null,
}
```

#### Ответ

```typescript
{
  id: number;
  name: string;
  program_type_id: number;
  description: string | null;
  developer: string | null;
  home_page_url: string | null;
  proprietary_counterparts: string[] | null;
  logo: string | null;
  images: string[] | null;
  manual_url: string | null;
  rating: number | null;
  license_id: number | null;
}
```

### Обновление программы

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `PUT` | `/api/programs/` |

#### Тело запроса

JSON строка

```
{
  "id": number,
  "program_type_id": number,
  "name": string,
  "license_id": number | null,
  "description": string | null,
  "developer": string | null,
  "home_page_url": string | null,
  "proprietary_counterparts": string[],
  "logo": string | null,
  "images": string[],
  "manual_url": string | null,
}
```

#### Ответ

```typescript
{
  id: number;
  name: string;
  program_type_id: number;
  description: string | null;
  developer: string | null;
  home_page_url: string | null;
  proprietary_counterparts: string[] | null;
  logo: string | null;
  images: string[] | null;
  manual_url: string | null;
  rating: number | null;
  license_id: number | null;
}
```

### Удаление программы

#### Запрос

| Метод    | URI              |
| -------- | ---------------- |
| `DELETE` | `/api/programs/` |

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` программы (целое положительное число) |

> Пример: `https://localhost:3000/api/programs/1`

#### Ответ

```
{
  "message": "Запись была успешно уделена."
}
```

### Получение логотипов

#### Запрос

| Метод | URI                              |
| ----- | -------------------------------- |
| `GET` | `/api/programs/logos/:file_name` |

#### Параметры

| Параметр     | Значение | Описание  |
| ------------ | -------- | --------- |
| `:file_name` | `string` | имя файла |

> Пример: `https://localhost:3000/api/programs/logos/1.png`

#### Ответ

Файл изображения.

### Получение скриншотов

#### Запрос

| Метод | URI                               |
| ----- | --------------------------------- |
| `GET` | `/api/programs/images/:file_name` |

#### Параметры

| Параметр     | Значение | Описание  |
| ------------ | -------- | --------- |
| `:file_name` | `string` | имя файла |

> Пример: `https://localhost:3000/api/programs/images/1.png`

#### Ответ

Файл изображения.

### Загрузка изображений для программы

#### Запрос

| Метод  | URI                     |
| ------ | ----------------------- |
| `POST` | `/api/programs/images/` |

#### Тело запроса

`FormData` c ключом `images`.

#### Ответ

Строка или массив строк с именами файлов на сервере.

## Program Type

### Получение всех классов программ

#### Запрос

| Метод | URI                   |
| ----- | --------------------- |
| `GET` | `/api/program/types/` |

> Пример: `https://localhost:3000/api/program/types/`

#### Ответ

```typescript
  ProgramType[]
```

где `ProgramType`:

```typescript
{
  id: number;
  name: string;
}
```

### Получение одного класса программы по id

#### Запрос

| Метод | URI                   |
| ----- | --------------------- |
| `GET` | `/api/program/types/` |

#### Параметры

| Параметр | Значение | Описание                                          |
| -------- | -------- | ------------------------------------------------- |
| `:id`    | `number` | `id` класса программы (целое положительное число) |

> Пример: `https://localhost:3000/api/program/types/1`

#### Ответ

```typescript
ProgramType;
```

### Создание класса программы

#### Запрос

| Метод  | URI                   |
| ------ | --------------------- |
| `POST` | `/api/program/types/` |

#### Тело запроса

JSON строка

```
{
  "name": string,
}
```

#### Ответ

```typescript
ProgramType;
```

### Обновление класса программы

#### Запрос

| Метод | URI                   |
| ----- | --------------------- |
| `PUT` | `/api/program/types/` |

#### Тело запроса

JSON строка

```
{
  "id": number,
  "name": string,
}
```

#### Ответ

```typescript
ProgramType;
```

### Удаление программы

#### Запрос

| Метод    | URI                   |
| -------- | --------------------- |
| `DELETE` | `/api/program/types/` |

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` программы (целое положительное число) |

> Пример: `https://localhost:3000/api/program/types/1`

#### Ответ

```
{
  "message": "Запись была успешно уделена."
}
```

## License

### Получение всех лицензий

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `GET` | `/api/licenses/` |

> Пример: `https://localhost:3000/api/licenses/`

#### Ответ

```typescript
  License[]
```

где `License`:

```typescript
{
  id: number;
  acronym: string | null,
  name: string | null;
  text_url_eng: string,
  text_url_ru: string | null
}
```

### Получение одной лицензии по id

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `GET` | `/api/licenses/` |

#### Параметры

| Параметр | Значение | Описание                                  |
| -------- | -------- | ----------------------------------------- |
| `:id`    | `number` | `id` лицензии (целое положительное число) |

> Пример: `https://localhost:3000/api/licenses/1`

#### Ответ

```typescript
License;
```

### Создание лицензии

#### Запрос

| Метод  | URI              |
| ------ | ---------------- |
| `POST` | `/api/licenses/` |

#### Тело запроса

JSON строка

```
{
  "acronym": string | null,
  "name": string | null,
  "text_url_eng": string,
  "text_url_ru": string | null,
}
```

#### Ответ

```typescript
License;
```

### Обновление лицензии

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `PUT` | `/api/licenses/` |

#### Тело запроса

JSON строка

```
{
  "id": number,
  "acronym": string | null,
  "name": string | null,
  "text_url_eng": string,
  "text_url_ru": string | null,
}
```

#### Ответ

```typescript
License;
```

### Удаление лицензии

#### Запрос

| Метод    | URI              |
| -------- | ---------------- |
| `DELETE` | `/api/licenses/` |

#### Параметры

| Параметр | Значение | Описание                                  |
| -------- | -------- | ----------------------------------------- |
| `:id`    | `number` | `id` лицензии (целое положительное число) |

> Пример: `https://localhost:3000/api/licenses/1`

#### Ответ

```
{
  "message": "Запись была успешно уделена."
}
```

## Operation System

### Получение всех операционных систем

#### Запрос

| Метод | URI                       |
| ----- | ------------------------- |
| `GET` | `/api/operation_systems/` |

> Пример: `https://localhost:3000/api/operation_systems/`

#### Ответ

```typescript
  OperationSystem[]
```

где `OperationSystem`:

```typescript
{
  id: number;
  name: string;
}
```

### Получение операционной системы по id

#### Запрос

| Метод | URI                       |
| ----- | ------------------------- |
| `GET` | `/api/operation_systems/` |

#### Параметры

| Параметр | Значение | Описание                                              |
| -------- | -------- | ----------------------------------------------------- |
| `:id`    | `number` | `id` операционной системы (целое положительное число) |

> Пример: `https://localhost:3000/api/operation_systems/1`

#### Ответ

```typescript
OperationSystem;
```

### Создание операционной системы

#### Запрос

| Метод  | URI                       |
| ------ | ------------------------- |
| `POST` | `/api/operation_systems/` |

#### Тело запроса

JSON строка

```
{
  "name": string,
}
```

#### Ответ

```typescript
OperationSystem;
```

### Обновление операционной системы

#### Запрос

| Метод | URI                       |
| ----- | ------------------------- |
| `PUT` | `/api/operation_systems/` |

#### Тело запроса

JSON строка

```
{
  "id": number,
  "name": string,
}
```

#### Ответ

```typescript
OperationSystem;
```

### Удаление операционной системы

#### Запрос

| Метод    | URI                       |
| -------- | ------------------------- |
| `DELETE` | `/api/operation_systems/` |

#### Параметры

| Параметр | Значение | Описание                                              |
| -------- | -------- | ----------------------------------------------------- |
| `:id`    | `number` | `id` операционной системы (целое положительное число) |

> Пример: `https://localhost:3000/api/operation_systems/1`

#### Ответ

```
{
  "message": "Запись была успешно уделена."
}
```

## Source

### Получение источников программ

#### Запрос

| Метод | URI             |
| ----- | --------------- |
| `GET` | `/api/sources/` |

> Пример: `https://localhost:3000/api/sources/`

#### Ответ

```typescript
  Source[]
```

где `Source`:

```typescript
{
  id: number;
  distrib_url: string,
  program_id: number;
  operation_system_id: number,
}
```

### Получение источника программы по id

#### Запрос

| Метод | URI             |
| ----- | --------------- |
| `GET` | `/api/sources/` |

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` источника (целое положительное число) |

> Пример: `https://localhost:3000/api/sources/1`

#### Ответ

```typescript
Source;
```

### Создание источника программы

#### Запрос

| Метод  | URI             |
| ------ | --------------- |
| `POST` | `/api/sources/` |

#### Тело запроса

JSON строка

```
{
  "distrib_url": string,
  "program_id": number,
  "operation_system_id": number,
}
```

#### Ответ

```typescript
Source;
```

### Обновление источника программы

#### Запрос

| Метод | URI             |
| ----- | --------------- |
| `PUT` | `/api/sources/` |

#### Тело запроса

JSON строка

```
{
  "id": number,
  "distrib_url": string,
  "program_id": number,
  "operation_system_id": number,
}
```

#### Ответ

```typescript
Source;
```

### Удаление источника программы

#### Запрос

| Метод    | URI             |
| -------- | --------------- |
| `DELETE` | `/api/sources/` |

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` источника (целое положительное число) |

> Пример: `https://localhost:3000/api/sources/1`

#### Ответ

```
{
  "message": "Запись была успешно уделена."
}
```
