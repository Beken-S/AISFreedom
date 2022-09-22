import MUIDataTable from 'mui-datatables';
import React, { useState, useEffect } from 'react';
import '../../App.scss';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../Loader';

import styles from './ModeratorTable.module.scss';

import { setId } from '@store/actions/Moderator-actions';
import { getApplications } from '@store/thunks/Moderator-thunks';

export const ModeratorTable = () => {
  const [columns, setActiveColums] = useState([]);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.moderator.isLoading);
  const row = useSelector((state) => state.moderator.row);

  const data = [];
  row.forEach((el) => el.forEach((elem) => data.push(elem)));

  const setColumns = () => {
    setActiveColums([
      'Номер заявки',
      'Дата создания/Срок исполнения',
      'Наименование программы',
      'Объект информатизации',
      'Данные пользователя',
      'Основание',
      'Статус',
      'Исполнена',
      'Комментарий',
    ]);
  };

  const options = {
    textLabels: {
      body: {
        noMatch: 'Таблица пуста',
      },
    },
    download: false,
    filter: false,
    print: false,
    search: false,
    viewColumns: false,
    filterType: 'multiselect',
    selectableRowsOnClick: true,
    responsive: 'standard',
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 100],
    onTableChange: (action, tableState) => {
      const index = tableState.previousSelectedRow?.index;
      const data = tableState.data;
      let filter;
      if (index !== undefined && index !== null) {
        filter = data.filter((el) => el.index === index);
        const [obj] = filter;
        dispatch(setId(obj.data[0]));
      }
    },
  };

  useEffect(() => {
    dispatch(getApplications());
    setColumns();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.table}>
      <MUIDataTable title="" data={data} columns={columns} options={options} />
    </div>
  );
};
