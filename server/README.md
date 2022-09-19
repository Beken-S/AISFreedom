# API AISFreedom

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Запуск](#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA)
  - [Первый запуск](#%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA)
  - [Команды запуска](#%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0)
- [Аутентификация](#%D0%B0%D1%83%D1%82%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F)
  - [Вход](#%D0%B2%D1%85%D0%BE%D0%B4)
  - [Выход](#%D0%B2%D1%8B%D1%85%D0%BE%D0%B4)
  - [Обновление токена](#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%82%D0%BE%D0%BA%D0%B5%D0%BD%D0%B0)
- [Программы](#%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
  - [Получение всех программ](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D0%B5%D1%85-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC)
  - [Получение программы по id](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-%D0%BF%D0%BE-id)
  - [Поиск программ](#%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC)
  - [Создание программы](#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
  - [Обновление программы](#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
  - [Выставление оценки программе](#%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D1%86%D0%B5%D0%BD%D0%BA%D0%B8-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B5)
  - [Удаление программы](#%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
  - [Получение логотипов](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%BE%D0%B2)
  - [Получение скриншотов](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%D0%BE%D0%B2)
  - [Загрузка изображений для программы](#%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
- [Классы программ](#%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC)
  - [Получение всех классов программ](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D0%B5%D1%85-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC)
  - [Получение одного класса программы по id](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-%D0%BF%D0%BE-id)
  - [Создание класса программы](#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
  - [Обновление класса программы](#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
  - [Удаление класса программы](#%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
- [Лицензии](#%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D0%B8)
  - [Получение всех лицензий](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D0%B5%D1%85-%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D0%B9)
  - [Получение одной лицензии по id](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D0%B8-%D0%BF%D0%BE-id)
  - [Создание лицензии](#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D0%B8)
  - [Обновление лицензии](#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D0%B8)
  - [Удаление лицензии](#%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D0%B8)
- [Операционные системы](#%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B)
  - [Получение всех операционных систем](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D0%B5%D1%85-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC)
  - [Получение операционной системы по id](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B-%D0%BF%D0%BE-id)
  - [Создание операционной системы](#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B)
  - [Обновление операционной системы](#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B)
  - [Удаление операционной системы](#%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B)
- [Источники](#%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B8)
  - [Получение источников программ](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC)
  - [Получение источника программы по id](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-%D0%BF%D0%BE-id)
  - [Создание источника программы](#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
  - [Обновление источника программы](#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
  - [Удаление источника программы](#%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B)
- [Заявки на добавление программ](#%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC)
  - [Получение заявок](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%B0%D1%8F%D0%B2%D0%BE%D0%BA)
  - [Получение заявки по id](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8-%D0%BF%D0%BE-id)
  - [Создание заявки](#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8)
  - [Получение отфильтрованных заявок](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%B7%D0%B0%D1%8F%D0%B2%D0%BE%D0%BA)
  - [Получение отчета](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D1%82%D1%87%D0%B5%D1%82%D0%B0)
  - [Отметить заявку как выполненную](#%D0%BE%D1%82%D0%BC%D0%B5%D1%82%D0%B8%D1%82%D1%8C-%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D1%83-%D0%BA%D0%B0%D0%BA-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%BD%D1%83%D1%8E)
  - [Отметить заявку как отклоненную](#%D0%BE%D1%82%D0%BC%D0%B5%D1%82%D0%B8%D1%82%D1%8C-%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D1%83-%D0%BA%D0%B0%D0%BA-%D0%BE%D1%82%D0%BA%D0%BB%D0%BE%D0%BD%D0%B5%D0%BD%D0%BD%D1%83%D1%8E)
  - [Сбросить статус заявки](#%D1%81%D0%B1%D1%80%D0%BE%D1%81%D0%B8%D1%82%D1%8C-%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%81-%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8)
- [Нормативные документы](#%D0%BD%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B)
  - [Получение всех нормативные документов](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D0%B5%D1%85-%D0%BD%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2)
  - [Получение файла документа](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0)
- [Статьи](#%D1%81%D1%82%D0%B0%D1%82%D1%8C%D0%B8)
  - [Получение всех статей](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D0%B5%D1%85-%D1%81%D1%82%D0%B0%D1%82%D0%B5%D0%B9)
  - [Получение файла статьи](#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D1%81%D1%82%D0%B0%D1%82%D1%8C%D0%B8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

## Аутентификация

Реализована с помощью JWT токенов.

### Вход

| Метод  | URI               |
| ------ | ----------------- |
| `POST` | `/api/user/login` |

#### Тело запроса

JSON строка (должен быть указан или login или email)

```typescript
{
  login: string | undefined;
  email: string | undefined;
  password: string;
}
```

#### Ответ

```typescript
{
  message: "Вход выполнен успешно.";
  user: User;
  access_token: string;
}
```

где `User`:

```typescript
{
  id: number;
  role: string;
  name: string;
  email: string;
}
```

### Выход

| Метод  | URI                |
| ------ | ------------------ |
| `POST` | `/api/user/logout` |

#### Ответ

```typescript
{
  message: "Выход выполнен успешно.";
}
```

### Обновление токена

| Метод  | URI                 |
| ------ | ------------------- |
| `POST` | `/api/user/refresh` |

#### Ответ

```typescript
{
  message: "Токен успешно обновлен.";
  access_token: string;
}
```

## Программы

### Получение всех программ

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `GET` | `/api/programs/` |

#### Параметры

| Параметр        | Значение | Описание                                                              |
| --------------- | -------- | --------------------------------------------------------------------- |
| `page`          | `number` | Номер страницы (не может использоваться без `items_on_page`).         |
| `items_on_page` | `number` | Количество программ на странице (не может использоваться без `page`). |

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
  program_type_id: number;
  license_id: number | null;
  name: string;
  description: string | null;
  developer: string | null;
  home_page_url: string | null;
  proprietary_counterparts: string[] | null;
  logo: string | null;
  images: string[] | null;
  rating: number;
  sources: Source[];
  manual_url: string | null;
};
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
| `q`                   | `string`                                          | Строка для поиска (обязательный параметр)                             |
| `_in`                 | `name`, `description`, `proprietary_counterparts` | Где осуществлять поиск (значение по умолчанию `name`)                 |
| `operation_system_id` | `number`                                          | Фильтр по `id` операционной системы                                   |
| `program_type_id`     | `number`                                          | Фильтр по `id` класса программы                                       |
| `page`                | `number`                                          | Номер страницы (не может использоваться без `items_on_page`).         |
| `items_on_page`       | `number`                                          | Количество программ на странице (не может использоваться без `page`). |

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

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Тело запроса

JSON строка

```typescript
{
  program_type_id: number;
  license_id: number | null | undefined;
  name: string;
  description: string | null | undefined;
  developer: string | null | undefined;
  home_page_url: string | null | undefined;
  proprietary_counterparts: string[] | null | undefined;
  logo: string | null | undefined;
  images: string[] | null | undefined;
  manual_url: string | null | undefined;
}
```

#### Ответ

```typescript
Program;
```

### Обновление программы

#### Запрос

| Метод   | URI              |
| ------- | ---------------- |
| `PATCH` | `/api/programs/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` программы (целое положительное число) |

> Пример: `https://localhost:3000/api/programs/1`

#### Тело запроса

JSON строка

```typescript
{
  program_type_id: number;
  license_id: number | null | undefined;
  name: string;
  description: string | null | undefined;
  developer: string | null | undefined;
  home_page_url: string | null | undefined;
  proprietary_counterparts: string[] | null | undefined;
  logo: string | null | undefined;
  images: string[] | null | undefined;
  manual_url: string | null | undefined;
}
```

#### Ответ

```typescript
{
  Program;
}
```

### Выставление оценки программе

#### Запрос

| Метод   | URI                      |
| ------- | ------------------------ |
| `PATCH` | `/api/programs/:id/rate` |

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` программы (целое положительное число) |

> Пример: `https://localhost:3000/api/programs/1/rate`

#### Тело запроса

JSON строка

```typescript
{
  grade: number;
}
```

#### Ответ

```typescript
{
  Program;
}
```

### Удаление программы

#### Запрос

| Метод    | URI              |
| -------- | ---------------- |
| `DELETE` | `/api/programs/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` программы (целое положительное число) |

> Пример: `https://localhost:3000/api/programs/1`

#### Ответ

```typescript
{
  message: "Программа с id=... была успешно уделена.";
}
```

### Получение логотипов

#### Запрос

| Метод | URI                    |
| ----- | ---------------------- |
| `GET` | `/api/programs/logos/` |

#### Параметры

| Параметр     | Значение | Описание  |
| ------------ | -------- | --------- |
| `:file_name` | `string` | имя файла |

> Пример: `https://localhost:3000/api/programs/logos/1.png`

#### Ответ

Файл изображения.

### Получение скриншотов

#### Запрос

| Метод | URI                     |
| ----- | ----------------------- |
| `GET` | `/api/programs/images/` |

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

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Тело запроса

`FormData` c ключом `images`.

#### Ответ

Строка или массив строк с именами файлов на сервере.

## Классы программ

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

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Тело запроса

JSON строка

```typescript
{
  name: string,
}
```

#### Ответ

```typescript
ProgramType;
```

### Обновление класса программы

#### Запрос

| Метод   | URI                   |
| ------- | --------------------- |
| `PATCH` | `/api/program/types/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                          |
| -------- | -------- | ------------------------------------------------- |
| `:id`    | `number` | `id` класса программы (целое положительное число) |

> Пример: `https://localhost:3000/api/program/types/1`

#### Тело запроса

JSON строка

```typescript
{
  name: string,
}
```

#### Ответ

```typescript
ProgramType;
```

### Удаление класса программы

#### Запрос

| Метод    | URI                   |
| -------- | --------------------- |
| `DELETE` | `/api/program/types/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` программы (целое положительное число) |

> Пример: `https://localhost:3000/api/program/types/1`

#### Ответ

```typescript
{
  message: "Класс программы с id=... был успешно уделен.";
}
```

## Лицензии

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
  acronym: string | null;
  name: string | null;
  text_url_eng: string | null;
  text_url_ru: string | null;
  author: string | null;
  year_of_creation: Date;
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

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Тело запроса

JSON строка

```typescript
{
  acronym: string | null | undefined;
  name: string | null | undefined;
  text_url_eng: string | null | undefined;
  text_url_ru: string | null | undefined;
  author: string | null | undefined;
  year_of_creation: Date | null | undefined;
}
```

#### Ответ

```typescript
License;
```

### Обновление лицензии

#### Запрос

| Метод   | URI              |
| ------- | ---------------- |
| `PATCH` | `/api/licenses/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                  |
| -------- | -------- | ----------------------------------------- |
| `:id`    | `number` | `id` лицензии (целое положительное число) |

> Пример: `https://localhost:3000/api/licenses/1`

#### Тело запроса

JSON строка

```typescript
{
  acronym: string | null | undefined;
  name: string | null | undefined;
  text_url_eng: string | null | undefined;
  text_url_ru: string | null | undefined;
  author: string | null | undefined;
  year_of_creation: Date | null | undefined;
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

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                  |
| -------- | -------- | ----------------------------------------- |
| `:id`    | `number` | `id` лицензии (целое положительное число) |

> Пример: `https://localhost:3000/api/licenses/1`

#### Ответ

```typescript
{
  message: "Лицензия с id=... была успешно уделена.";
}
```

## Операционные системы

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

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Тело запроса

JSON строка

```typescript
{
  name: string,
}
```

#### Ответ

```typescript
OperationSystem;
```

### Обновление операционной системы

#### Запрос

| Метод   | URI                       |
| ------- | ------------------------- |
| `PATCH` | `/api/operation_systems/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                              |
| -------- | -------- | ----------------------------------------------------- |
| `:id`    | `number` | `id` операционной системы (целое положительное число) |

> Пример: `https://localhost:3000/api/operation_systems/1`

#### Тело запроса

JSON строка

```typescript
{
  name: string,
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

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                              |
| -------- | -------- | ----------------------------------------------------- |
| `:id`    | `number` | `id` операционной системы (целое положительное число) |

> Пример: `https://localhost:3000/api/operation_systems/1`

#### Ответ

```typescript
{
  message: "Операционная система с id=... была успешно уделена.";
}
```

## Источники

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

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Тело запроса

JSON строка

```typescript
{
  distrib_url: string,
  program_id: number,
  operation_system_id: number,
}
```

#### Ответ

```typescript
Source;
```

### Обновление источника программы

#### Запрос

| Метод   | URI             |
| ------- | --------------- |
| `PATCH` | `/api/sources/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` источника (целое положительное число) |

> Пример: `https://localhost:3000/api/sources/1`

#### Тело запроса

JSON строка

````typescript
{
  distrib_url: string | undefined,
  program_id: number | undefined,
  operation_system_id: number | undefined,
}

#### Ответ

```typescript
Source;
````

### Удаление источника программы

#### Запрос

| Метод    | URI             |
| -------- | --------------- |
| `DELETE` | `/api/sources/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                   |
| -------- | -------- | ------------------------------------------ |
| `:id`    | `number` | `id` источника (целое положительное число) |

> Пример: `https://localhost:3000/api/sources/1`

#### Ответ

```typescript
{
  message: "Источник с id=... был успешно уделен.";
}
```

## Заявки на добавление программ

### Получение заявок

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `GET` | `/api/requests/` |

> Пример: `https://localhost:3000/api/requests/`

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр        | Значение | Описание                                                            |
| --------------- | -------- | ------------------------------------------------------------------- |
| `page`          | `number` | Номер страницы (не может использоваться без `items_on_page`).       |
| `items_on_page` | `number` | Количество заявок на странице (не может использоваться без `page`). |

> Пример: `https://localhost:3000/api/requests/?page=1&items_on_page=10`

#### Ответ

Без параметров:

```typescript
  Request[]
```

С параметрами:

```typescript
  {
    items: Request[],
    page_count: number,
  }
```

где `Request`:

```typescript
{
  id: number;
  department_id: number;
  programs_names: string[];
  adding_reason: string;
  username: string;
  user_position: string;
  user_email: string;
  user_phone: string | null;
  is_rejected: boolean;
  comment: string | null;
  is_completed: boolean;
  creation_date: Date;
  consider_before_date: Date;
  processed_date: Date | null;
  status: string;
}
```

### Получение заявки по id

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `GET` | `/api/requests/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                |
| -------- | -------- | --------------------------------------- |
| `:id`    | `number` | `id` заявки (целое положительное число) |

> Пример: `https://localhost:3000/api/requests/1`

#### Ответ

```typescript
Request;
```

### Создание заявки

#### Запрос

| Метод  | URI              |
| ------ | ---------------- |
| `POST` | `/api/requests/` |

#### Тело запроса

JSON строка

```typescript
{
  department_id: number
  programs_names: string[]
  adding_reason: string
  username: string
  user_position: string
  user_phone: string | null | undefined
  user_email: string
  consider_before_date: Date
}
```

#### Ответ

```typescript
Request;
```

### Получение отфильтрованных заявок

#### Запрос

| Метод | URI                     |
| ----- | ----------------------- |
| `GET` | `/api/requests/filter/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр         | Значение                                      | Описание                                                            |
| ---------------- | --------------------------------------------- | ------------------------------------------------------------------- |
| `status`         | `current`, `rejected`, `completed`, `expired` | Фильтрация по статусу заявки                                        |
| `created_from`   | `Date`                                        | Нижняя граница даты создания (строка в формате ISO8601)             |
| `created_to`     | `Date`                                        | Верхняя граница даты создания (строка в формате ISO8601)            |
| `processed_from` | `Date`                                        | Нижняя граница даты обработки (строка в формате ISO8601)            |
| `processed_to`   | `Date`                                        | Верхняя граница даты обработки (строка в формате ISO8601)           |
| `page`           | `number`                                      | Номер страницы (не может использоваться без `items_on_page`).       |
| `items_on_page`  | `number`                                      | Количество заявок на странице (не может использоваться без `page`). |

> Пример: `http://localhost:3000/api/requests/filter/?status=current&created_from=2021-03-11&created_to=2021-10-22&processed_from=2021-01-01&processed_to=2021-11-08&page=1&items_on_page=1`

#### Ответ

Без параметров пагинации:

```typescript
  Request[]
```

С параметрами пагинации:

```typescript
  {
    items: Request[],
    page_count: number,
  }
```

### Получение отчета

#### Запрос

| Метод | URI                     |
| ----- | ----------------------- |
| `GET` | `/api/requests/report/` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр       | Значение                                      | Описание                                                 |
| -------------- | --------------------------------------------- | -------------------------------------------------------- |
| `status`       | `current`, `rejected`, `completed`, `expired` | Фильтрация по статусу заявки                             |
| `created_from` | `Date`                                        | Нижняя граница даты создания (строка в формате ISO8601)  |
| `created_to`   | `Date`                                        | Верхняя граница даты создания (строка в формате ISO8601) |

> Пример: `http://localhost:3000/api/requests/report/?status=current&created_from=2021-03-11&created_to=2021-10-22`

#### Ответ

Без параметров:

Файл отчета в PDF формате содержащий все заявки.

С параметрами:

Файл отчета в PDF формате с учетом параметров.

### Отметить заявку как выполненную

#### Запрос

| Метод   | URI                          |
| ------- | ---------------------------- |
| `PATCH` | `/api/requests/:id/complete` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                |
| -------- | -------- | --------------------------------------- |
| `:id`    | `number` | `id` заявки (целое положительное число) |

> Пример: `http://localhost:3000/api/requests/1/complete`

#### Ответ

```typescript
Request;
```

### Отметить заявку как отклоненную

#### Запрос

| Метод   | URI                        |
| ------- | -------------------------- |
| `PATCH` | `/api/requests/:id/reject` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Тело запроса

JSON строка

```typescript
{
  rejection_reason: string | null | undefined;
}
```

#### Параметры

| Параметр | Значение | Описание                                |
| -------- | -------- | --------------------------------------- |
| `:id`    | `number` | `id` заявки (целое положительное число) |

> Пример: `http://localhost:3000/api/requests/1/reject`

#### Ответ

```typescript
Request;
```

### Сбросить статус заявки

#### Запрос

| Метод   | URI                       |
| ------- | ------------------------- |
| `PATCH` | `/api/requests/:id/reset` |

#### Заголовки

| Заголовок       | Значение                |
| --------------- | ----------------------- |
| `Authorization` | `Bearer [access_token]` |

> Пример: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM2MjEwOTcsImV4cCI6MTY2MzYyMTE1N30.FDHMS6mgFlFcMIySE4057maAFAEg5UuBUr6Vwglah8Q`

#### Параметры

| Параметр | Значение | Описание                                |
| -------- | -------- | --------------------------------------- |
| `:id`    | `number` | `id` заявки (целое положительное число) |

> Пример: `http://localhost:3000/api/requests/1/reset`

#### Ответ

```typescript
Request;
```

## Нормативные документы

### Получение всех нормативные документов

#### Запрос

| Метод | URI                         |
| ----- | --------------------------- |
| `GET` | `/api/normative_documents/` |

#### Параметры

| Параметр        | Значение | Описание                                                                            |
| --------------- | -------- | ----------------------------------------------------------------------------------- |
| `page`          | `number` | Номер страницы (не может использоваться без `items_on_page`).                       |
| `items_on_page` | `number` | Количество нормативных документов на странице (не может использоваться без `page`). |

> Пример: `https://localhost:3000/api/normative_documents/?page=1&items_on_page=10`

#### Ответ

Без параметров:

```typescript
  NormativeDocument[]
```

С параметрами:

```typescript
  {
    items: NormativeDocument[],
    page_count: number,
  }
```

где `NormativeDocument`:

```typescript
{
  id: number;
  form: string;
  name: string;
  creation_date: Date;
  number: string;
  file: string;
}
```

### Получение файла документа

#### Запрос

| Метод | URI                                  |
| ----- | ------------------------------------ |
| `GET` | `/api/programs/normative_documents/` |

#### Параметры

| Параметр     | Значение | Описание  |
| ------------ | -------- | --------- |
| `:file_name` | `string` | имя файла |

> Пример: `https://localhost:3000/api/normative_documents/1.pdf`

#### Ответ

Файл документа.

## Статьи

### Получение всех статей

#### Запрос

| Метод | URI              |
| ----- | ---------------- |
| `GET` | `/api/articles/` |

#### Параметры

| Параметр        | Значение | Описание                                                                            |
| --------------- | -------- | ----------------------------------------------------------------------------------- |
| `page`          | `number` | Номер страницы (не может использоваться без `items_on_page`).                       |
| `items_on_page` | `number` | Количество нормативных документов на странице (не может использоваться без `page`). |

> Пример: `https://localhost:3000/api/articles/?page=1&items_on_page=10`

#### Ответ

Без параметров:

```typescript
  Article[]
```

С параметрами:

```typescript
  {
    items: Article[],
    page_count: number,
  }
```

где `Article`:

```typescript
{
  id: number;
  name: string;
  author: string;
  publication_year: Date;
  file: string;
}
```

### Получение файла статьи

#### Запрос

| Метод | URI                       |
| ----- | ------------------------- |
| `GET` | `/api/programs/articles/` |

#### Параметры

| Параметр     | Значение | Описание  |
| ------------ | -------- | --------- |
| `:file_name` | `string` | имя файла |

> Пример: `https://localhost:3000/api/articles/1.pdf`

#### Ответ

Файл статьи.
