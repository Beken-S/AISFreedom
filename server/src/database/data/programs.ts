const PROGRAMS = [
  {
    name: 'GIMP',
    description:
      '<p><b> Gimp</b> &nbsp;&mdash;GNU Image Manipulation Program или GIMP (&laquo;Гимп&raquo;)&nbsp;&mdash; свободно распространяемый растровый графический редактор, программа для создания и&nbsp;обработки растровой графики и&nbsp;частичной поддержкой работы с&nbsp;векторной графикой. Проект основан в&nbsp;1995 году Спенсером Кимбеллом и&nbsp;Питером Маттисом как дипломный, в&nbsp;настоящий момент поддерживается группой добровольцев. Типичные задачи, которые можно решать при помощи GIMP, включают в&nbsp;себя создание графики и&nbsp;логотипов, масштабирование и&nbsp;кадрирование фотографий, раскраску, комбинирование изображений с&nbsp;использованием слоёв, ретуширование и&nbsp;преобразование изображений в&nbsp;различные форматы.</p>',
    developer: 'Питер Маттис, Спенсер Кимбелл',
    home_page_url: 'https://www.gimp.org/',
    proprietary_counterparts: ['Photoshop', 'Artipic', 'Paint Shop Pro'],
    logo: 'gimp_icon.png',
    images: ['gimp_screen.jpg'],
    manual_url: 'https://docs.gimp.org/2.10/en/index.html',
    license_id: 3,
    program_type_id: 1,
  },
  {
    name: 'Krita',
    description:
      '<p><b>Krita</b>&nbsp;&mdash; бесплатный растровый графический редактор с&nbsp;открытым кодом, программное обеспечение, входящее в&nbsp;состав KDE. Ранее распространялось как часть офисного пакета Calligra Suite, но&nbsp;впоследствии отделилось от&nbsp;проекта и&nbsp;стало развиваться самостоятельно. Разрабатывается преимущественно для художников и&nbsp;фотографов.',
    developer: 'Krita Foundation, KDE',
    home_page_url: 'https://krita.org/en/',
    proprietary_counterparts: ['Photoshop', 'Artipic', 'Paint Shop Pro'],
    logo: 'krita_icon.png',
    images: ['krita_screen.jpg'],
    manual_url: 'https://docs.krita.org/en/',
    license_id: 3,
    program_type_id: 1,
  },
  {
    name: 'Pinta',
    description:
      '<p><b>Pinta</b>&nbsp;&mdash; легковесный кроссплатформенный растровый графический редактор с&nbsp;открытым исходным кодом. Pinta является редактором с&nbsp;большим количеством функций, характерных для программного обеспечения такого класса, включая инструменты для рисования, фильтры и&nbsp;эффекты, инструменты для управления параметрами цвета (контрастность, яркость, преобразование в&nbsp;чёрно-белое изображение и&nbsp;т.&nbsp;п.).',
    developer: 'Jonathan Pobst,  Robert Nordan,Olivier Dufour',
    home_page_url: 'https://www.pinta-project.com/',
    proprietary_counterparts: ['Photoshop', 'Artipic', 'Paint Shop Pro'],
    logo: 'pinta_icon.png',
    images: ['pinta_screen.jpg'],
    manual_url: 'https://www.pinta-project.com/user-guide/',
    license_id: 11,
    program_type_id: 1,
  },
  {
    name: 'Paint.NET',
    description:
      '<p><b>Paint.NET</b>&nbsp;&mdash; бесплатный (исключением является версия для Microsoft Store) растровый графический редактор для Windows&nbsp;NT, основанный на .NET Framework. Приложение начато как проект, разработанный группой студентов Университета штата Вашингтон для Microsoft Windows под руководством Microsoft.</p>',
    developer: 'Rick Brewster, dotPDN LLC',
    home_page_url: 'https://www.getpaint.net/',
    proprietary_counterparts: ['Photoshop', 'Artipic', 'Paint Shop Pro'],
    logo: 'paint-net_icon.png',
    images: ['paint.NET_screen.png'],
    manual_url: 'https://www.getpaint.net/doc/latest/index.html',
    license_id: 15,
    program_type_id: 1,
  },
  {
    name: 'Inkscape',
    description:
      '<p><b>Inkscape</b>&nbsp;&mdash; свободно распространяемый векторный графический редактор, удобен для создания как художественных, так и&nbsp;технических иллюстраций (вплоть до&nbsp;использования в&nbsp;качестве САПР общего назначения, чему также способствует лёгкость обмена чертежами). Это стало возможным во&nbsp;многом благодаря открытому формату SVG, развиваемому консорциумом W3C. Формат SVG позволяет создавать иллюстрации различного типа, в&nbsp;том числе анимированные. Поскольку SVG основан на&nbsp;расширяемом языке разметки (XML), к&nbsp;нему можно писать расширения, чем авторы Inkscape и&nbsp;пользуются.</p>',
    developer: 'Команда разра-ботчиков Inkscape',
    home_page_url: 'https://inkscape.org/ru/',
    proprietary_counterparts: [
      'CorelDraw',
      'Adobe Illustrator',
      'Xara Designer',
    ],
    logo: 'inkscape_icon.png',
    images: ['inkscape_screen.jpeg'],
    manual_url: 'https://inkscape.org/learn/books/',
    license_id: 2,
    program_type_id: 1,
  },
  {
    name: 'OpenOffice Writer',
    description:
      '<p><b>OpenOffice Writer</b> (ранее OpenOffice.org Writer)&nbsp;&mdash; текстовый процессор и&nbsp;визуальный (WYSIWYG) редактор HTML, входит в&nbsp;состав Apache OpenOffice и&nbsp;OpenOffice.org; является свободным программным обеспечением.',
    developer: 'Apache Software Foundation',
    home_page_url: 'https://www.openoffice.org/ru/',
    proprietary_counterparts: ['Microsoft Office', 'Мой офис', 'Р7 - Офис'],
    logo: 'openoffice_Writer_icon.png',
    images: ['openoffice_Writer_screen.jpg'],
    manual_url: 'https://www.openoffice.org/documentation/index.html',
    license_id: 8,
    program_type_id: 2,
  },
  {
    name: 'LibreOffice Writer',
    description:
      '<p><b>LibreOffice Writer</b>&nbsp;&mdash; текстовый процессор и&nbsp;визуальный редактор HTML, входящий в&nbsp;состав офисного пакета LibreOffice. Является ответвлением текстового процессора OpenOffice Writer, который в&nbsp;свою очередь основан на&nbsp;StarOffice. Writer сходен с&nbsp;Microsoft Word и&nbsp;Corel&rsquo;s WordPerfect.',
    developer: 'The Document Foundation',
    home_page_url: 'https://www.libreoffice.org/',
    proprietary_counterparts: ['Microsoft Office', 'Мой офис', 'Р7 - Офис'],
    logo: 'libreoffice_Writer_icon.png',
    images: ['libreoffice_Writer_screen.png'],
    manual_url:
      'https://documentation.libreoffice.org/en/english-documentation/',
    license_id: 10,
    program_type_id: 2,
  },
  {
    name: '7-Zip',
    description:
      '<p><b>7-Zip</b>&nbsp;&mdash; свободный файловый архиватор с&nbsp;высокой степенью сжатия данных. Поддерживает несколько алгоритмов сжатия и&nbsp;множество форматов данных, включая собственный формат 7z&nbsp;c&nbsp;высокоэффективным алгоритмом сжатия LZMA. Программа разрабатывается с&nbsp;1999&nbsp;года, она бесплатна и&nbsp;имеет открытый исходный код, большая часть которого свободно распространяется на&nbsp;условиях лицензии GNU LGPL, за&nbsp;исключением кода распаковщика UnRAR, который имеет ограничения. Основная платформа&nbsp;&mdash; Windows (в&nbsp;том числе Windows&nbsp;CE), где доступны две версии программы: с&nbsp;графическим интерфейсом и&nbsp;версия для командной строки. Консольная версия была портирована сообществом разработчиков для систем стандарта POSIX под общим названием p7zip. Портированные версии для других систем, также как и&nbsp;оригинальная программа 7-Zip, доступны на&nbsp;сайте системы SourceForge (по&nbsp;состоянию на&nbsp;5&nbsp;сентября 2017&nbsp;года, программа была скачана с&nbsp;сайта более 412 млн раз). 7-Zip является победителем SourceForge.net Community Choice Awards 2007 года в&nbsp;категориях &laquo;Лучший проект&raquo; и&nbsp;&laquo;Лучший технический дизайн&raquo;. <br>',
    developer: 'Павлов И.В.',
    home_page_url: 'https://www.7-zip.org/',
    proprietary_counterparts: ['WinRAR', 'WinZip'],
    logo: '7-zip_icon.png',
    images: ['7zip_screen.png'],
    manual_url: 'https://www.7-zip.org/faq.html',
    license_id: 5,
    program_type_id: 3,
  },
  {
    name: 'PeaZip',
    description:
      '<p><b>PeaZip</b>&nbsp;&mdash; свободный и&nbsp;бесплатный кроссплатформенный архиватор и&nbsp;графическая оболочка для других архиваторов. Исходный код программы написан на&nbsp;Free Pascal и&nbsp;собран в&nbsp;Lazarus. PeaZip распространяется для Windows 9x, Windows&nbsp;NT (в&nbsp;том числе и&nbsp;для свободной, большей частью совместимой с&nbsp;Windows NT&nbsp;операционной системы ReactOS) и&nbsp;Linux, как в&nbsp;инсталляционных пакетах (установка для Windows, DEB, RPM, TGZ), так и&nbsp;в&nbsp;портативных версиях, которые не&nbsp;вносят никаких изменений в&nbsp;операционную систему.\nPeaZip поддерживает собственный формат архивов Pea (с&nbsp;поддержкой сжатия, многотомных архивов и&nbsp;гибкой системы шифрования и&nbsp;контроля целостности) и&nbsp;другие форматы, используя для многих из&nbsp;них внешние программы и&nbsp;библиотеки.\nПроект находится на&nbsp;SourceForge.net, откуда он&nbsp;был скачан, по&nbsp;состоянию на&nbsp;апрель 2013&nbsp;года, более 3,7 миллиона раз, а&nbsp;на&nbsp;январь 2022 года&nbsp;&mdash; более 6&nbsp;миллионов раз. <br>\n<u>Полная поддержка: </u> 7z, 7z-sfx, FreeArc&rsquo;s ARC/WRC, bzip2: bz2, tar.bz2, tbz, tb2, gzip: gz, tar.gz, tgz, PAQ8F/JD/L/O, LPAQ, ZPAQ, PEA, QUAD/BALZ/BCM, split (.001), tar, UPX, WIM, XZ, ZIP. <br>\n<u>Частичная поддержка</u> (распаковка, просмотр, тест архива) ACE, ARJ, CAB, CHM, COMPOUND файлы (MSI, DOC, PPT, XLS...), CPIO, DEB, ISO CD/DVD&nbsp;образы, Java-архивы (JAR, EAR, WAR), LZH, LZMA, NSIS установщики, форматы OpenOffice.org, PET/PUP (Puppy Linux installers), PAK/PK3/PK4, RAR, SMZIP, RPM, U3P, XPI, Z, ZIPX, Zstandard. </p>\n',
    developer: 'Джорджио Тани',
    home_page_url: 'https://peazip.github.io/',
    proprietary_counterparts: ['WinRAR', 'WinZip'],
    logo: 'peazip_icon.png',
    images: ['peazip_screen.png'],
    manual_url:
      'https://peazip.github.io/peazip-help.html#on-line_file_compression_manual',
    license_id: 5,
    program_type_id: 3,
  },
  {
    name: 'Bandizip',
    description:
      '<p><b> Bandizip </b> – это мощный архиватор, обеспечивающий скоростную обработку и удобные функции. Доступны бесплатная и платные редакции, поддерживающие целый ряд дополнительных функций. <br>\n<u>Сжатие: </u> <br>\n• Поддерживаемые форматы: ZIP, 7Z(lzma2), ZIPX(xz), EXE(sfx), TAR, TGZ, LZH(lh7), ISO(joliet), GZ, XZ;\n• Изменение ZIP-архивов (добавление/удаление/переименование);\n• До 6 раз более быстрое сжатие за счёт многопоточности;\n• Создание зашифрованных архивов;\n• Поддержка алгоритма шифрования AES256;\n• Поддержка сжатия файлов размером более 4 ГБ;\n• Сохранение имён файлов в ZIP-архивах в unicode или MBCS;\n• Создание многотомных ZIP- и 7Z-архивов.\n<u>Извлечение: </u> <br>\n• Поддерживаемые форматы: 7Z, ACE, AES, ALZ, ARJ, BH, BIN, BR, BZ, BZ2, CAB, Compound(MSI), DAA(1.0), DEB, EGG, GZ, IMG, ISO, ISZ, LHA, LZ, LZH, LZMA, PMA, RAR, RAR5, SFX(EXE), TAR, TBZ/TBZ2, TGZ, TLZ, TXZ, UDF, WIM, XPI, XZ, Z, ZIP, ZIPX, ZPAQ, ZSTD, NSIS;\n• Наглядное отображение списка файлов в архиве;\n• Извлечение только выбранных файлов, поддерживается перетаскивание;\n• Возможность комментирования ZIP- и RAR-архивов;\n• Извлечение TGZ/TBZ-архивов за один проход;\n<u>Дополнительные возможности: </u> <br>\n• Проверка целостности файлов, чтобы убедиться, что архив не повреждён\n• Поддержка функций изменения кодовой страницы\n• Интеграция в меню Проводника </p>\n',
    developer: 'Bandisoft International Inc',
    home_page_url: 'https://www.bandisoft.com/bandizip/',
    proprietary_counterparts: ['WinRAR', 'WinZip'],
    logo: 'bandiZip_icon.png',
    images: ['bandizip_screen.png'],
    manual_url: 'https://www.bandisoft.com/bandizip/help/',
    license_id: 16,
    program_type_id: 3,
  },
  {
    name: 'Hamster ZIP',
    description:
      '<p><b> Hamster ZIP Archiver </b> &mdash; мощная и&nbsp;современная программа для работы с&nbsp;архивами, которая позволит с&nbsp;легкостью сжать или открыть любой архив, даст возможность использовать популярные облачные технологии, чтобы удобно создать копию важных файлов, быстро отправить семье пакет фотографий с&nbsp;отпуска или поделиться с&nbsp;коллегой своим проектом в&nbsp;2&nbsp;клика. <br>\n<u>Поддерживаемые типы файлов: </u> zip,7z,arj,bz2,tbz, gzip, deb, dmg, img, gz,tgz, hfs, lzh, rmp, pkg, z, taz, cab, iso, rar, tar, wim, swm, jar. </p>\n',
    developer: 'HamsterSoft',
    home_page_url: 'https://ziparchiver.hamstersoft.com/',
    proprietary_counterparts: ['WinRAR', 'WinZip'],
    logo: 'hamster_zip_icon.png',
    images: ['hamster_screen.png'],
    manual_url: 'https://hamstersoft.com/',
    license_id: 3,
    program_type_id: 3,
  },
  {
    name: 'IZArc',
    description:
      '<p><b> IZArc&nbsp;</b>&mdash; бесплатный файловый архиватор, работающий в&nbsp;среде Microsoft Windows. Поддерживает большое количество форматов сжатия и&nbsp;умеет работать с&nbsp;образами дисков.\nНекоторые версии IZArc включали в&nbsp;свой инсталлятор рекламное (рекомендательное) ПО&nbsp;OpenCandy, но, по&nbsp;заявлению автора, современные версии более не&nbsp;содержат подобных нежелательных дополнений. <br>\nIZArc полностью поддерживает форматы сжатия 7-ZIP, BH, BZA, CAB, JAR, LHA, YZ1, ZIP, а&nbsp;также следующие типы файлов на&nbsp;открытие и&nbsp;разархивирование: A, ACE, ARC, ARJ, B64, BIN, BZ2, C2D, CDI, CPIO, DEB, ENC, GCA, GZ, GZA, HA, IMG, ISO, LIB, LZH, MBF, MDF, MIM, NRG, PAK, PDI, PK3, RAR, RPM, TAR, TAZ, TBZ, TGZ, TZ, UUE, WAR, XXE, Z, ZOO. <br>\n<u>Основные возможности и&nbsp;особенности IZArc: </u> <br>\n&bull; Поддержка образов диска (ISO, BIN, MDF, NRG, IMG, C2D, PDI, CDI)\n&bull; Поддержка кириллицы в&nbsp;RAR-архивах\n&bull; Преобразование архивов и&nbsp;образов дисков\n&bull; Поддержка многотомных архивов\n&bull; Создание самораспаковывающихся архивов\n&bull; Преобразование самораспаковывающихся архивов в&nbsp;обычные\n&bull; Восстановление поврежденных архивов\n&bull; Шифрование c&nbsp;использованием 256-битного ключа AES\n&bull; Интеграция в&nbsp;контекстное меню Проводника Windows\n&bull; Поддержка автоматического сканирования на&nbsp;вирусы с&nbsp;использованием антивирусов\n&bull; Поддержка различных языков интерфейса, в&nbsp;том числе русского. </p>\n',
    developer: 'Иван Захарьев',
    home_page_url: 'https://www.izarc.org/',
    proprietary_counterparts: ['WinRAR', 'WinZip'],
    logo: 'IZArc_icon.png',
    images: ['izarc_screen.png'],
    manual_url: 'https://www.izarc.org/tutorials',
    license_id: 17,
    program_type_id: 3,
  },
];

export default PROGRAMS;
