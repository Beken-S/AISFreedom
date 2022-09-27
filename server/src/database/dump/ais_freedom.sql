-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Сен 23 2022 г., 18:20
-- Версия сервера: 5.7.27-30
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `u0645015_ppo`
--

-- --------------------------------------------------------

--
-- Структура таблицы `add_programs_requests`
--

CREATE TABLE `add_programs_requests` (
  `id` int(10) UNSIGNED NOT NULL,
  `department_id` int(10) UNSIGNED NOT NULL,
  `programs_names` json NOT NULL,
  `adding_reason` varchar(1500) NOT NULL,
  `username` varchar(255) NOT NULL,
  `user_position` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `is_rejected` tinyint(1) NOT NULL DEFAULT '0',
  `comment` varchar(1500) DEFAULT NULL,
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  `consider_before_date` datetime NOT NULL,
  `processed_date` datetime DEFAULT NULL,
  `creation_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `add_programs_requests`
--

INSERT INTO `add_programs_requests` (`id`, `department_id`, `programs_names`, `adding_reason`, `username`, `user_position`, `user_email`, `user_phone`, `is_rejected`, `comment`, `is_completed`, `consider_before_date`, `processed_date`, `creation_date`) VALUES
(1, 1, '[\"VS Code\"]', 'Включена в рабочую программу учебных дисциплин \"Параллельное и распределенное программирование\"', 'Иванов А.П.', 'Преподаватель', 'ivanov@bk.ru', '+79203333333', 0, NULL, 1, '2022-02-10 21:00:00', '2022-09-22 10:37:21', '2022-01-10 21:00:00'),
(2, 3, '[\"SciLab\", \"GNU Octave\"]', 'На всякий случай', 'Соколов А.И', 'Лаборант', 'sokol@bk.ru', '+79203337777', 1, NULL, 0, '2022-02-28 21:00:00', '2022-09-22 16:08:34', '2022-01-31 21:00:00'),
(3, 17, '[\"Maxima\"]', 'ТЗ на НИР, шифр \"Математик\"', 'Смирнов Е.В.', 'Старший научный сотрудник', 'smirnov_ev@mail', '+79205533744', 0, NULL, 0, '2022-03-09 21:00:00', NULL, '2022-02-09 21:00:00'),
(13, 2, '[\"ссссс\", \"ссссс\"]', 'сссс', 'ссс  ссс ссс', 'сссс', 'test@mail.ru', '+79501784896', 0, NULL, 0, '2022-11-22 16:07:33', NULL, '2022-09-22 16:08:01'),
(14, 1, '[\"VS Code\", \"VS Code\"]', 'Включено в рабочие программы  учебных дисциплин Информатика', 'Петров А.А', 'преподаватель', 'test@mail.ru', '+79034506377', 0, NULL, 0, '2022-11-22 16:26:18', NULL, '2022-09-22 16:27:49');

-- --------------------------------------------------------

--
-- Структура таблицы `articles`
--

CREATE TABLE `articles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `author` varchar(255) NOT NULL,
  `publication_year` datetime NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `articles`
--

INSERT INTO `articles` (`id`, `name`, `author`, `publication_year`, `file`) VALUES
(1, 'Использование свободных программ в научных исследованиях.', 'Алексеев Е.Р.', '2008-12-31 21:00:00', '584463e3-7e03-4d9c-9510-cf8bf81e033c.pdf'),
(2, 'Проблема выбора современного программного обеспечения в образовательном процессе вуза.', 'Баландина И.В., Баландин А.А.', '2016-12-31 21:00:00', '6ad90659-dee2-4a18-a5dc-117567845fcc.pdf'),
(3, 'О перспективах и проблемах использования свободного программного обеспечения для повышения эффективности учебного процесса.', 'Шевченко А.М.', '2017-12-31 21:00:00', '1f9e5317-0f34-4eac-bf59-f2347a216d96.pdf'),
(4, 'Свободное программное обеспечение в высших учебных заведениях.', 'Бобровских А.В., Урывская Т.Ю., Алимов А.П.', '2018-12-31 21:00:00', 'ab845cfd-229f-43c3-a6d8-bf9e07ddbf5a.pdf'),
(5, 'Декомпозиция процесса обоснования состава свободно распространяемого программного обеспечения в высших учебных заведениях военной направленности.', 'Бобровских А.В., Бондаренко Ю.В.', '2019-12-31 21:00:00', '7e4dbd8b-d795-4464-a3fd-9c8327599cb2.pdf'),
(6, 'Свободное программное обеспечение в образовании.', 'Коллектив авторов', '2008-12-31 21:00:00', 'c5c226b6-34b8-4d2f-b747-9f52b465adb5.pdf'),
(7, 'Использование пакетов свободного программного обеспечения в дополнительном профессиональном образовании.', 'Дочкин С.А.', '2010-12-31 21:00:00', '3b69a6be-ec96-458f-aafa-5a224176c911.pdf'),
(8, 'Проблемы и перспективы внедрения свободно распространяемого программного обеспечения в образовательных учреждениях Санкт-Петербурга (Материалы VI конференции)', 'Коллектив авторов', '2013-12-31 20:00:00', 'fd005250-12b6-4cd1-82c0-b24f1fdc06c3.pdf'),
(9, 'Свободное программное обеспечение как системообразующий фактор информационной среды науки и общества: состояние и перспективы.', 'Калюжный К.А.', '2013-12-31 20:00:00', 'b0a11ac9-d780-4771-90c0-0647b9e9a186.pdf'),
(10, 'Информационно-образовательная среда учебного учреждения на базе свободного программного обеспечения.', 'Битюникова И.А.', '2016-12-31 21:00:00', '2d9c9cd8-3528-43ea-bdb1-a938c665efce.pdf');

-- --------------------------------------------------------

--
-- Структура таблицы `departments`
--

CREATE TABLE `departments` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `departments`
--

INSERT INTO `departments` (`id`, `name`) VALUES
(12, 'Военный учебный центр'),
(4, 'Исторический факультет'),
(2, 'Математический факультет'),
(17, 'Научно-исследовательский центр (образовательных и информационных технологий)'),
(16, 'Отдел информационных технологий'),
(15, 'Отдел материального обеспечения'),
(14, 'Отдел технического обеспечения'),
(11, 'Факультет географии, геоэкологии и туризма'),
(1, 'Факультет компьютерных наук'),
(10, 'Факультет международных отношений'),
(8, 'Факультет философии и психологии'),
(3, 'Физический факультет'),
(9, 'Филологический факультет'),
(13, 'Финансово-экономическая служба'),
(5, 'Химический факультет'),
(6, 'Экономический факультет'),
(7, 'Юридический факультет');

-- --------------------------------------------------------

--
-- Структура таблицы `licenses`
--

CREATE TABLE `licenses` (
  `id` int(10) UNSIGNED NOT NULL,
  `acronym` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `text_url_eng` varchar(2083) DEFAULT NULL,
  `text_url_ru` varchar(2083) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `year_of_creation` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `licenses`
--

INSERT INTO `licenses` (`id`, `acronym`, `name`, `text_url_eng`, `text_url_ru`, `author`, `year_of_creation`) VALUES
(1, 'GNU GPL v1', 'GNU GENERAL PUBLIC LICENSE Version 1', 'https://www.gnu.org/licenses/old-licenses/gpl-1.0.html', 'https://docs.altlinux.org/ru-RU/archive/2.3/html-single/junior/alt-docs-extras-schooljunior/apa.html', 'Free Software Foundation, Inc.', '1988-12-31 18:00:00'),
(2, 'GNU GPL v2', 'GNU GENERAL PUBLIC LICENSE Version 2', 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html', 'http://licenseit.ru/wiki/index.php/GNU_General_Public_License_version_2', 'Free Software Foundation, Inc.', '1990-12-31 18:00:00'),
(3, 'GNU GPL v3', 'GNU GENERAL PUBLIC LICENSE Version 3', 'https://www.gnu.org/licenses/gpl-3.0.html', 'https://www.gnu.org/licenses/gpl-3.0.html', 'Free Software Foundation, Inc.', '2006-12-31 18:00:00'),
(4, 'GNU LGPLv2.1', 'GNU LESSER GENERAL PUBLIC LICENSE Version 2.1', 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html', 'http://licenseit.ru/wiki/index.php/GNU_Lesser_General_Public_License_version_2.1', 'Free Software Foundation, Inc.', '1998-12-31 18:00:00'),
(5, 'GNU LGPL v3', 'GNU LESSER GENERAL PUBLIC LICENSE Version 3', 'https://www.gnu.org/licenses/lgpl-3.0.html', 'http://licenseit.ru/wiki/index.php/GNU_Lesser_General_Public_License_version_3', 'Free Software Foundation, Inc.', '2006-12-31 18:00:00'),
(6, 'Apache-1.0', 'APACHE LICENSE, VERSION 1.0', 'https://www.apache.org/licenses/LICENSE-1.0', NULL, 'The Apache Software Foundation', '1994-12-31 18:00:00'),
(7, 'Apache-1.1', 'APACHE LICENSE, VERSION 1.1', 'https://www.apache.org/licenses/LICENSE-1.1', NULL, 'The Apache Software Foundation', '1999-12-31 18:00:00'),
(8, 'Apache-2.0', 'APACHE LICENSE, VERSION 2.0', 'https://www.apache.org/licenses/LICENSE-2.0', 'http://licenseit.ru/wiki/index.php/Apache_License_version_2.0', 'The Apache Software Foundation', '2003-12-31 18:00:00'),
(9, 'MPL 1.1', 'Mozilla Public License 1.1', 'https://www.mozilla.org/en-US/MPL/1.1/', 'http://licenseit.ru/wiki/index.php/Mozilla_Public_License_version_1.1', 'Netscape Communications Corporation', '1998-12-31 18:00:00'),
(10, 'MPL 2.0', 'Mozilla Public License 2.0', 'https://www.mozilla.org/en-US/MPL/2.0/', NULL, ' Mozilla Foundation', '2011-12-31 16:00:00'),
(11, 'MIT', 'MIT  License', 'https://mit-license.org/', 'http://licenseit.ru/wiki/index.php/MIT_License', 'Massachusetts Institute of Technology', '1987-12-31 18:00:00'),
(12, 'X11', 'X11 License', 'http://licenseit.ru/wiki/index.php/X11_License', 'http://licenseit.ru/wiki/index.php/X11_License', 'X Consortium', '1987-12-31 18:00:00'),
(13, 'BSD 3-Clause', 'BSD 3-Clause \'New\' or \'Revised\' License', 'https://directory.fsf.org/wiki/License:BSD-3-Clause', 'http://licenseit.ru/wiki/index.php/BSD_License', 'University of California, Berkeley', '1998-12-31 18:00:00'),
(14, 'BSD 4-Clause', 'BSD 4-Clause \'Original\' or \'Old\' License', 'https://directory.fsf.org/wiki/License:BSD-4-Clause', 'http://licenseit.ru/wiki/index.php/BSD_License', 'University of California, Berkeley', '1989-12-31 18:00:00'),
(15, 'Paint.Net', 'freeware', 'https://www.getpaint.net/license.html', NULL, NULL, NULL),
(16, 'Bandizip', 'freeware', 'https://www.bandisoft.com/bandizip/help/license-policy/', NULL, NULL, NULL),
(17, 'IZArc', 'freeware', 'https://www.izarc.org/license', NULL, NULL, NULL),
(18, 'VSDC Free Video Editor', 'freeware', 'https://www.videosoftdev.com/ru/terms-and-conditions', NULL, NULL, NULL),
(19, 'DaVinci Resolve', 'freeware', NULL, NULL, NULL, NULL),
(20, 'Free Audio Editor', 'freeware', NULL, NULL, NULL, NULL),
(21, 'mp3DirectCut', 'freeware', NULL, NULL, NULL, NULL),
(22, 'FreeCommander', 'freeware', 'https://freecommander.com/ru/лицензия/', NULL, NULL, NULL),
(23, 'Multi Commander', 'freeware', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `normative_documents`
--

CREATE TABLE `normative_documents` (
  `id` int(10) UNSIGNED NOT NULL,
  `form` varchar(255) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `creation_date` datetime NOT NULL,
  `number` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `normative_documents`
--

INSERT INTO `normative_documents` (`id`, `form`, `name`, `creation_date`, `number`, `file`) VALUES
(1, 'Федеральный закон', 'Часть четвертая Гражданского кодекса Российской Федерации (статьи 1259, 1261, 1286, 1286.1)', '2006-12-17 21:00:00', '№ 230', '8bbd8b22-bbe5-46a9-b8c5-77396034f1bc.pdf'),
(2, 'Постановление правительства', 'Об установлении запрета на допуск программного обеспечения происходящего из иностранных государств, для целей осуществления закупок для обеспечения государственных и муниципальных нужд.', '2015-11-15 21:00:00', '№ 1236', 'cdaabbe2-33bb-44b8-9fc0-44a8eed1a456.pdf'),
(3, 'Приказ Министерства связи и массовых коммуникаций', 'Об утверждении Методических рекомендаций по использованию свободного программного обеспечения в деятельности федеральных органов исполнительной власти, включая критерии определения государственных информационных систем, при создании которых необходимо использовать свободное программное обеспечение, в том числе государственных информационных систем, предназначенных для оказания государственных и муниципальных услуг в электронном виде.', '2015-08-18 21:00:00', '№ 305', 'bc12c528-b480-4a26-87a0-8ec5e30fc08c.pdf'),
(4, 'Приказ Министерства цифрового развития, связи и массовых коммуникаций РФ', 'Об импортозамещении цифровых решений в органах управления Российской Федерации.', '2022-01-03 21:00:00', '№ МШ-П8-1-070-14732', '3d4a6f76-1795-4480-babe-c8ab770259f2.pdf'),
(5, 'ГОСТ Р', 'Информационные технологии. Свободное программное обеспечение. Общие положения.', '2011-12-31 20:00:00', '№ 54593-2011', 'a892612c-de4e-4453-89b0-4dd7f7e30361.pdf'),
(6, 'Приказ Министерства цифрового развития, связи и массовых коммуникаций ', 'Об утверждении классификатора программ для электронных вычислительных машин и баз данных', '2020-09-21 21:00:00', '№ 486', 'b5a569cc-4af9-4b37-8351-ab6cc3e90044.pdf'),
(7, 'ГОСТ Р', 'Интеллектуальная собственность. Термины и определения', '2012-12-26 20:00:00', '№ 55386-2012', 'e2326bb1-c554-4d7b-ae07-f54790606995.pdf'),
(8, 'ГОСТ', 'Оценка качества программных средств. Общие положения', '1999-05-27 20:00:00', '№ 28195-99', 'ec90f2d7-074a-42ee-9ae5-ea430db88d47.pdf'),
(9, 'Постановление Правительства', 'Об утверждении дополнительных требований к программам для электронных вычислительных машин и базам данных, сведения о которых включены в реестр российского программного обеспечения, и внесении изменений в Правила формирования и ведения единого реестра российских программ для электронных вычислительных машин и баз данных', '2017-03-22 21:00:00', '№ 325', '51191c93-65fa-489b-a2eb-6c34a05dc24d.pdf'),
(10, 'Распоряжение Правительства', 'Перечень российских программ для электронных вычислительных машин, которые должны быть предварительно установлены на отдельные виды технически сложных товаров в 2022 году', '2021-07-30 21:00:00', '№ 2129-р', '8cda1734-2574-4d14-b307-0ae6701ae636.pdf');

-- --------------------------------------------------------

--
-- Структура таблицы `operation_systems`
--

CREATE TABLE `operation_systems` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `operation_systems`
--

INSERT INTO `operation_systems` (`id`, `name`) VALUES
(3, 'linux'),
(1, 'windows 32-bit (x86)'),
(2, 'windows 64-bit (x64)');

-- --------------------------------------------------------

--
-- Структура таблицы `programs`
--

CREATE TABLE `programs` (
  `id` int(10) UNSIGNED NOT NULL,
  `program_type_id` int(10) UNSIGNED NOT NULL,
  `license_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `developer` varchar(255) DEFAULT NULL,
  `home_page_url` varchar(2083) DEFAULT NULL,
  `proprietary_counterparts` json DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `images` json DEFAULT NULL,
  `manual_url` varchar(2083) DEFAULT NULL,
  `rating` bigint(20) NOT NULL DEFAULT '0',
  `number_of_ratings` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `programs`
--

INSERT INTO `programs` (`id`, `program_type_id`, `license_id`, `name`, `description`, `developer`, `home_page_url`, `proprietary_counterparts`, `logo`, `images`, `manual_url`, `rating`, `number_of_ratings`) VALUES
(1, 1, 3, 'GIMP', '<b> Gimp</b> &nbsp;&mdash;GNU Image Manipulation Program или GIMP (&laquo;Гимп&raquo;)&nbsp;&mdash; свободно распространяемый растровый графический редактор, программа для создания и&nbsp;обработки растровой графики и&nbsp;частичной поддержкой работы с&nbsp;векторной графикой. Проект основан в&nbsp;1995 году Спенсером Кимбеллом и&nbsp;Питером Маттисом как дипломный, в&nbsp;настоящий момент поддерживается группой добровольцев. Типичные задачи, которые можно решать при помощи GIMP, включают в&nbsp;себя создание графики и&nbsp;логотипов, масштабирование и&nbsp;кадрирование фотографий, раскраску, комбинирование изображений с&nbsp;использованием слоёв, ретуширование и&nbsp;преобразование изображений в&nbsp;различные форматы.', 'Питер Маттис, Спенсер Кимбелл', 'https://www.gimp.org/', '[\"Photoshop\", \"Artipic\", \"Paint Shop Pro\"]', 'gimp_icon.png', '[\"gimp_screen.jpg\"]', 'https://docs.gimp.org/2.10/en/index.html', 90, 21),
(2, 1, 3, 'Krita', '<b>Krita</b>&nbsp;&mdash; бесплатный растровый графический редактор с&nbsp;открытым кодом, программное обеспечение, входящее в&nbsp;состав KDE. Ранее распространялось как часть офисного пакета Calligra Suite, но&nbsp;впоследствии отделилось от&nbsp;проекта и&nbsp;стало развиваться самостоятельно. Разрабатывается преимущественно для художников и&nbsp;фотографов.<br> Krita поддерживает редактирование слоев и&nbsp;масок (по&nbsp;аналогии с&nbsp;Adobe Photoshop), работу в&nbsp;различных цветовых пространствах и&nbsp;с&nbsp;различными цветовыми моделями&nbsp;&mdash; RGB, CMYK, LAB, в&nbsp;режиме от&nbsp;8&nbsp;до&nbsp;32&nbsp;бит с&nbsp;плавающей точкой на&nbsp;канал. Кроме того, реализованы популярные фильтры (такие как нерезкое маскирование), корректирующие слои, маски и&nbsp;динамические фильтры, а&nbsp;также серия инструментов для ретуши.', 'Krita Foundation, KDE', 'https://krita.org/en/', '[\"Photoshop\", \"Artipic\", \"Paint Shop Pro\"]', 'krita_icon.png', '[\"krita_screen.jpg\"]', 'https://docs.krita.org/en/', 357, 96),
(3, 1, 11, 'Pinta', '<b>Pinta</b>&nbsp;&mdash; легковесный кроссплатформенный растровый графический редактор с&nbsp;открытым исходным кодом. Pinta является редактором с&nbsp;большим количеством функций, характерных для программного обеспечения такого класса, включая инструменты для рисования, фильтры и&nbsp;эффекты, инструменты для управления параметрами цвета (контрастность, яркость, преобразование в&nbsp;чёрно-белое изображение и&nbsp;т.&nbsp;п.). <br> Разработчики Pinta сделали акцент на&nbsp;удобство, что отражается в&nbsp;следующих особенностях программы: <br> простое меню инструментов и&nbsp;возможностей;<br> безлимитная история действий (с&nbsp;возможностью отмены любого);<br> многоязычный интерфейс (55&nbsp;языков);<br> гибкая компоновка панели инструментов, в&nbsp;том числе с&nbsp;плавающими окнами и&nbsp;стыковкой по&nbsp;краю изображения.<br> Базовые инструменты включают: кисть и&nbsp;карандаш, заливка цветом и&nbsp;градиент, ластик, инструменты выделения (прямоугольное, эллиптическое, лассо, волшебная палочка, пипетка) инструменты для перемещения и&nbsp;копирования, текст, линейка и&nbsp;кривые, инструменты для рисования геометрических фигур, а&nbsp;также лупа для масштабирования. Стандартная палитра цветов предоставляет доступ сразу к&nbsp;48&nbsp;цветам, с&nbsp;возможностью выбора любого другого. При этом из&nbsp;меню программы также доступны: кадрирование, изменение размера изображения и&nbsp;холста, отражение и&nbsp;поворот.', 'Jonathan Pobst,  Robert Nordan,Olivier Dufour', 'https://www.pinta-project.com/', '[\"Photoshop\", \"Artipic\", \"Paint Shop Pro\"]', 'pinta_icon.png', '[\"pinta_screen.jpg\"]', 'https://www.pinta-project.com/user-guide/', 97, 23),
(4, 1, 15, 'Paint.NET', '<b>Paint.NET</b>&nbsp;&mdash; бесплатный (исключением является версия для Microsoft Store) растровый графический редактор для Windows&nbsp;NT, основанный на .NET Framework. Приложение начато как проект, разработанный группой студентов Университета штата Вашингтон для Microsoft Windows под руководством Microsoft.', 'Rick Brewster, dotPDN LLC', 'https://www.getpaint.net/', '[\"Photoshop\", \"Artipic\", \"Paint Shop Pro\"]', 'paint-net_icon.png', '[\"paint.NET_screen.png\"]', 'https://www.getpaint.net/doc/latest/index.html', 46, 12),
(5, 1, 2, 'Inkscape', '<b>Inkscape</b>&nbsp;&mdash; свободно распространяемый векторный графический редактор, удобен для создания как художественных, так и&nbsp;технических иллюстраций (вплоть до&nbsp;использования в&nbsp;качестве САПР общего назначения, чему также способствует лёгкость обмена чертежами). Это стало возможным во&nbsp;многом благодаря открытому формату SVG, развиваемому консорциумом W3C. Формат SVG позволяет создавать иллюстрации различного типа, в&nbsp;том числе анимированные. Поскольку SVG основан на&nbsp;расширяемом языке разметки (XML), к&nbsp;нему можно писать расширения, чем авторы Inkscape и&nbsp;пользуются.', 'Команда разра-ботчиков Inkscape', 'https://inkscape.org/ru/', '[\"CorelDraw\", \"Adobe Illustrator\", \"Xara Designer\"]', 'inkscape_icon.png', '[\"inkscape_screen.jpeg\"]', 'https://inkscape.org/learn/books/', 7, 2),
(6, 2, 8, 'ОpenOffice Writer', '<b>OpenOffice Writer</b> (ранее OpenOffice.org Writer)&nbsp;&mdash; текстовый процессор и&nbsp;визуальный (WYSIWYG) редактор HTML, входит в&nbsp;состав Apache OpenOffice и&nbsp;OpenOffice.org; является свободным программным обеспечением.', 'Apache Software Foundation', 'https://www.openoffice.org/ru/', '[\"Microsoft Word\", \"Мой офис\", \"Р7 - Офис Документ\"]', 'openoffice_Writer_icon.png', '[\"openoffice_Writer_screen.jpg\"]', 'https://www.openoffice.org/documentation/index.html', 7, 2),
(7, 2, 10, 'LibreOffice Writer', '<b>LibreOffice Writer</b>&nbsp;&mdash; текстовый процессор и&nbsp;визуальный редактор HTML, входящий в&nbsp;состав офисного пакета LibreOffice. Является ответвлением текстового процессора OpenOffice Writer, который в&nbsp;свою очередь основан на&nbsp;StarOffice. Writer сходен с&nbsp;Microsoft Word и&nbsp;Corel&rsquo;s WordPerfect. <br> LibreOffice Writer распространяется по&nbsp;свободной лицензии Mozilla Public License v2.0. Writer, как и&nbsp;остальные программы офисного набора LibreOffice, создан для работы в&nbsp;Linux, FreeBSD, macOS и&nbsp;Windows.', 'The Document Foundation', 'https://www.libreoffice.org/', '[\"Microsoft Word\", \"Мой офис\", \"Р7 - Офис Документ\"]', 'libreoffice_Writer_icon.png', '[\"libreoffice_Writer_screen.png\"]', 'https://documentation.libreoffice.org/en/english-documentation/', 9, 2),
(8, 3, 5, '7-Zip', '<b>7-Zip</b>&nbsp;&mdash; свободный файловый архиватор с&nbsp;высокой степенью сжатия данных. Поддерживает несколько алгоритмов сжатия и&nbsp;множество форматов данных, включая собственный формат 7z&nbsp;c&nbsp;высокоэффективным алгоритмом сжатия LZMA. Программа разрабатывается с&nbsp;1999&nbsp;года, она бесплатна и&nbsp;имеет открытый исходный код, большая часть которого свободно распространяется на&nbsp;условиях лицензии GNU LGPL, за&nbsp;исключением кода распаковщика UnRAR, который имеет ограничения. Основная платформа&nbsp;&mdash; Windows (в&nbsp;том числе Windows&nbsp;CE), где доступны две версии программы: с&nbsp;графическим интерфейсом и&nbsp;версия для командной строки. Консольная версия была портирована сообществом разработчиков для систем стандарта POSIX под общим названием p7zip. Портированные версии для других систем, также как и&nbsp;оригинальная программа 7-Zip, доступны на&nbsp;сайте системы SourceForge (по&nbsp;состоянию на&nbsp;5&nbsp;сентября 2017&nbsp;года, программа была скачана с&nbsp;сайта более 412 млн раз). 7-Zip является победителем SourceForge.net Community Choice Awards 2007 года в&nbsp;категориях &laquo;Лучший проект&raquo; и&nbsp;&laquo;Лучший технический дизайн&raquo;. <br> <u>Поддерживаемые алгоритмы: </u> LZMA, LZMA2, PPMd, Bzip2, Deflate и&nbsp;Deflate64. <br> <u>Поддерживаемые форматы: </u> <br> &bull; упаковка и&nbsp;распаковка: 7z, BZIP2 (BZ2, TB2, TBZ, TBZ2), GZIP (GZ, TGZ), TAR, ZIP (JAR), XZ, WIM;<br> &bull; только распаковка: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, MBR, ISO, LZH (LHA), LZMA, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, XAR, Z&nbsp;(TAR). <br> Также 7-Zip имеет собственную систему плагинов, позволяющую сторонним разработчикам добавлять в&nbsp;7-Zip поддержку дополнительных форматов файлов. Существуют плагины, позволяющие распаковывать следующие форматы: LZIP, ASAR, CCD/IMG, CDI, CHD (v4), CSO, CUE/BIN, ECM, GDI, ISZ, MDS/MDF, NRG, S01, E01, Ex01, L01, Lx01, AFF, AD1, MIME, UUE, XXE, yEnc.', 'Павлов И.В.', 'https://www.7-zip.org/', '[\"WinRAR\", \"WinZip\"]', '7-zip_icon.png', '[\"7zip_screen.png\"]', 'https://www.7-zip.org/faq.html', 5, 1),
(9, 3, 5, 'PeaZip', '<b>PeaZip</b>&nbsp;&mdash; свободный и&nbsp;бесплатный кроссплатформенный архиватор и&nbsp;графическая оболочка для других архиваторов. Исходный код программы написан на&nbsp;Free Pascal и&nbsp;собран в&nbsp;Lazarus. PeaZip распространяется для Windows 9x, Windows&nbsp;NT (в&nbsp;том числе и&nbsp;для свободной, большей частью совместимой с&nbsp;Windows NT&nbsp;операционной системы ReactOS) и&nbsp;Linux, как в&nbsp;инсталляционных пакетах (установка для Windows, DEB, RPM, TGZ), так и&nbsp;в&nbsp;портативных версиях, которые не&nbsp;вносят никаких изменений в&nbsp;операционную систему. <br> PeaZip поддерживает собственный формат архивов Pea (с&nbsp;поддержкой сжатия, многотомных архивов и&nbsp;гибкой системы шифрования и&nbsp;контроля целостности) и&nbsp;другие форматы, используя для многих из&nbsp;них внешние программы и&nbsp;библиотеки.<br> Проект находится на&nbsp;SourceForge.net, откуда он&nbsp;был скачан, по&nbsp;состоянию на&nbsp;апрель 2013&nbsp;года, более 3,7 миллиона раз, а&nbsp;на&nbsp;январь 2022 года&nbsp;&mdash; более 6&nbsp;миллионов раз. <br> <u>Полная поддержка: </u> 7z, 7z-sfx, FreeArc&rsquo;s ARC/WRC, bzip2: bz2, tar.bz2, tbz, tb2, gzip: gz, tar.gz, tgz, PAQ8F/JD/L/O, LPAQ, ZPAQ, PEA, QUAD/BALZ/BCM, split (.001), tar, UPX, WIM, XZ, ZIP. <br> <u>Частичная поддержка</u> (распаковка, просмотр, тест архива) ACE, ARJ, CAB, CHM, COMPOUND файлы (MSI, DOC, PPT, XLS...), CPIO, DEB, ISO CD/DVD&nbsp;образы, Java-архивы (JAR, EAR, WAR), LZH, LZMA, NSIS установщики, форматы OpenOffice.org, PET/PUP (Puppy Linux installers), PAK/PK3/PK4, RAR, SMZIP, RPM, U3P, XPI, Z, ZIPX, Zstandard.', 'Джорджио Тани', 'https://peazip.github.io/', '[\"WinRAR\", \"WinZip\"]', 'peazip_icon.png', '[\"peazip_screen.png\"]', 'https://peazip.github.io/peazip-help.html#on-line_file_compression_manual', 4, 1),
(10, 3, 16, 'Bandizip', '<b>Bandizip</b> – это мощный архиватор, обеспечивающий скоростную обработку и удобные функции. Доступны бесплатная и платные редакции, поддерживающие целый ряд дополнительных функций. <br> <u>Сжатие: </u> <br> • Поддерживаемые форматы: ZIP, 7Z(lzma2), ZIPX(xz), EXE(sfx), TAR, TGZ, LZH(lh7), ISO(joliet), GZ, XZ;<br> • Изменение ZIP-архивов (добавление/удаление/переименование);<br> • До 6 раз более быстрое сжатие за счёт многопоточности;<br> • Создание зашифрованных архивов;<br> • Поддержка алгоритма шифрования AES256;<br> • Поддержка сжатия файлов размером более 4 ГБ;<br> • Сохранение имён файлов в ZIP-архивах в unicode или MBCS;<br> • Создание многотомных ZIP- и 7Z-архивов.<br> <u>Извлечение: </u> <br> • Поддерживаемые форматы: 7Z, ACE, AES, ALZ, ARJ, BH, BIN, BR, BZ, BZ2, CAB, Compound(MSI), DAA(1.0), DEB, EGG, GZ, IMG, ISO, ISZ, LHA, LZ, LZH, LZMA, PMA, RAR, RAR5, SFX(EXE), TAR, TBZ/TBZ2, TGZ, TLZ, TXZ, UDF, WIM, XPI, XZ, Z, ZIP, ZIPX, ZPAQ, ZSTD, NSIS;<br> • Наглядное отображение списка файлов в архиве;<br> • Извлечение только выбранных файлов, поддерживается перетаскивание;<br> • Возможность комментирования ZIP- и RAR-архивов;<br> • Извлечение TGZ/TBZ-архивов за один проход;<br> <u>Дополнительные возможности: </u> <br> • Проверка целостности файлов, чтобы убедиться, что архив не повреждён<br> • Поддержка функций изменения кодовой страницы<br> • Интеграция в меню Проводника ', 'Bandisoft International Inc', 'https://www.bandisoft.com/bandizip/', '[\"WinRAR\", \"WinZip\"]', 'bandiZip_icon.png', '[\"bandizip_screen.png\"]', 'https://www.bandisoft.com/bandizip/help/', 4, 1),
(11, 3, 3, 'Hamster ZIP', '<b>Hamster ZIP Archiver </b> &mdash; мощная и&nbsp;современная программа для работы с&nbsp;архивами, которая позволит с&nbsp;легкостью сжать или открыть любой архив, даст возможность использовать популярные облачные технологии, чтобы удобно создать копию важных файлов, быстро отправить семье пакет фотографий с&nbsp;отпуска или поделиться с&nbsp;коллегой своим проектом в&nbsp;2&nbsp;клика. <br> <u>Поддерживаемые типы файлов: </u> zip,7z,arj,bz2,tbz, gzip, deb, dmg, img, gz,tgz, hfs, lzh, rmp, pkg, z, taz, cab, iso, rar, tar, wim, swm, jar.', 'HamsterSoft', 'https://ziparchiver.hamstersoft.com/', '[\"WinRAR\", \"WinZip\"]', 'hamster_zip_icon.png', '[\"hamster_zip_screen.png\"]', 'https://hamstersoft.com/', 4, 1),
(12, 3, 17, 'IZArc', '<b> IZArc&nbsp;</b>&mdash; бесплатный файловый архиватор, работающий в&nbsp;среде Microsoft Windows. Поддерживает большое количество форматов сжатия и&nbsp;умеет работать с&nbsp;образами дисков.<br> Некоторые версии IZArc включали в&nbsp;свой инсталлятор рекламное (рекомендательное) ПО&nbsp;OpenCandy, но, по&nbsp;заявлению автора, современные версии более не&nbsp;содержат подобных нежелательных дополнений. <br> IZArc полностью поддерживает форматы сжатия 7-ZIP, BH, BZA, CAB, JAR, LHA, YZ1, ZIP, а&nbsp;также следующие типы файлов на&nbsp;открытие и&nbsp;разархивирование: A, ACE, ARC, ARJ, B64, BIN, BZ2, C2D, CDI, CPIO, DEB, ENC, GCA, GZ, GZA, HA, IMG, ISO, LIB, LZH, MBF, MDF, MIM, NRG, PAK, PDI, PK3, RAR, RPM, TAR, TAZ, TBZ, TGZ, TZ, UUE, WAR, XXE, Z, ZOO. <br> <u>Основные возможности и&nbsp;особенности IZArc: </u> <br> &bull; Поддержка образов диска (ISO, BIN, MDF, NRG, IMG, C2D, PDI, CDI)<br> &bull; Поддержка кириллицы в&nbsp;RAR-архивах<br> &bull; Преобразование архивов и&nbsp;образов дисков<br> &bull; Поддержка многотомных архивов<br> &bull; Создание самораспаковывающихся архивов<br> &bull; Преобразование самораспаковывающихся архивов в&nbsp;обычные<br> &bull; Восстановление поврежденных архивов<br> &bull; Шифрование c&nbsp;использованием 256-битного ключа AES<br> &bull; Интеграция в&nbsp;контекстное меню Проводника Windows<br> &bull; Поддержка автоматического сканирования на&nbsp;вирусы с&nbsp;использованием антивирусов<br> &bull; Поддержка различных языков интерфейса, в&nbsp;том числе русского.', 'Иван Захарьев', 'https://www.izarc.org/', '[\"WinRAR\", \"WinZip\"]', 'izarc_icon.png', '[\"izarc_screen.png\"]', 'https://www.izarc.org/tutorials', 9, 2),
(13, 4, 8, 'OpenOffice Impress ', '<b>OpenOffice Impress </b> (ранее OpenOffice.org Impress)&nbsp;&mdash; программа подготовки презентаций, входит в&nbsp;состав Apache OpenOffice и&nbsp;OpenOffice.org. Способна создавать PDF файлы из&nbsp;презентаций, может открывать, редактировать и&nbsp;сохранять файлы в&nbsp;нескольких форматах, включая собcтвенный формат .ODP, а&nbsp;также .PPT и .PPTX который используется в&nbsp;Microsoft PowerPoint. <br> По&nbsp;умолчанию в&nbsp;OpenOffice Impress присутствует мало встроенных шаблонов, но&nbsp;имеется возможность скачать множество других шаблонов с&nbsp;официального сайта. <br> Пользователи OpenOffice Impress могут установить Open Clip Art Library, которая содержит большую галерею изображений для использования в&nbsp;презентациях и&nbsp;рисунках. Дистрибутивы GNU/Linux Debian, Gentoo и&nbsp;Ubuntu содержат пакет openclipart, готовый для скачивания и&nbsp;установки из&nbsp;онлайн-репозиториев программного обеспечения.\n', ' Apache Software Foundation', 'https://www.openoffice.org/ru/', '[\"Microsoft PowerPoint\", \"Мой офис Презентация\", \"Р7 - Офис Презентация\"]', 'openoffice_Impress_icon.png', '[\"openoffice_Impress_screen.png\"]', 'https://www.openoffice.org/documentation/index.html', 4, 1),
(14, 4, 10, 'LibreOffice Impress ', '<b>LibreOffice Impress</b> предлагает широкий спектр простых в&nbsp;использовании инструментов для рисования и&nbsp;построения диаграмм, а&nbsp;также добавлять в&nbsp;презентцию анимацию и&nbsp;эффекты слайд-шоу. Инструмент Fontworks позволяет создавать 2D- и&nbsp;3D-изображения из&nbsp;текста. Impress позволяет создавать и&nbsp;контролировать 3D-сцены, включающие большое количество объектов и&nbsp;компонентов.<br> Impress поддерживает несколько мониторов, а&nbsp;встроенное расширение Presenter Console дает вам еще больший контроль над слайд-шоу, например, возможность видеть предстоящий слайд, просматривать заметки к&nbsp;слайду и&nbsp;управлять таймером презентации, пока аудитория смотрит на&nbsp;текущий слайд.\n', 'The Document Foundation', 'https://www.libreoffice.org/', '[\"Microsoft PowerPoint\", \"Мой офис Презентация\", \"Р7 - Офис Презентация\"]', 'libreoffice_Impress_icon.png', '[\"libreoffice_Impress_screen.jpg\"]', 'https://documentation.libreoffice.org/en/english-documentation/', 5, 1),
(15, 5, 8, 'OpenOffice Calc', '<b>OpenOffice Calc</b> (ранее OpenOffice.org Calc)&nbsp;&mdash; табличный процессор, входящий в&nbsp;состав Apache OpenOffice и&nbsp;OpenOffice.org. С&nbsp;его помощью можно анализировать вводимые данные, заниматься расчётами, прогнозировать, сводить данные с&nbsp;разных листов и&nbsp;таблиц, строить диаграммы и&nbsp;графики. <br> Пошаговый ввод формул в&nbsp;ячейки электронных таблиц с&nbsp;помощью Мастера облегчает формирование сложных и&nbsp;вложенных формул, демонстрирует описания каждого параметра и&nbsp;конечный результат на&nbsp;любом этапе ввода. <br> Условное форматирование и&nbsp;стили ячеек позволяют упорядочить готовые данные, а&nbsp;сводные таблицы и&nbsp;графики показывают итоги работы. <br> Более двух десятков форматов импорта и&nbsp;экспорта файлов, включая функции импорта текста, позволяют оперировать практически любыми данными. Также, с&nbsp;помощью специального инструмента можно импортировать данные из&nbsp;других источников, например, баз данных; а&nbsp;можно создать обновляемый диапазон, чтобы импортируемые данные всегда были актуальны. Поддерживаются и&nbsp;связи между разными электронными таблицами, и&nbsp;совместное редактирование данных (начиная с&nbsp;версии OpenOffice.org 3.0). <br> Доступны разнообразные настройки для печати готовых листов на&nbsp;принтере: масштаб, поля, колонтитулы. А&nbsp;встроенная проверка орфографии, как в&nbsp;текстовом редакторе, позволит улучшить качество готового отчёта.\n', ' Apache Software Foundation', 'https://www.openoffice.org/ru/', '[\"Microsoft Excel\", \"Мой офис Таблица\", \"Р7 - Офис Таблица\"]', 'openoffice_Calc_icon.png', '[\"openoffice_Calc_screen.jpg\"]', 'https://www.openoffice.org/documentation/index.html', 4, 1),
(16, 5, 10, 'LibreOffice Calc', '<b>LibreOffice Calc</b>&nbsp;&mdash; табличный процессор, входящий в&nbsp;состав офисного пакета LibreOffice. Является ответвлением табличного процессора OpenOffice Calc. LibreOffice Calc распространяется по&nbsp;свободной лицензии Mozilla Public License v2.0. <br>\nCalc сохраняет электронные таблицы в&nbsp;своем родном формате Open Document Format (.ods), но&nbsp;также может открывать и&nbsp;сохранять файлы в&nbsp;формате Microsoft Excel для отправки людям, которые все еще привязаны к&nbsp;продуктам Microsoft. <br>\nПоддерживает 1&nbsp;миллион рядов/строк в&nbsp;электронной таблице, что делает Calc вполне подходящим для сложных научных или финансовых документов. Количество столбцов не&nbsp;превышает 1024 (в&nbsp;Excel&nbsp;&mdash; 16384&nbsp;столбцов).\n', 'The Document Foundation', 'https://www.libreoffice.org/', '[\"Microsoft Excel\", \"Мой офис Таблица\", \"Р7 - Офис Таблица\"]', 'libreoffice_Calc_icon.png', '[\"libreoffice_Calc_screen.jpg\"]', 'https://documentation.libreoffice.org/en/english-documentation/', 53, 12),
(17, 6, 3, 'Blender', '<b>Blender</b>&nbsp;&mdash; профессиональное свободное и&nbsp;открытое программное обеспечение для создания трёхмерной компьютерной графики, включающее в&nbsp;себя средства моделирования, скульптинга, анимации, симуляции, рендеринга, постобработки и&nbsp;монтажа видео со&nbsp;звуком, компоновки с&nbsp;помощью &laquo;узлов&raquo; (Node Compositing), а&nbsp;также создания 2D-анимаций. В&nbsp;настоящее время пользуется большой популярностью среди бесплатных 3D-редакторов в&nbsp;связи с&nbsp;его быстрым стабильным развитием и&nbsp;технической поддержкой. <br> Характерной особенностью пакета Blender выступает его небольшой размер по&nbsp;сравнению с&nbsp;другими популярными пакетами для 3D-моделирования. Документация в&nbsp;поставку не&nbsp;входит, но&nbsp;доступна онлайн. Демонстрационные сцены можно скачать на&nbsp;официальном сайте или на&nbsp;сайте открытых проектов &laquo;Blender Cloud&raquo;. <br> <u>Функции пакета</u>: <br> &bull; Поддержка разнообразных геометрических примитивов, включая полигональные модели, систему быстрого моделирования в&nbsp;режиме subdivision surface (SubSurf), кривые Безье, поверхности NURBS, metaballs (метасферы), скульптурное моделирование и&nbsp;векторные шрифты. <br> &bull; Универсальные встроенные механизмы рендеринга и&nbsp;интеграция с&nbsp;внешними рендерерами YafRay, LuxRender и&nbsp;многими другими. <br> &bull; Инструменты анимации, среди которых инверсная кинематика, скелетная анимация и&nbsp;сеточная деформация, анимация по&nbsp;ключевым кадрам, нелинейная анимация, редактирование весовых коэффициентов вершин, ограничители. <br> &bull; Динамика мягких тел (включая определение коллизий объектов при взаимодействии), динамика твёрдых тел на&nbsp;основе физического движка Bullet. <br> &bull; Система частиц включающая в&nbsp;себя систему волос на&nbsp;основе частиц. <br> &bull; Модификаторы для применения неразрушающих эффектов. <br>\n&bull; Язык программирования Python используется как средство определения интерфейса, создания инструментов и&nbsp;прототипов, системы логики в&nbsp;играх, как средство импорта/экспорта файлов (например, COLLADA), автоматизации задач. <br> &bull; Базовые функции нелинейного видео и&nbsp;аудио монтажа. <br> &bull; Композитинг видео, работа с&nbsp;хромакеем. <br> &bull; Трекинг камеры и&nbsp;объектов. <br> &bull; Real-time контроль во&nbsp;время физической симуляции и&nbsp;рендеринга. <br> &bull; Процедурное и&nbsp;node-based текстурирование, а&nbsp;также возможность рисовать текстуру прямо на&nbsp;модели. <br> &bull; Grease Pencil&nbsp;&mdash; инструмент для 2D-анимации в&nbsp;полном 3D-пайплайне. <br> &bull; Blender Game Engine&nbsp;&mdash; подпроект Blender, предоставляющий интерактивные функции, такие как определение коллизий, движок динамики и&nbsp;программируемая логика. Также он&nbsp;позволяет создавать отдельные real-time-приложения начиная от&nbsp;архитектурной визуализации до&nbsp;видео игр. Удалён в&nbsp;версии 2.8.', 'Blender Foundation', 'https://www.blender.org/', '[\"Autodesk 3ds Max\", \"Autodesk Maya\", \"Zbrush\"]', 'blender_icon.png', '[\"blender_screen.png\"]', 'https://docs.blender.org/', 35, 7),
(18, 6, 14, 'Wings 3D ', '<b>Wings 3D&nbsp;</b>&mdash; это бесплатная программа 3D-моделирования с&nbsp;открытым исходным кодом, на&nbsp;которую повлияли программы Nendo и&nbsp;Mirai от&nbsp;компании Izware. Программа получила название по&nbsp;названию технологии обработки полигонов, применённой в&nbsp;программе. Большинство пользователей называют её&nbsp;просто Wings. Wings 3D&nbsp;доступна для многих платформ, включая Windows, Linux и&nbsp;Mac OS&nbsp;X. Программа использует окружение и&nbsp;язык программирования Erlang. <br> <u>Возможности: </u> <br> &bull; Разнообразные инструменты выделения и&nbsp;моделирования <br> &bull; Инструмент моделирования поддерживает примагничивание и&nbsp;векторные операции<br> &bull; Настраиваемые интерфейс пользователя и&nbsp;горячие клавиши<br> &bull; Режим Tweak Mode, позволяющий быстро изменять модель<br> &bull; Поддержка источников освещения, материалов, текстур, вершин<br> &bull; Авторазвёртка<br> &bull; Поддержка Ngon мешей. <br> &bull; Менеджер расширений. <br> &bull; Импорт и&nbsp;экспорт во&nbsp;многих популярных форматах', 'Björn Gustavsson, Dan Gudmundsson, Richard Jones и другие', 'http://www.wings3d.com/', '[\"Autodesk 3ds Max\", \"Autodesk Maya\", \"Zbrush\"]', 'wings3d_icon.png', '[\"wings3d_screen.png\"]', 'http://www.wings3d.com/?page_id=252', 4, 1),
(19, 6, 2, 'Art of Illusion', '<b>Art of&nbsp;Illusion&nbsp;</b>&mdash; это бесплатная студия 3D-моделирования и&nbsp;рендеринга с&nbsp;открытым исходным кодом. Эта программа для 3D-моделирования, текстурирования, рейтрейсинга, а&nbsp;также рендеринга статичных изображений или анимации. Art of&nbsp;Illusion представляет собой инструмент 3D-моделирования, в&nbsp;котором при простом интерфейсе есть многие функции, предоставляемые коммерческими аналогами (Autodesk 3ds Max, Autodesk Maya, Blender). Основные особенности включают инструменты моделирования на&nbsp;основе поверхности подразделения, анимацию на&nbsp;основе скелета и&nbsp;графический язык для разработки процедурных текстур и&nbsp;материалов. <br> Текущая версия&nbsp;&mdash; 3.2.0, выпущенная 13&nbsp;января 2021&nbsp;года. Эта версия является стабильной и&nbsp;достаточно мощной, чтобы ее&nbsp;можно было использовать для серьезной работы с&nbsp;анимацией высокого класса.<br> <u>Возможности: </u> <br> &bull; Список объектов, окна моделирования, панель анимации<br>\n&bull; Всплывающие подсказки и&nbsp;информативные иконки<br> &bull; Встроенная документация и&nbsp;система справки<br> &bull; Расширения доступны в&nbsp;виде скриптов или плагинов с&nbsp;возможностью автоматической <br> установки и&nbsp;обновления из&nbsp;репозитория (необходимо соединение с&nbsp;интернетом) <br> &bull; Сетка и&nbsp;режимы отображения: Wireframe, Smooth, Textured.', 'Peter Eastman', 'http://www.artofillusion.org/', '[\"Autodesk 3ds Max\", \"Autodesk Maya\", \"Zbrush\"]', 'art_of_Illusion_icon.png', '[\"art_of_Illusion_screen.jpg\"]', 'http://www.artofillusion.org/documentation#', 4, 1),
(20, 7, 3, 'OpenShot Video Editor ', '<b>OpenShot Video Editor</b>&nbsp;&mdash; это свободный нелинейный видеоредактор с&nbsp;открытым исходным кодом для FreeBSD, Linux и&nbsp;Windows, построенный с&nbsp;помощью Python, GTK и&nbsp;MLT Framework. Проект был основан в&nbsp;августе 2008 года Джонатоном Томасом, с&nbsp;целью предоставления стабильного, свободного и&nbsp;простого в&nbsp;использовании видеоредактора.<br> <u>Возможности: </u> <br> &bull; Поддержка популярных аудио/видео/графических форматов (основанных на&nbsp;FFmpeg). <br> &bull; Интеграция с&nbsp;GNOME (поддержка drag and drop). <br> &bull; Поддержка мультитреков (проигрывание нескольких музыкальных дорожек за&nbsp;раз). <br> &bull; Изменение размеров, обрезка, снимок и&nbsp;резка видео. <br> &bull; Видеопереходы с&nbsp;предварительным просмотром в&nbsp;реальном времени. <br> &bull; Наложение изображений или водяных знаков. <br> &bull; Трёхмерные анимированные титры. <br> &bull; Поддержка готовых шаблонов для создания титров и&nbsp;субтитров. <br> &bull; Дружественная поддержка SVG для создания и&nbsp;включения титров и&nbsp;лицензий. <br> &bull; Прокрутка титров и&nbsp;лицензий при просмотре видео. <br> &bull; Сплошной цвет (включая Альфа-канал). <br> &bull; Поддержка ротоскопирования/последовательности изображений. <br> &bull; Drag and drop. <br> &bull; Степпинг (клавиши J, K&nbsp;и&nbsp;L). <br> &bull; Кодирование видео (основанный на&nbsp;FFmpeg). <br> &bull; Ключевой кадр (плавный переход с&nbsp;анимацией). <br> &bull; Цифровое масштабирование видео. <br> &bull; Скоростное изменение воспроизведения видео (или медленное и&nbsp;прочее). <br> &bull; Пользовательские переходы. <br> &bull; Изменение размера рамки кадра. <br> &bull; Микширование и&nbsp;редактирование аудио. <br> &bull; Заготовки для степпинга и&nbsp;лейаута. <br> &bull; Ken Burns effect (панорамирование над изображением). <br> &bull; Цифровые видео эффекты, включая яркость, гамма, оттенок, цвет, оттенки серого, хромакей (синий/зелёный экран), а&nbsp;также более 20&nbsp;других видео эффектов. <br> OpenShot предоставляет широкие возможности редактирования и&nbsp;компоновки, а&nbsp;также был разработан в&nbsp;качестве практического инструмента для работы с&nbsp;видео высокой чёткости, включая HDV и&nbsp;AVCHD. <br> При наличии Blender&nbsp;2.6.0 и&nbsp;выше можно также добавлять анимацию.', 'OpenShot Studios, LLC', 'https://www.openshot.org/', '[\"Adobe Premiere\", \"Adobe After Effects\", \"Pinnacle Studio\", \"Sony Vegas\"]', 'openShot_icon.png', '[\"openShot_screen.png\"]', 'https://www.openshot.org/user-guide/', 13, 4),
(21, 7, 3, 'Shotcut ', '<b>Shotcut</b>&nbsp;&mdash; это свободный видеоредактор для FreeBSD, Linux, MacOS и&nbsp;Windows. Разработку начал в&nbsp;2011 году Dan Dennedy с&nbsp;помощью фреймворка Media Lovin&rsquo; Toolkit, автором которого является он&nbsp;же.<br>  <u>Возможности: </u> <br> &bull; Поддержка новейших аудио и&nbsp;видео форматов благодаря FFmpeg<br> &bull; Поддерживает популярные форматы изображений, такие как BMP, GIF, JPEG, PNG, SVG, TIFF, WebP, а&nbsp;также последовательности изображений. <br> &bull; Анимации Lottie и&nbsp;rawr JSON<br> &bull; Импорт не&nbsp;требуется&nbsp;&mdash; встроенное редактирование временной шкалы<br> &bull; Поиск с&nbsp;точностью до&nbsp;кадра для многих форматов<br> &bull; Многоформатная временная шкала: смешивайте и&nbsp;подбирайте разрешения и&nbsp;частоты кадров в&nbsp;рамках проекта. <br> &bull; Захват веб-камеры<br> &bull; Захват звука<br> &bull; Поддержка разрешений 4K<br> &bull; Воспроизведение сетевого потока (HTTP, HLS, RTMP, RTSP, MMS, UDP) <br> &bull; Плагины видеогенератора Frei0r (например, цветные полосы и&nbsp;плазма) <br> &bull; Генераторы цвета, текста, шума и&nbsp;счетчиков<br> &bull; Экспорт EDL (CMX3600 Edit Decision List) <br> &bull; Экспорт одного кадра в&nbsp;виде изображения или видео в&nbsp;виде последовательности изображений<br> &bull; Видеофайлы с&nbsp;альфа-каналом&nbsp;&mdash; как чтение, так и&nbsp;запись<br> &bull; Преобразование тонов HDR в&nbsp;SDR<br> &bull; Дополнительный полнодиапазонный видеоввод, обработка и&nbsp;экспорт', 'Meltytech, LLC (Dan Dennedy)', 'https://shotcut.org/', '[\"Adobe Premiere\", \"Adobe After Effects\", \"Pinnacle Studio\", \"Sony Vegas\"]', 'shotcut_icon.png', '[\"shotcut_screen.jpg\"]', 'https://shotcut.org/tutorials/', 4, 1),
(22, 7, 18, 'VSDC Free Video Editor', '<b>VSDC Free Video Editor&nbsp;</b>&mdash; профессиональная программа для нелинейного монтажа и&nbsp;редактирования аудио, созданная компанией Flash-Integro LLC. VSDC способен обрабатывать видеофайлы любого формата и&nbsp;разрешения, включая 4К&nbsp;UHD, а&nbsp;также записи в&nbsp;формате 360 градусов и&nbsp;видео в&nbsp;3D. Редактор включает профессиональные инструменты цветокоррекции, а&nbsp;также возможность отслеживать движение объектов на&nbsp;видео с&nbsp;помощью модуля Motion tracking. Кроме того, VSDC поддерживает плагины VirtualDub, позволяет записывать видео с&nbsp;экрана рабочего стола, голосовые комментарии, DVD&nbsp;диски, экспортирует файлы без потери качества, а&nbsp;также конвертирует их&nbsp;в&nbsp;нужный формат для дальнейшей загрузки в&nbsp;Instagram, Facebook, YouTube и&nbsp;Twitter. <br><u>Возможности: </u> <br> &bull; Кадрирование, обрезка, разделение на&nbsp;части, объединение в&nbsp;один файл, поворот кадра на&nbsp;нужный угол, воспроизведение в&nbsp;обратном порядке, изменение громкости<br> &bull; Изменение исходного размера, качества и&nbsp;разрешения видеофайла<br> &bull; Стабилизация видео<br> &bull; Изменение скорости воспроизведения (включая режим рефрейминга Optical flow для эффекта замедленной съёмки) <br>\n&bull; Добавление текста и&nbsp;субтитров<br> &bull; Текстовые эффекты: Перекрашивание, Сдвиг положение, Трансформация текста<br> &bull; 70+&nbsp;эффектов перехода в&nbsp;разделе &laquo;Помощник слайдшоу&raquo;<br> &bull; Создание снэпшотов<br> &bull; Фильтр DeLogo, автоматически скрывающий лишние элементы в&nbsp;видео с&nbsp;помощью размытой или пиксельной маски<br> &bull; Преобразование видео 360 градусов в&nbsp;видео 2D<br> &bull; Преобразование 3D&nbsp;видео в&nbsp;2D&nbsp;видео<br> &bull; Цветные фильтры для видео в&nbsp;стиле Instagram<br> &bull; Два режима масок типа &laquo;Inpainting&raquo; для восстановения повреждённых частей видео или изображений<br> &bull; Полнофункциональный текстовый редактор для заголовков и&nbsp;эффектов с&nbsp;применением текста<br> &bull; Встроенный видео конвертер с&nbsp;поддержкой более 20&nbsp;форматов<br> &bull; Встроенный инструмент для записи экрана<br>\n&bull; Встроенный инструмент для записи голоса<br> &bull; Chroma Key&nbsp;&mdash; инструмент, позволяющий заменить однотонный фон (как правило, зеленый или синий) на&nbsp;видео или изображении<br> &bull; 15&nbsp;фильтров, включая Деинтерлейсинг, Пикселизацию, Размытие и&nbsp;другие<br> &bull; 8&nbsp;динамических эффектов, включая Зум, Зеркало, Переворот и&nbsp;другие<br> &bull; Видеоэффекты OpenGL: Блики, Блики Боке, Капли дождя<br> &bull; Эффекты перехода с&nbsp;использованием прозрачности, включая эффект горящей бумаги, переход через искажение изображения, поворот страницы и&nbsp;так далее. <br> &bull; Динамические телевизионные эффекты (старый&nbsp;ТВ, сломанный ТВ, ТВ&nbsp;шумы) <br> &bull; Поддержка плагинов VirtualDub<br>\n&bull; Диаграммы и&nbsp;графики&nbsp;&mdash; гистограмма, стековая, точечная, пузырьковая, линейная, корреляционная, динамическая, пошаговая, сплайновая, с&nbsp;заливкой, диаграмма ганта, круговая диаграмма, круговая диаграмма 3d, 3d&nbsp;тор, радарная точечная диаграмма, радарная диаграмма, финансовая диаграмма, свечная финансовая диаграмма и&nbsp;т.д. <br> &bull; Монтаж видео 3D&nbsp;и&nbsp;360&nbsp;градусов. <br> &bull; Редактор LUT&nbsp;&mdash; позволяет не&nbsp;только применять встроенные и&nbsp;сторонние LUTs к&nbsp;видео и&nbsp;изображениям, но&nbsp;и&nbsp;изменять их&nbsp;настройки, а&nbsp;также создавать собственные LUTs с&nbsp;нуля<br> &bull; Кривые RGB, позволяющая корректировать видео в&nbsp;соответствии с&nbsp;выбранным цветом (красный, зеленый, синий или белый) <br> &bull; Кривые тона и&nbsp;насыщенности, позволяющие редактировать изображение, усиливая и&nbsp;приглушая выбранные цветовые оттенки<br> &bull; Инструмент Градиент, позволяющий создать плавный переход между цветами<br> &bull; Audio Spectrum (Аудиоспектр)&nbsp;&mdash; инструмент динамической визуализации музыки<br> &bull; Встроенная функция Voice over позволяет записывать и&nbsp;накладывать голос<br> &bull; Эффекты звуковой амплитуды (нормализация, затухание, возрастание) помогают улучшить звучание<br> &bull; Эффекты задержки, темпа, тембра придают звуковым дорожкам соответствующее звучание: как если&nbsp;бы они исполнялись хором, растягивались во&nbsp;времени или воспроизводились в&nbsp;обратном направлении<br> &bull; Инструменты DeNoise (Медианный фильтр и&nbsp;Гейт) снижают уровень шума в&nbsp;отснятом видео<br> &bull; Возможность одновременной работы с&nbsp;несколькими звуковыми дорожками<br>\n&bull; Инструмент &laquo;Редактировать бит&raquo;, позволяющий автоматически синхронизировать появление и&nbsp;интенсивность применения видеоэффектов с&nbsp;частотой и&nbsp;громкостью звука.', 'Multilab LLC', 'http://www.videosoftdev.com/', '[\"Adobe Premiere\", \"Adobe After Effects\", \"Pinnacle Studio\", \"Sony Vegas\"]', 'vsdc_icon.png', '[\"vsdc_screen.jpg\"]', 'http://www.videosoftdev.com/how-to-use-free-video-editor', 5, 1),
(23, 7, 19, 'DaVinci Resolve ', '<b>DaVinci Resolve</b> (первоначально da&nbsp;Vinci Resolve)&nbsp;&mdash; это приложение для цветокоррекции и&nbsp;нелинейного редактирования видео (NLE) для macOS, Windows и&nbsp;Linux, разработанное da&nbsp;Vinci Systems, после её&nbsp;приобретения в&nbsp;2009 году разрабатывается Blackmagic Design. Помимо платной версии программы (называемой DaVinci Resolve Studio) Blackmagic Design также распространяет бесплатную версию с&nbsp;урезанной функциональностью, под названием DaVinci Resolve (первоначально DaVinci Resolve Lite). <br>  <u>Возможности: </u> <br> Совместимые видео форматы: AVI , MP4 , QuickTime , DNxHD , XAVC; <br> Форматы обмена данными: XML , EDL , AAF , DCP , MXF , CinemaDNG; <br> Аудиоформаты: AAC, AIFF, WAVE; <br> Форматы изображений: RAW, OpenEXR, TIFF , DPX R3D , JPEG , JPEG 2000. <br> Поддерживаемые типы подключаемых модулей: OpenFX, VST, AU. <br> Начиная с&nbsp;версии 12.2 (декабрь 2015&nbsp;г.) Resolve включает поддержку стандарта гибридного логарифмического гамма (HLG) для расширенного динамического диапазона.', 'Blackmagic Design Pty. Ltd', 'https://www.blackmagicdesign.com/products/davinciresolve', '[\"Adobe Premiere\", \"Adobe After Effects\", \"Pinnacle Studio\", \"Sony Vegas\"]', 'daVinci_resolve_icon.png', '[\"daVinciResolve_screen.jpg\"]', 'https://www.blackmagicdesign.com/products/davinciresolve/training', 4, 1),
(24, 8, 2, 'Audacity ', '<b>Audacity</b> (англ. audacity&nbsp;&mdash; смелость; [ɔː&rsquo;d&aelig;sətɪ]) &mdash;свободный многоплатформенный аудиоредактор звуковых файлов, ориентированный на&nbsp;работу с&nbsp;несколькими дорожками. Программа была выпущена и&nbsp;распространяется на&nbsp;условиях GNU General Public License. <br> <u>Возможности: </u> <br> &bull; импорт и&nbsp;экспорт файлов WAV, MP3 (с&nbsp;использованием кодировщика LAME MP3), Vorbis, FLAC и&nbsp;других форматов; <br> &bull; запись с&nbsp;микрофона, линейного входа и&nbsp;других источников; <br> &bull; запись с&nbsp;одновременным прослушиванием имеющихся дорожек; <br> &bull; запись до&nbsp;16&nbsp;каналов одновременно (необходима многоканальная звуковая карта); <br> &bull; эффекты и&nbsp;расширения как в&nbsp;комплекте поставки, так и&nbsp;устанавливаемые отдельно (LADSPA, либо на&nbsp;функциональном языке Nyquist); <br> &bull; индикаторы уровня записи и&nbsp;воспроизведения; <br> &bull; изменение темпа с&nbsp;сохранением высоты тона; <br> &bull; изменение высоты тона с&nbsp;сохранением темпа; <br> &bull; удаление шума по&nbsp;образцу; <br>\n&bull; спектральный анализ с&nbsp;использованием преобразования Фурье с&nbsp;различными формами окна; <br> &bull; воспроизведение множества дорожек одновременно (без поддержки многоканального звука&nbsp;&mdash; при воспроизведении используются только два канала, в&nbsp;которые микшируются все дорожки); <br> &bull; сведение дорожек с&nbsp;разными качественными характеристиками с&nbsp;автоматическим преобразованием к&nbsp;заданным характеристикам проекта в&nbsp;режиме реального времени; <br> &bull; результаты могут сохраняться во&nbsp;множество форматов, обеспечиваемых библиотекой libsndfile.', ' Muse Group', 'https://manual.audacityteam.org/', '[\"Sound Forge\", \"Adobe Audition\"]', 'audacity_icon.png', '[\"audacity_screen.png\"]', 'https://manual.audacityteam.org/', 5, 1),
(25, 8, 20, 'Free Audio Editor', '<b>Free Audio Editor</b> (рус. Бесплатный аудиоредактор)&nbsp;&mdash; бесплатный для некоммерческого использования редактор файлов звукозаписи для платформы Windows, ориентированный на&nbsp;работу с&nbsp;двумя дорожками. <br>  <u>Возможности: </u> <br> &bull; Создание, импорт и&nbsp;экспорт файлов звукозаписи. <br> &bull; Отображение файлов звукозаписи в&nbsp;виде формы волны или в&nbsp;виде спектра с&nbsp;возможностью масштабирования. <br> &bull; Запись (с&nbsp;последующим воспроизведением) с&nbsp;любого доступного источника звука. <br> &bull; Бесплатная версия Free Audio Editor сохраняет результаты работы только в&nbsp;формат *.wav. <br> &bull; Поддержка форматов звукозаписи: MP3, WMA, WAV и&nbsp;OGG. <br> &bull; Применение эффектов: задержка, частоторегуляция (темброблок), нарастание и&nbsp;затухание, фланжер, зеркальное отражение формы волны, нормализация, обратное воспроизведение, вставка тишины, протяжка, вибрато, эхо. <br> &bull; Загрузка видео с&nbsp;YouTube с&nbsp;последующим импортом дорожки звукозаписи.\n', 'FAE Distribution, Inc.', 'https://free-audio-editor.com/#blog', '[\"Sound Forge\", \"Adobe Audition\"]', 'free-audio-editor_icon.png', '[\"free-audio-editor_screen.png\"]', 'https://free-audio-editor.com/#blog', 25, 6),
(26, 8, 21, 'mp3DirectCut', '<b>mp3DirectCut </b> &mdash; программа-редактор MP3- и&nbsp;MP2-аудиофайлов, позволяющая вырезать фрагменты записи, обрезать, копировать и&nbsp;вставлять, усиливать и&nbsp;понижать уровень звука в&nbsp;аудиофайлах без необходимости декодировать и&nbsp;снова кодировать аудио. Это позволяет быстро редактировать MP3 файлы без переконвертирования и&nbsp;потери качества звука, в&nbsp;результате чего не&nbsp;снижается качество из-за повторного кодирования данных. <br>\r\nmp3DirectCut обеспечивает нормализацию звука и&nbsp;обнаружение пауз (тишины), может разбивать длинные записи в&nbsp;отдельные файлы, основываясь на&nbsp;ключевых точках в&nbsp;аудио, которые предусмотрены для обнаружения пауз. mp3DirectCut может также записывать звук непосредственно в&nbsp;MP3&nbsp;со входа звуковой карты компьютера. <br> Все аудио-операции выполняются с&nbsp;помощью манипуляций над частями MP3-файла (выделение при помощи мышки), так как mp3DirectCut не&nbsp;является полноценным редактором звукового сигнала. Очистка звукозаписи от&nbsp;щелчков, шипения и&nbsp;удаление других шумов невозможна. <br> <u>Возможности</u>: <br> &bull; MP3-файл можно редактировать без потерь за&nbsp;счёт прямого изменения MPEG-данных без декодирования в&nbsp;PCM<br> &bull; Простая работа с&nbsp;фрагментами: вырезание, копирование, вставка, и&nbsp;операции изменения объёма; <br> &bull; Предварительный просмотр и&nbsp;быстрый откат изменений<br> &bull; Нормализация звука и&nbsp;обнаружение пауз<br> &bull; MP3-запись с&nbsp;ACM- или LAME-кодировщиком (устанавливается дополнительно) <br> &bull; Быстрая визуализация MP3<br> &bull; Поддержка уровня&nbsp;2 (DVD/DVB-аудио) <br> &bull; Содержит редактор тегов для ID3v1 тегов<br> &bull; Визуализация битрейта<br> &bull; Многоязычный интерфейс (включая русский язык)', 'Martin Pesch', 'https://mpesch3.de/tutcrop.html', '[\"Sound Forge\", \"Adobe Audition\"]', 'mp3DirectCut_icon.png', '[\"mp3DirectCut_screen.png\"]', 'https://mpesch3.de/tutcrop.html', 4, 1),
(27, 9, 1, 'Maxima', '<b>Maxima</b>&nbsp;&mdash; система для работы с&nbsp;символьными и&nbsp;численными выражениями, включающая дифференцирование, интегрирование, разложение в&nbsp;ряд, преобразование Лапласа, обыкновенные дифференциальные уравнения, системы линейных уравнений, многочлены, множества, списки, векторы, матрицы и&nbsp;тензоры. Maxima производит численные расчеты высокой точности, используя точные дроби, целые числа и&nbsp;числа с&nbsp;плавающей точкой произвольной точности. Система позволяет строить графики функций и&nbsp;статистических данных в&nbsp;двух и&nbsp;трех измерениях. <br> Исходный код Maxima может компилироваться на&nbsp;многих системах, включая Windows, Linux и&nbsp;MacOS X. На&nbsp;SourceForge доступны исходные коды и&nbsp;исполняемые файлы для Windows и&nbsp;Linux. <br> Maxima&nbsp;&mdash; написанна на&nbsp;языке Common Lisp. По&nbsp;набору возможностей система близка к&nbsp;таким коммерческим системам, как Maple и&nbsp;Mathematica.', 'Massachusetts Institute of Technology', 'https://maxima.sourceforge.io/ru/index.html', '[\"Matlab\", \"MathCAD\", \"Maple\", \"Mathematica\"]', 'maxima_icon.png', '[\"maxima_screen.png\"]', 'https://maxima.sourceforge.io/ru/documentation.html', 4, 1),
(28, 9, 3, 'GNU Octave', '<b>GNU Octave </b> &mdash; свободная программная система для математических вычислений, использующая совместимый с&nbsp;MATLAB язык высокого уровня. <br> Octave представляет интерактивный командный интерфейс для решения линейных и&nbsp;нелинейных математических задач, а&nbsp;также проведения других численных экспериментов. Кроме того, Octave можно использовать для пакетной обработки. Язык Octave оперирует арифметикой вещественных и&nbsp;комплексных скаляров, векторов и&nbsp;матриц, имеет расширения для решения линейных алгебраических задач, нахождения корней систем нелинейных алгебраических уравнений, работы с&nbsp;полиномами, решения различных дифференциальных уравнений, интегрирования систем дифференциальных и&nbsp;дифференциально-алгебраических уравнений первого порядка, интегрирования функций на&nbsp;конечных и&nbsp;бесконечных интервалах. Этот список можно легко расширить, используя язык Octave (или используя динамически загружаемые модули, созданные на&nbsp;языках C, C++, Фортран и&nbsp;др.). <br> Octave&nbsp;&mdash; интерпретируемый язык программирования. Он&nbsp;похож на&nbsp;Си и&nbsp;поддерживает большинство основных функций стандартной библиотеки&nbsp;Си, а&nbsp;также основные команды и&nbsp;системные вызовы Unix. С&nbsp;другой стороны, он&nbsp;не&nbsp;поддерживает передачу аргументов по&nbsp;ссылке (особенность дизайна). <br> Синтаксис языка очень похож на&nbsp;MATLAB, и&nbsp;грамотно написанные скрипты будут запускаться как в&nbsp;Octave, так и&nbsp;в&nbsp;MATLAB.', 'John W. Eaton', 'https://octave.org/', '[\"Matlab\", \"MathCAD\", \"Maple\", \"Mathematica\"]', 'gnu-octave_icon.png', '[\"gnu-octave_screen.jpg\"]', 'https://wiki.octave.org/GNU_Octave_Wiki', 4, 1),
(29, 9, 2, 'Scilab', '<b>Scilab (/ˈsaɪl&aelig;b/) </b> &mdash; пакет прикладных математических программ, предоставляющий открытое окружение для инженерных (технических) и&nbsp;научных расчётов. Это самая полная общедоступная альтернатива MATLAB. <br> Scilab содержит сотни математических функций, и&nbsp;есть возможность добавления новых, написанных на&nbsp;различных языках (C, C++, Fortran и&nbsp;т.&nbsp;д.). Также имеются разнообразные структуры данных (списки, полиномы, рациональные функции, линейные системы), интерпретатор и&nbsp;язык высокого уровня. <br> Scilab был спроектирован как открытая система, и&nbsp;пользователи могут добавлять в&nbsp;него свои типы данных и&nbsp;операции путём перегрузки. <br> <u>Возможности</u>: <br> &bull; 2D- и&nbsp;3D-графики, анимация<br> &bull; Линейная алгебра, разреженные матрицы (sparse matrices) <br> &bull; Полиномиальные и&nbsp;рациональные функции<br> &bull; Интерполяция, аппроксимация<br> &bull; Симуляция: решение ОДУ и&nbsp;ДУ<br> &bull; Scicos: гибрид системы моделирования динамических систем и&nbsp;симуляции<br> &bull; Дифференциальные и&nbsp;не&nbsp;дифференциальные оптимизации<br> &bull; Обработка сигналов<br> &bull; Параллельная работа<br> &bull; Статистика<br> &bull; Работа с&nbsp;компьютерной алгеброй<br> &bull; Интерфейс к&nbsp;Fortran, Tcl/Tk, C, C++, Java, LabVIEW<br> Scilab имеет схожий с&nbsp;MATLAB язык программирования. В&nbsp;состав пакета входит утилита, позволяющая конвертировать документы Matlab в&nbsp;Scilab. <br> Scilab позволяет работать с&nbsp;элементарными и&nbsp;большим числом специальных функций (Бесселя, Неймана, интегральные функции), имеет мощные средства работы с&nbsp;матрицами, полиномами (в&nbsp;том числе и&nbsp;символьно), производить численные вычисления (например, численное интегрирование) и&nbsp;решение задач линейной алгебры, оптимизации и&nbsp;симуляции, мощные статистические функции, а&nbsp;также средство для построения и&nbsp;работы с&nbsp;графиками. <br> Для численных расчётов используются библиотеки Lapack, LINPACK, ODEPACK, Atlas и&nbsp;другие. В&nbsp;состав пакета также входит Scicos&nbsp;&mdash; инструмент для редактирования блочных диаграмм и&nbsp;симуляции (аналог simulink в&nbsp;пакете MATLAB). Имеется возможность совместной работы Scilab с&nbsp;программой LabVIEW.', 'ESI Group (с 2017 г.) ', 'https://www.scilab.org/', '[\"Matlab\", \"MathCAD\", \"Maple\", \"Mathematica\"]', 'scilab_icon.png', '[\"scilab_screen.png\"]', 'https://www.scilab.org/tutorials', 5, 1),
(30, 10, 22, 'FreeCommander', '<b>FreeCommander</b> (бывший FreeCommander)&nbsp;&mdash; двухпанельный файловый менеджер для Microsoft Windows, с&nbsp;поддержкой просмотра архивов, сравнением и&nbsp;синхронизацией каталогов, встроенным FTP-клиентом и&nbsp;инструментом группового переименования файлов. <br> <u>Возможности</u>:<br> &bull; Двухпанельная технология&nbsp;&mdash; горизонтальная и&nbsp;вертикальная (возможна одна панель)<br> &bull; Интерфейс с&nbsp;вкладками<br> &bull; Полный доступ к&nbsp;Рабочему столу<br> &bull; Опциональное дерево каталогов для каждой панели<br> &bull; Встроенный файловый просмотрщик в&nbsp;шестнадцатеричном, двоичном, текстовом или в&nbsp;формате изображения<br> &bull; Просмотр файлов и&nbsp;эскизов работает и&nbsp;внутри архивов<br> &bull; Встроенная работа с&nbsp;архивами: ZIP (чтение, запись), CAB (чтение, запись), RAR (чтение) <br> &bull; Работа с&nbsp;вложенными архивами<br> &bull; Открытый вид&nbsp;&mdash; бесструктурный вид для файлов и&nbsp;каталогов<br> &bull; Синхронный просмотр<br> &bull; Легкий доступ к&nbsp;системным каталогам, панели управления, рабочему столу и&nbsp;пеню Пуск<br> &bull; Копирование, перемещение, удаление, переименование файлов и&nbsp;каталогов (с&nbsp;возможность выбора исполнителя операции&nbsp;&mdash; Windows или FreeCommander)<br> &bull; Перетаскивание<br> &bull; Поиск файлов (также внутри архивов)<br> &bull; Составление и&nbsp;проверка контрольных сумм MD5<br> &bull; Уничтожение файлов<br> &bull; Инструмент группового переименования<br> &bull; Свойства файлов и&nbsp;контекстное меню<br> &bull; Вычисление размера каталога<br> &bull; Сравнение&nbsp;/ синхронизация каталогов<br> &bull; Изменение даты и&nbsp;атрибутов файла<br> &bull; Избранные каталоги&nbsp;/ программы<br> &bull; Файловые фильтры (возможны регулярные выражения) для отображения и&nbsp;файловых операций<br> &bull; Заданные пользователем колонки для подробного просмотра<br> &bull; Командная консоль DOS<br> &bull; Быстрыe просмотр, поиск, фильтр, запуск<br> &bull; Скриншоты<br> &bull; Многоязыковая поддержка', 'Marek Jasinski', 'https://freecommander.com/ru/домашняя/', '[\"Проводник Windows\", \"Total Commander\"]', 'freeCommander_icon.png', '[\"freeCommander_screenshot.png\"]', 'https://freecommander.com/fchelpxe/en/FreeCommander.html', 4, 1);
INSERT INTO `programs` (`id`, `program_type_id`, `license_id`, `name`, `description`, `developer`, `home_page_url`, `proprietary_counterparts`, `logo`, `images`, `manual_url`, `rating`, `number_of_ratings`) VALUES
(31, 10, 13, 'Far Manager', '<b>FAR</b> Manager&nbsp;&mdash; консольный файловый менеджер для операционных систем семейства Microsoft Windows и&nbsp;Linux. <br> Автор программы&nbsp;&mdash; Евгений Рошал. С&nbsp;18&nbsp;июня 2000 года разработкой FAR Manager занимается группа FAR Group. Начиная с&nbsp;версии 2.0 программа распространяется под модифицированной лицензией BSD. Предыдущие версии имели собственническую лицензию, по&nbsp;которой коммерческое использование программы являлось платным. <br> Программа FAR Manager наследует двухоконную идеологию, стандартную расцветку и&nbsp;систему команд (управление с&nbsp;клавиатуры) у&nbsp;известного файлового менеджера Norton Commander. <br> FAR поддерживает работу с&nbsp;файловой системой NTFS, различные кодировки текстов, может использовать системные функции для копирования файлов, имеет многоязычный интерфейс и&nbsp;систему помощи. FAR Manager был с&nbsp;самого начала ориентирован на&nbsp;платформу Windows, поддерживал длинные имена файлов.', ' Евгений Рошал, FAR Group', 'https://farmanager.com/', '[\"Проводник Windows\", \"Total Commander\"]', 'far_icon.png', '[\"far_screenshot.png\"]', 'https://documentation.help/Far-Manager-ru/documentation.pdf', 4, 1),
(32, 10, 2, 'Double Commander', '<b>Double Commander</b>&nbsp;&mdash; это кроссплатформенный файловый менеджер с&nbsp;открытым исходным кодом, состоящий из&nbsp;двух параллельных панелей. Он&nbsp;вдохновлен Total Commander и&nbsp;содержит несколько новых идей. Double Commander может быть запущен на&nbsp;нескольких платформах и&nbsp;операционных системах. Он&nbsp;поддерживает 32-разрядные и&nbsp;64-разрядные процессоры. <br> <u>Возможности</u>: <br> &bull; Поддержка Юникода. <br> &bull; Все операции выполняются в&nbsp;фоновом режиме. <br> &bull; Инструмент группового переименования. <br> &bull; Инструмент синхронизации каталогов. <br> &bull; Поддержка вкладок. <br> &bull; Настраиваемые колонки. <br> &bull; Встроенный текстовый редактор (F4) с&nbsp;подсветкой синтаксиса. <br> &bull; Встроенный просмотрщик файлов (F3) для показа файлов в&nbsp;шестнадцатеричном, двоичном или текстовом форматах, в&nbsp;графическом режиме. <br> &bull; Просмотр эскизов (миниатюр) изображений. <br> &bull; Работа с&nbsp;архивами так&nbsp;же, как с&nbsp;подкаталогами с&nbsp;возможностью копировать файлы в&nbsp;архивы и&nbsp;из&nbsp;них. Поддерживаются форматы ZIP, GZ, TGZ, LZMA (7z), а также BZ2, RPM, CPIO, DEB, RAR. <br> &bull; Поддержка консольных архиваторов, аналогично плагину MultiArc для Total Commander, со&nbsp;схожим форматом файла настроек. <br> &bull; Расширенный поиск файлов, регулярные выражения при поиске файлов, включая поиск текста в&nbsp;любых файлах. <br> &bull; Настраиваемая панель инструментов с&nbsp;кнопками для запуска внешних программ или внутренних команд Double Commander, с&nbsp;возможностью создания меню. <br> &bull; Поддержка плагинов WCX, WDX, WLX и&nbsp;WFX от&nbsp;Total Commander. <br> &bull; Протоколирование файловых операций.', 'Александр Коблов и другие', 'https://doublecmd.sourceforge.io/', '[\"Проводник Windows\", \"Total Commander\"]', 'double_commander_icon.png', '[\"double_commander_screenshot.png\"]', 'http://doublecmd.github.io/doc/ru/', 5, 1),
(33, 10, 23, 'Multi Commander', '<b>Multi Commander</b>&nbsp;&mdash; это файловый менеджер с&nbsp;несколькими вкладками, который является альтернативой стандартному проводнику Windows. Он&nbsp;использует очень популярную и&nbsp;эффективную двухпанельную компоновку. <br> В&nbsp;Multi Commander есть все необходимое для ежедневной работы с&nbsp;файлами, чтобы повысить скорость и&nbsp;эффективность. Он&nbsp;обладает всеми стандартными функциями, которые есть у&nbsp;любого файлового менеджера, такими как копирование, перемещение, переименование, просмотр. Но&nbsp;самыми сильными сторонами Multi Commander являются специальные функции, которые позволяют вам с&nbsp;легкостью выполнять сложные задачи. Такие задачи, как автоматическая распаковка; Автоматическая сортировка; Просмотр внутренних архивов; Редактирование реестра Windows и&nbsp;доступ к&nbsp;FTP; Поиск и&nbsp;просмотр файлов и&nbsp;изображений. Существует также мощная встроенная поддержка сценариев, которая позволяет автоматизировать многие задачи и&nbsp;расширить его функциональность. Это позволяет вам делать все с&nbsp;клавиатуры, используя сочетания клавиш, чтобы вы&nbsp;могли работать быстро и&nbsp;эффективно.', 'Mathias Svensson', 'http://multicommander.com/', '[\"Проводник Windows\", \"Total Commander\"]', 'multi_Commander_icon.png', '[\"multi_Commander_screenshot.jpg\"]', 'http://multicommander.com/docs/', 13, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `program_types`
--

CREATE TABLE `program_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `program_types`
--

INSERT INTO `program_types` (`id`, `name`) VALUES
(3, 'Архиваторы файлов'),
(6, 'Редакторы 3D графики'),
(8, 'Редакторы аудио'),
(7, 'Редакторы видео'),
(1, 'Редакторы графики'),
(4, 'Редакторы презентаций'),
(9, 'Средства математического и имитационного моделирования'),
(5, 'Табличные редакторы'),
(2, 'Текстовые редакторы'),
(10, 'Файловые менеджеры');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Структура таблицы `sources`
--

CREATE TABLE `sources` (
  `id` int(10) UNSIGNED NOT NULL,
  `program_id` int(10) UNSIGNED NOT NULL,
  `operation_system_id` int(10) UNSIGNED NOT NULL,
  `distrib_url` varchar(2083) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sources`
--

INSERT INTO `sources` (`id`, `program_id`, `operation_system_id`, `distrib_url`) VALUES
(1, 1, 1, 'https://download.gimp.org/mirror/pub/gimp/v2.10/windows/gimp-2.10.32-setup-1.exe'),
(2, 1, 2, 'https://download.gimp.org/mirror/pub/gimp/v2.10/windows/gimp-2.10.32-setup-1.exe'),
(3, 1, 3, 'https://download.gimp.org/mirror/pub/gimp/v2.10/linux/'),
(4, 2, 2, 'https://download.kde.org/stable/krita/5.1.0/krita-x64-5.1.0.zip'),
(5, 2, 3, 'https://download.kde.org/stable/krita/5.1.0/krita-5.1.0-x86_64.appimage'),
(6, 3, 1, 'https://github.com/PintaProject/Pinta/releases/download/2.0.2/Pinta.exe'),
(7, 3, 2, 'https://github.com/PintaProject/Pinta/releases/download/2.0.2/Pinta.exe'),
(8, 3, 3, 'https://www.flathub.org/apps/details/com.github.PintaProject.Pinta'),
(9, 4, 1, 'https://www.dotpdn.com/files/paint.net.4.3.12.install.anycpu.web.zip'),
(10, 4, 2, 'https://www.dotpdn.com/files/paint.net.4.3.12.install.anycpu.web.zip'),
(11, 5, 1, 'https://inkscape.org/release/1.2.1/windows/'),
(12, 5, 2, 'https://inkscape.org/release/1.2.1/windows/'),
(13, 5, 3, 'https://inkscape.org/release/1.2.1/gnulinux/'),
(14, 6, 1, 'https://sourceforge.net/projects/openofficeorg.mirror/files/4.1.13/binaries/ru/Apache_OpenOffice_4.1.13_Win_x86_install_ru.exe/download'),
(15, 6, 3, 'https://sourceforge.net/projects/openofficeorg.mirror/files/4.1.13/binaries/ru/Apache_OpenOffice_4.1.13_Linux_x86-64_install-deb_ru.tar.gz/download'),
(16, 7, 1, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/win/x86/LibreOffice_7.4.0_Win_x86.msi'),
(17, 7, 2, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/win/x86_64/LibreOffice_7.4.0_Win_x64.msi'),
(18, 7, 3, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/deb/x86_64/LibreOffice_7.4.0_Linux_x86-64_deb.tar.gz'),
(19, 8, 1, 'https://www.7-zip.org/a/7z2201.exe'),
(20, 8, 2, 'https://www.7-zip.org/a/7z2201-x64.exe'),
(21, 8, 3, 'https://www.7-zip.org/a/7z2201-linux-x64.tar.xz'),
(22, 9, 1, 'https://github.com/peazip/PeaZip/releases/download/8.8.0/peazip-8.8.0.WINDOWS.exe'),
(23, 9, 2, 'https://github.com/peazip/PeaZip/releases/download/8.8.0/peazip-8.8.0.WIN64.exe'),
(24, 9, 3, 'https://github.com/peazip/PeaZip/releases/download/8.8.0/peazip_8.8.0.LINUX.Qt5-1_amd64.deb'),
(25, 10, 1, 'https://www.bandisoft.com/bandizip/dl.php?std-all'),
(26, 10, 2, 'https://www.bandisoft.com/bandizip/dl.php?std-all'),
(27, 11, 1, 'https://hamstersoft.com/download/?a=ziparchiver'),
(28, 11, 2, 'https://hamstersoft.com/download/?a=ziparchiver'),
(29, 12, 1, 'https://www.izarc.org/download/IZArc_4.5.exe'),
(30, 12, 2, 'https://www.izarc.org/download/IZArc_4.5.exe'),
(31, 13, 1, 'https://sourceforge.net/projects/openofficeorg.mirror/files/4.1.13/binaries/ru/Apache_OpenOffice_4.1.13_Win_x86_install_ru.exe/download'),
(32, 13, 3, 'https://sourceforge.net/projects/openofficeorg.mirror/files/4.1.13/binaries/ru/Apache_OpenOffice_4.1.13_Linux_x86-64_install-deb_ru.tar.gz/download'),
(33, 14, 1, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/win/x86/LibreOffice_7.4.0_Win_x86.msi'),
(34, 14, 2, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/win/x86_64/LibreOffice_7.4.0_Win_x64.msi'),
(35, 14, 3, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/deb/x86_64/LibreOffice_7.4.0_Linux_x86-64_deb.tar.gz'),
(36, 15, 1, 'https://sourceforge.net/projects/openofficeorg.mirror/files/4.1.13/binaries/ru/Apache_OpenOffice_4.1.13_Win_x86_install_ru.exe/download'),
(37, 15, 3, 'https://sourceforge.net/projects/openofficeorg.mirror/files/4.1.13/binaries/ru/Apache_OpenOffice_4.1.13_Linux_x86-64_install-deb_ru.tar.gz/download'),
(38, 16, 1, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/win/x86/LibreOffice_7.4.0_Win_x86.msi'),
(39, 16, 2, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/win/x86_64/LibreOffice_7.4.0_Win_x64.msi'),
(40, 16, 3, 'https://download.documentfoundation.org/libreoffice/stable/7.4.0/deb/x86_64/LibreOffice_7.4.0_Linux_x86-64_deb.tar.gz'),
(41, 17, 2, 'https://www.blender.org/download/release/Blender3.2/blender-3.2.2-windows-x64.msi/'),
(42, 17, 3, 'https://www.blender.org/download/release/Blender3.2/blender-3.2.2-linux-x64.tar.xz/'),
(43, 18, 1, 'http://www.wings3d.com/redirect_download.php?title=stable_win'),
(44, 18, 2, 'http://www.wings3d.com/redirect_download.php?title=stable_win64'),
(45, 18, 3, 'http://www.wings3d.com/redirect_download.php?title=dev_linux'),
(46, 19, 1, 'https://sourceforge.net/projects/aoi/files/ArtOfIllusion/3.2.0/ArtOfIllusion-3.2.0-Windows.exe/download'),
(47, 19, 2, 'https://sourceforge.net/projects/aoi/files/ArtOfIllusion/3.2.0/ArtOfIllusion-3.2.0-Windows.exe/download'),
(48, 19, 3, 'https://sourceforge.net/projects/aoi/files/ArtOfIllusion/3.2.0/ArtOfIllusion-3.2.0-Linux-Installer.zip/download'),
(49, 20, 1, 'https://github.com/OpenShot/openshot-qt/releases/download/v2.6.1/OpenShot-v2.6.1-x86.exe'),
(50, 20, 2, 'https://github.com/OpenShot/openshot-qt/releases/download/v2.6.1/OpenShot-v2.6.1-x86_64.exe'),
(51, 20, 3, 'https://github.com/OpenShot/openshot-qt/releases/download/v2.6.1/OpenShot-v2.6.1-x86_64.AppImage'),
(52, 21, 2, 'https://www.fosshub.com/Shotcut.html?dwl=shotcut-win64-220623.exe'),
(53, 21, 3, 'https://www.fosshub.com/Shotcut.html?dwl=shotcut-linux-x86_64-220623.AppImage'),
(54, 22, 1, 'http://www.videosoftdev.com/services/download.aspx?ProductID=x32_1'),
(55, 22, 2, 'http://www.videosoftdev.com/services/download.aspx?ProductID=1'),
(56, 23, 2, 'https://www.blackmagicdesign.com/products/davinciresolve'),
(57, 23, 3, 'https://www.blackmagicdesign.com/products/davinciresolve'),
(58, 24, 1, 'https://github.com/audacity/audacity/releases/download/Audacity-3.1.3/audacity-win-3.1.3-32bit.exe'),
(59, 24, 2, 'https://github.com/audacity/audacity/releases/download/Audacity-3.1.3/audacity-win-3.1.3-64bit.exe'),
(60, 24, 3, 'https://github.com/audacity/audacity/releases/download/Audacity-3.1.3/audacity-linux-3.1.3-x86_64.AppImage'),
(61, 25, 1, 'https://www.free-audio-editor.com/FreeAudioEditor.exe'),
(62, 25, 2, 'https://www.free-audio-editor.com/FreeAudioEditor.exe'),
(63, 26, 1, 'https://www.fosshub.com/1by1.html?dwl=1by1_204.exe'),
(64, 26, 2, 'https://www.fosshub.com/1by1.html?dwl=1by1_204.exe'),
(65, 27, 1, 'https://sourceforge.net/projects/maxima/files/Maxima-Windows/5.46.0-Windows/maxima-5.46.0-win32.exe/download'),
(66, 27, 2, 'https://sourceforge.net/projects/maxima/files/Maxima-Windows/5.46.0-Windows/maxima-5.46.0-win64.exe/download'),
(67, 27, 3, 'https://sourceforge.net/projects/maxima/files/Maxima-Linux/5.46.0-Linux/maxima-5.46.0-1.src.rpm/download'),
(68, 28, 1, 'https://ftpmirror.gnu.org/octave/windows/octave-7.2.0-w32-installer.exe'),
(69, 28, 2, 'https://ftpmirror.gnu.org/octave/windows/octave-7.2.0-w64-installer.exe'),
(70, 28, 3, 'https://wiki.octave.org/Octave_for_Debian_systems'),
(71, 29, 1, 'https://www.scilab.org/download/6.1.1/scilab-6.1.1.exe'),
(72, 29, 2, 'https://www.scilab.org/download/6.1.1/scilab-6.1.1_x64.exe'),
(73, 29, 3, 'https://www.scilab.org/download/6.1.1/scilab-6.1.1.bin.linux-x86_64.tar.gz'),
(74, 30, 1, 'https://freecommander.com/downloads/FreeCommanderXE-32-public_portable.zip'),
(75, 31, 1, 'https://farmanager.com/files/Far30b6000.x86.20220723.msi'),
(76, 31, 2, 'https://farmanager.com/files/Far30b6000.x64.20220723.msi'),
(77, 32, 1, 'http://sourceforge.net/projects/doublecmd/files/DC%20for%20Windows%2032%20bit/Double%20Commander%201.0.6%20beta/doublecmd-1.0.6.i386-win32.zip/download'),
(78, 32, 2, 'http://sourceforge.net/projects/doublecmd/files/DC%20for%20Windows%2064%20bit/Double%20Commander%201.0.6%20beta/doublecmd-1.0.6.x86_64-win64.zip/download'),
(79, 32, 3, 'https://software.opensuse.org/download.html?project=home%3AAlexx2000&package=doublecmd-qt'),
(80, 33, 1, 'http://multicommander.com/files/updates/MultiCommander_win32_Portable_(12.0.2903).zip'),
(81, 33, 2, 'http://multicommander.com/files/updates/MultiCommander_x64_Portable_(12.0.2903).zip');

-- --------------------------------------------------------

--
-- Структура таблицы `tokens`
--

CREATE TABLE `tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `refresh_token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `role` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `login`, `email`, `password`) VALUES
(1, 'admin', 'admin', 'admin', 'admin@admin.com', '$2b$10$cJxApz.3O1Zqqt2XyKXCYuEd4DL7QkMbfdTynKzk2mDg2W/GijDG2');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `add_programs_requests`
--
ALTER TABLE `add_programs_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Индексы таблицы `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `licenses`
--
ALTER TABLE `licenses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `licenses_acronym_name` (`acronym`,`name`);

--
-- Индексы таблицы `normative_documents`
--
ALTER TABLE `normative_documents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `operation_systems`
--
ALTER TABLE `operation_systems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `program_type_id` (`program_type_id`),
  ADD KEY `license_id` (`license_id`);

--
-- Индексы таблицы `program_types`
--
ALTER TABLE `program_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `sources`
--
ALTER TABLE `sources`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `source` (`operation_system_id`,`program_id`),
  ADD KEY `program_id` (`program_id`);

--
-- Индексы таблицы `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `add_programs_requests`
--
ALTER TABLE `add_programs_requests`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `licenses`
--
ALTER TABLE `licenses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `normative_documents`
--
ALTER TABLE `normative_documents`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `operation_systems`
--
ALTER TABLE `operation_systems`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `programs`
--
ALTER TABLE `programs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT для таблицы `program_types`
--
ALTER TABLE `program_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `sources`
--
ALTER TABLE `sources`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT для таблицы `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `add_programs_requests`
--
ALTER TABLE `add_programs_requests`
  ADD CONSTRAINT `add_programs_requests_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `programs`
--
ALTER TABLE `programs`
  ADD CONSTRAINT `programs_ibfk_1` FOREIGN KEY (`program_type_id`) REFERENCES `program_types` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `programs_ibfk_2` FOREIGN KEY (`license_id`) REFERENCES `licenses` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `sources`
--
ALTER TABLE `sources`
  ADD CONSTRAINT `sources_ibfk_1` FOREIGN KEY (`program_id`) REFERENCES `programs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sources_ibfk_2` FOREIGN KEY (`operation_system_id`) REFERENCES `operation_systems` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`name`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
