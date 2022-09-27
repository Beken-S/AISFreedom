import cn from 'classnames';
import MUIDataTable from 'mui-datatables';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Glossary from '../../components/Glossary/index';
import {
  getLicenses,
  getNormative,
  getArticles,
  getArticlesdoc,
  getNormativedoc,
} from '../../store/thunks/Reference-thunks';

import styles from './ReferenceSectionPage.module.scss';

import iconDowland from '@assets/icon/dowland.png';
import dowland from '@assets/icon/free.png';

const ReferenceSectionPage = () => {
  const dispatch = useDispatch();

  const licenses = useSelector(({ reference }) => reference.licenses);
  const normative = useSelector(({ reference }) => reference.normative);
  const articles = useSelector(({ reference }) => reference.articles);
  const [activeTab, setActiveTab] = useState('documents');

  const [columns, setActiveColums] = useState([]);
  const [usersList, setUsersList] = useState([normative]);
  const [fileNameNormative, setFileNameNormative] = useState('');
  const [fileNameArticle, setFileNameArticle] = useState('');
  const [linkIcon, setLinkIcon] = useState('');

  const [linkIconTwo, setLinkIconTwo] = useState('');
  //console.log('linkIcon', linkIcon);

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
            customBodyRender: (value) => {
              return (
                <div>
                  <a
                    href={`http://localhost:3000/api/normative_documents/${value}`}
                    //target="_blank"
                    download
                    // href="http://localhost:3000/api/normative_documents/8bbd8b22-bbe5-46a9-b8c5-77396034f1bc.pdf"
                  >
                    <img
                      src={dowland}
                      //src="/images/myw3schoolsimage.jpg"
                      width="50"
                      height="50"
                      align="right"
                      alt="W3Schools"
                    />
                  </a>
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
        {
          name: 'Текст лицензии на оригинальном языке',
          options: {
            customBodyRender: (value) => {
              return (
                <div>
                  <a href={value} target="_blank">
                    <img
                      src={iconDowland}
                      width="50"
                      height="50"
                      align="right"
                      alt="W3Schools"
                    />
                  </a>
                </div>
              );
            },
          },
        },
        {
          name: 'Текст лицензии на русском языке (перевод)',
          options: {
            customBodyRender: (value) => {
              return (
                <div>
                  <a href={value} target="_blank">
                    <img
                      src={iconDowland}
                      width="50"
                      height="50"
                      align="right"
                      alt="W3Schools"
                    />
                  </a>
                </div>
              );
            },
          },
        },
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
            customBodyRender: (value) => {
              return (
                <div>
                  <a
                    href={`http://localhost:3000/api/articles/${value}`}
                    //target="_blank"
                    download
                  >
                    <img
                      src={dowland}
                      //src="/images/myw3schoolsimage.jpg"
                      width="50"
                      height="50"
                      align="right"
                      alt="W3Schools"
                    />
                  </a>
                </div>
              );
            },
          },
        },
      ]);
    }
    // if (activeTab === 'glossary') {

    //     <Glossary />

    // }
  };

  const options = {
    textLabels: {
      body: {
        noMatch: 'Таблица пуста',
      },
    },
    caseSensitive: false,
    //download: 'disabled',
    filterType: 'multiselect',
    selectableRowsOnClick: false,
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
    // selectableRowsOnClick: false,
  };

  const setNormative = async (items) => {
    dispatch(getNormative(items));
  };

  const setLicenses = async (items) => {
    dispatch(getLicenses(items));
  };

  async function usersListRequest() {
    let requestList;
    switch (activeTab) {
      case 'documents':
        dispatch(getNormative());
        requestList = normative;
        break;
      case 'licenses':
        dispatch(getLicenses());

        requestList = licenses;
        break;
      case 'articles':
        dispatch(getArticles());
        requestList = articles;
        break;
      case 'glossary':
        break;
      default:
        break;
    }
    if (requestList) {
      switch (activeTab) {
        case 'documents':
          // setNormative(requestList);
          setUsersList(setTableArray(requestList));
          break;
        case 'licenses':
          //setLicenses(requestList);
          setUsersList(setTableArray(requestList));
          break;
        case 'articles':
          setUsersList(setTableArray(requestList));
          break;
        case 'glossary':
          <Glossary />;
          break;
        default:
          break;
      }
    }
  }

  const setItem = (item) => {
    switch (activeTab) {
      case 'documents':
        return [
          item.form ? item.form : '',
          item.name ? item.name : 'Нет данных',
          item.creation_date ? item.creation_date : 'Нет данных',
          item.number ? item.number : 'Нет данных',
          item.file ? item.file : 'Нет данных',
        ];
        break;
      case 'licenses':
        return [
          item.name ? item.name : 'Нет данных',
          item.acronym ? item.acronym : 'Нет данных',
          item.author ? item.author : 'Нет данных',
          item.year_of_creation ? item.year_of_creation : 'Нет данных',
          item.text_url_eng ? item.text_url_eng : 'Нет данных',
          item.text_url_ru ? item.text_url_ru : 'Нет данных',
        ];
        break;
      case 'articles':
        return [
          item.name ? item.name : '',
          item.author ? item.author : 'Нет данных',
          item.publication_year ? item.publication_year : 'Нет данных',
          item.file ? item.file : 'Нет данных',
        ];
        break;
      case 'glossary':
        <Glossary />;

        break;
      default:
        break;
    }
  };

  const setTableArray = (arrayList) => {
    if (arrayList !== [])
      return arrayList.map((item) => {
        return setItem(item);
      });
  };

  const displayDetailInfo = (dataIndex) => {
    const file_name = usersList[dataIndex][4];
    const file_name_article = usersList[dataIndex][3];
    const text_url_eng = usersList[dataIndex][4];
    const text_url_ru = usersList[dataIndex][4];
    //console.log('text_url_eng', text_url_eng);
    switch (activeTab) {
      case 'documents':
        dispatch(getNormativedoc(file_name));
        setFileNameNormative(file_name);
        //navigate(`/api/normative_documents/${file_name}`);
        break;
      case 'articles':
        dispatch(getArticlesdoc(file_name_article));
        setFileNameArticle(file_name_article);
        //navigate(`/api/articles/${file_name_article}`);
        break;
      case 'articles':
        setLinkIcon(text_url_eng);
        setLinkIconTwo(text_url_ru);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getNormative());
    dispatch(getArticles());
    usersListRequest();
    dispatch(getLicenses());
  }, []);

  useEffect(() => {
    usersListRequest();
    setColumns(activeTab);
  }, [activeTab]);

  return (
    <>
      <div className={styles.ReferenceSectionPage}>
        <h1>СПРАВОЧНЫЙ РАЗДЕЛ</h1>
        <div className={styles.reference__content}>
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
              <a
                target="_blank"
                href="/"
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
              </a>
            </div>
            <MUIDataTable
              title=""
              data={usersList}
              columns={columns}
              options={options}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceSectionPage;
