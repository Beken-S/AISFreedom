import cn from 'classnames';
import MUIDataTable from 'mui-datatables';
import React, { useState, useEffect } from 'react';
import '../../App.scss';
import './Material.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getApplications } from '../../store/thunks/Moderator-thunks';

import styles from './ModeratorPage.module.scss';

const ModeratorPage = () => {
  const [columns, setActiveColums] = useState([]);

  const dispatch = useDispatch();
  const row = useSelector((state) => state.moderator.row);
  const data = [];
  console.log(data);
  row.forEach((el) => el.forEach((elem) => data.push(elem)));
  const setColumns = () => {
    setActiveColums([
      'Номер заявки',
      'Дата создания',
      'Срок исполнения',
      'Наименование программы',
      'Объект информатизации',
      'ФИО пользователя',
      'Должность',
      'Контактные данные',
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
  };

  useEffect(() => {
    dispatch(getApplications());
    setColumns();
  }, []);

  return (
    <>
      <div className={styles.ModeratorPage}>
        <header className={styles.headerSystemName}>
          <div className={cn(styles.headerSystemNameWrap, 'wrap')}>
            <h2 className={styles.moderatorName}>
              <span>Фамилия И.О.</span>
              <NavLink to="/login" className="material-symbols-outlined">
                logout
              </NavLink>
            </h2>
            <nav className={styles.headerMenuModerator}>
              <NavLink to="/" className={styles.headerService}>
                На главную
              </NavLink>
              <span> / </span>
              <NavLink to="/" className={styles.headerService}>
                Потребности
              </NavLink>
            </nav>
          </div>
        </header>
        <div className={cn('wrap')}>
          <h1 className={styles.heading}>ЗАЯВКИ НА СПО</h1>
          <select className="form-select">
            <option defaultValue="selected">Выберите статус заявки</option>
            <option value="1">Актуальные</option>
            <option value="2">Не выполенные</option>
            <option value="3">Исполненные</option>
            <option value="4">Отмененные</option>
            <option value="5">Все</option>
          </select>
          <div className={styles.periodChoices}>
            <span className={styles.bHistory__periodTypeGroupby}>
              Группировать по:
            </span>
            <div className={styles.form_radio_btn}>
              <input
                id="radio-1"
                type="radio"
                name="radio"
                defaultValue="1"
                defaultChecked="selected"
              />
              <label htmlFor="radio-1">Неделя</label>
            </div>

            <div className={styles.form_radio_btn}>
              <input id="radio-2" type="radio" name="radio" defaultValue="2" />
              <label htmlFor="radio-2"> Месяц</label>
            </div>

            <div className={styles.form_radio_btn}>
              <input id="radio-3" type="radio" name="radio" defaultValue="3" />
              <label htmlFor="radio-3"> Год </label>
            </div>

            <div className={styles.form_radio_btn}>
              <input id="radio-4" type="radio" name="radio" defaultValue="4" />
              <label htmlFor="radio-4"> Всё время </label>
            </div>
            <input
              type="text"
              id="dates"
              name="dates"
              autoComplete="off"
              className={styles.dataRange}
              defaultValue="2.05.22 – 20.05.22"
              data-start-date="2000-11-10"
            />
          </div>
        </div>
        <div className={styles.table}>
          <MUIDataTable
            title=""
            data={data}
            columns={columns}
            options={options}
          />
        </div>
        <div className={cn('wrap')}>
          <div className="service-form-submit">
            <input type="submit" className="form-submit" value="Сбросить" />
            <input type="submit" className="form-submit" value="Закрыть" />
            <input type="submit" className="form-submit" value="Отменить" />
            <input
              type="submit"
              className="form-submit"
              value="Скачать отчёт"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeratorPage;
