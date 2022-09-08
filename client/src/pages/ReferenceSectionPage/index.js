import cn from 'classnames';
import MUIDataTable from 'mui-datatables';
import React from 'react';
import { useState, useEffect } from 'react';

//import Glossary from '@pages/Glossary';

import styles from './ReferenceSectionPage.module.scss';

import dowland from '@assets/icon/free.png';

const ReferenceSectionPage = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [documents, setDocuments] = useState('');

  const [columns, setActiveColums] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const setColumns = (activeTab) => {
    if (activeTab === 'documents') {
      setActiveColums([
        'Форма документа',
        'Наименование',
        'Дата',
        'Номер',
        {
          name: 'Содержание',
          options: {
            customBodyRender: () => {
              return (
                <div>
                  <img
                    src={dowland}
                    width="50"
                    height="50"
                    align="right"
                    alt=""
                  />
                </div>
              );
            },
          },
        },
      ]);
    }
    if (activeTab === 'licenses') {
      setActiveColums([
        'Полное название',
        'Аббревиатура',
        'Автор лицензии',
        'Год создания',
        'Текст лицензии на оригинальном языке',
        'Текст лицензии на русском языке (перевод)',
      ]);
    }
    if (activeTab === 'articles') {
      setActiveColums([
        'Название статьи',
        'Авторы',
        'Год публикации',
        {
          name: 'Содержание',
          options: {
            customBodyRender: () => {
              return (
                <div>
                  <img
                    src={dowland}
                    width="50"
                    height="50"
                    align="right"
                    alt=""
                  />
                </div>
              );
            },
          },
        },
      ]);
    }
    // if (activeTab === 'glossary') {
    //   <Glossary/>
    // }
  };

  const options = {
    textLabels: {
      body: {
        noMatch: 'Таблица пуста',
      },
    },
    caseSensitive: false,
    download: 'disabled',
    filterType: 'multiselect',
    selectableRowsOnClick: true,
    selectToolbarPlacement: 'above',
    responsive: 'standard',
    // onRowSelectionChange: (rowsSelected) => {
    //   setSelectedRow(rowsSelected);
    // },
    onCellClick: (colData, cellMeta) => {
      if (colData.type === 'div') {
        displayDetailInfo(cellMeta.dataIndex);
      }
    },
    selectableRowsOnClick: false,
  };

  async function usersListRequest() {
    let requestList;
    switch (activeTab) {
      case 'documents':
        //requestList = await HTTP.Get(`${REQUEST_URL.getUsersList}?status=NEW`);
        requestList = [
          {
            forma: 'Федеральный закон',
            name: 'Часть четвертая Гражданского кодекса Российской Федерации (статьи 1259, 1261, 1286, 1286.1 )',
            data: '18.12.2006',
            number: '№ 230',
            content: 'Скачать (2,580 Кб)',
          },
          {
            forma: 'Постановление правительства',
            name: 'Об установлении запрета на допуск программного обеспечения происходящего из иностранных государств, для целей осуществления закупок для обеспечения государственных и муниципальных нужд',
            data: '16.11.2015',
            number: '№ 1236',
            content: 'Скачать (672 Кб)',
          },
          {
            forma: 'Приказ Министерства связи и массовых коммуникаций',
            name: 'Об утверждении Методических рекомендаций по использованию свободного программного обеспечения в деятельности федеральных органов исполнительной власти, включая критерии определения государственных информационных систем, при создании которых необходимо использовать свободное программное обеспечение, в том числе государственных информационных систем, предназначенных для оказания государственных и муниципальных услуг в электронном виде',
            data: '19.08.2015',
            number: '№ 305',
            content: 'Скачать (2816 Кб)',
          },
          {
            forma:
              'Приказ Министерства цифрового развития, связи и массовых коммуникаций РФ',
            name: 'Об импортозамещении цифровых решений в органах управления Российской Федерации',
            data: '04.01.2022',
            number: 'МШ-П8-1-070-14732',
            content: 'Скачать (616 Кб)',
          },
          {
            forma: 'ГОСТ Р',
            name: 'Информационные технологии. Свободное программное обеспечение. Общие положения',
            data: '01.01.2012',
            number: '54593-2011',
            content: 'Скачать (956 Кб)',
          },
        ];
        break;
      case 'licenses':
        // requestList = await HTTP.Get(`${REQUEST_URL.getUsersList}?status=APPL`);
        requestList = [
          {
            fullName: 'gggg',
            abb: 'sdsjhd',
            autor: '16.11.15',
            year: '#111',
            textAng: '#111',
            textRus: '#111',
          },
          {
            fullName: 'gggg',
            abb: 'sdsjhd',
            autor: '16.11.15',
            year: '#111',
            textAng: '#111',
            textRus: '#111',
          },
        ];
        break;
      case 'articles':
        requestList = [
          {
            name: 'Использование свободных программ в научных исследованиях',
            autor: 'Алексеев Е.Р.',
            year: '2009',
            content: '1,126',
          },
          {
            name: 'Проблема выбора современного программного обеспечения в образовательном процессе вуза',
            autor: 'Баландина И.В., Баландина И.В.',
            year: '2017',
            content: '160',
          },
          {
            name: 'О перспективах и проблемах использования свободного программного обеспечения для повышения эффективности учебного процесса',
            autor: 'Шевченко А.М.',
            year: '2018',
            content: '2,355',
          },
          {
            name: 'Свободное программное обеспечение в высших учебных заведениях Свободное программное обеспечение в высших учебных заведениях',
            autor: ' Бобровских А.В., Урывская Т.Ю., Алимов А.П. ',
            year: '2019',
            content: '268',
          },
          {
            name: 'Декомпозиция процесса обоснования состава свободно распространяемого программного обеспечения в высших учебных заведениях военной направленности',
            autor: 'Бобровских А.В.,  Бондаренко Ю.В.',
            year: '2020',
            content: '316',
          },
        ];
        // requestList = await HTTP.Get(
        //   `${REQUEST_URL.getUsersList}?status=MEMBER`
        // );
        break;
      // case 'glossary':
      //   requestList = [];
      //   // requestList = await HTTP.Get(
      //   //   `${REQUEST_URL.getUsersList}?status=EXCLUDE`
      //   // );
      //   break;
      default:
        break;
    }
    if (requestList) {
      switch (activeTab) {
        case 'documents':
          setDocuments(requestList);
          setUsersList(requestList);
          break;
        case 'licenses':
          setDocuments(requestList);
          setUsersList(requestList);
          break;
        case 'articles':
          setDocuments(requestList);
          setUsersList(requestList);
          break;
        // case 'glossary':
        //   <Glossary/>
        //   break;
        default:
          break;
      }
    }
  }

  const setItem = (item) => {
    switch (activeTab) {
      case 'documents':
        return [
          item.forma ? item.forma : '',
          item.name ? item.name : 'Нет данных',
          item.data ? item.data : 'Нет данных',
          item.number ? item.number : 'Нет данных',
          item.content ? item.content : 'Нет данных',
        ];
        break;
      case 'licenses':
        return [
          item.abb ? item.abb : '',
          item.autor ? item.autor : 'Нет данных',
          item.year ? item.year : 'Нет данных',
          item.textAng ? item.textAng : 'Нет данных',
          item.textRus ? item.textRus : 'Нет данных',
        ];
        break;
      case 'articles':
        return [
          item.name ? item.name : '',
          item.autor ? item.autor : 'Нет данных',
          item.year ? item.year : 'Нет данных',
          item.content ? item.content : 'Нет данных',
        ];
        break;
      // case 'glossary':

      //     <Glossary/>

      //   break;
      default:
        break;
    }
  };

  const setTableArray = () => {
    return usersList.map((item, index) => {
      return setItem(item);
    });
  };

  const displayDetailInfo = (dataIndex) => {
    // getDetailUserFetch(usersList[dataIndex].id);
  };

  useEffect(() => {
    usersListRequest();
    setColumns(activeTab);
    console.log('columns', columns);
    console.log('activeTab', activeTab);
  }, [activeTab]);

  return (
    <>
      <div className={styles.ReferenceSectionPage}>
        <h2>СПРАВОЧНЫЙ РАЗДЕЛ</h2>
        <div className={styles.reference__table}>
          <div className={styles.tables__switch}>
            <div
              className={
                activeTab === 'documents'
                  ? cn(
                      styles.tables__switch__button,
                      styles.tables__switch__button__active
                    )
                  : styles.tables__switch__button
              }
              onClick={() => {
                setActiveTab('documents');
              }}
            >
              Нормативные документы
            </div>
            <div
              className={
                activeTab === 'licenses'
                  ? cn(
                      styles.tables__switch__button,
                      styles.tables__switch__button__active
                    )
                  : styles.tables__switch__button
              }
              onClick={() => {
                setActiveTab('licenses');
              }}
            >
              Свободные лицензии
            </div>
            <div
              className={
                activeTab === 'articles'
                  ? cn(
                      styles.tables__switch__button,
                      styles.tables__switch__button__active
                    )
                  : styles.tables__switch__button
              }
              onClick={() => {
                setActiveTab('articles');
              }}
            >
              Статьи
            </div>
            {/* <div
              className={
                activeTab === 'glossary'
                  ? cn(
                      styles.tables__switch__button,
                      styles.tables__switch__button__active
                    )
                  : styles.tables__switch__button
              }
              onClick={() => {
                setActiveTab('glossary');
              }}
            >
              Глоссарий
            </div> */}
          </div>
          <MUIDataTable
            title=""
            data={setTableArray()}
            columns={columns}
            options={options}
          />
        </div>
      </div>
    </>
  );
};

export default ReferenceSectionPage;
