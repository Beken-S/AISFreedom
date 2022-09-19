import cn from 'classnames';
import MUIDataTable from 'mui-datatables';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Glossary from '../../components/Glossary/index';
import {
  getLicenses,
  getNormative,
  getArticles,
} from '../../store/thunks/Reference-thunks';
import StarReating from '../../components/StarReating';

import styles from './ReferenceSectionPage.module.scss';

import dowland from '@assets/icon/free.png';

const ReferenceSectionPage = () => {
  const dispatch = useDispatch();

  const licenses = useSelector(({ reference }) => reference.licenses);

  const normative = useSelector(({ reference }) => reference.normative);
  const articles = useSelector(({ reference }) => reference.articles);
  const [activeTab, setActiveTab] = useState('documents');

  const [columns, setActiveColums] = useState([]);
  const [usersList, setUsersList] = useState([normative]);

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
    // selectableRowsOnClick: false,
  };

  const setNormative = async (items) => {
    dispatch(getNormative(items));
  };

  const setLicenses = async (items) => {
    dispatch(getLicenses(items));
  };

  // const setUsersListAdminAppl = async (users) => {
  //   dispatch(getUsersListAPPL(users));
  // };

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
          setNormative(requestList);
          setUsersList(setTableArray(requestList));
          break;
        case 'licenses':
          setLicenses(requestList);
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
    return arrayList.map((item) => {
      return setItem(item);
    });
  };

  const displayDetailInfo = (dataIndex) => {
    // getDetailUserFetch(usersList[dataIndex].id);
  };

  useEffect(() => {
    dispatch(getNormative());
    dispatch(getArticles());
    usersListRequest();
    dispatch(getLicenses());
    //console.log(1, usersList);
    //dispatch(getLicenses());
  }, []);

  useEffect(() => {
    usersListRequest();
    setColumns(activeTab);
  }, [activeTab]);

  return (
    <>
      <div className={styles.ReferenceSectionPage}>
        <h2>СПРАВОЧНЫЙ РАЗДЕЛ</h2>
        <StarReating />
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
