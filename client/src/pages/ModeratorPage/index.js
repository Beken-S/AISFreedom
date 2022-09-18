import cn from 'classnames';
import MUIDataTable from 'mui-datatables';
import React, { useState, useEffect } from 'react';
import '../../App.scss';
import './Material.scss';
import { NavLink } from 'react-router-dom';

import styles from './ModeratorPage.module.scss';

const ModeratorPage = () => {
  const [columns, setActiveColums] = useState([]);

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
    selectToolbarPlacement: false,
    responsive: 'standard',
  };

  const setTableArray = () => {
    //
  };

  useEffect(() => {
    //usersListRequest();
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
            <option selected>Выбирите статус заявки</option>
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
              <input id="radio-1" type="radio" name="radio" value="1" />
              <label for="radio-1">Неделя</label>
            </div>

            <div className={styles.form_radio_btn}>
              <input id="radio-2" type="radio" name="radio" value="2" />
              <label for="radio-2"> Месяц</label>
            </div>

            <div className={styles.form_radio_btn}>
              <input id="radio-3" type="radio" name="radio" value="3" />
              <label for="radio-3"> Год </label>
            </div>

            <div className={styles.form_radio_btn}>
              <input id="radio-4" type="radio" name="radio" value="4" />
              <label for="radio-4"> Всё время </label>
            </div>
            <input
              type="text"
              id="dates"
              name="dates"
              autocomplete="off"
              className={styles.dataRange}
              value="2.05.22 – 20.05.22"
              data-start-date="2000-11-10"
            />
          </div>
        </div>
        <div className={styles.table}>
          <MUIDataTable
            title=""
            data={setTableArray()}
            columns={columns}
            options={options}
          />
        </div>
        <div className={cn('wrap')}>
          <div className="service-form-submit">
            <input type="submit" class="form-submit" value="Сбрость" />
            <input type="submit" class="form-submit" value="Закрыть" />
            <input type="submit" class="form-submit" value="Отменить" />
            <input type="submit" class="form-submit" value="Скачать отчёт" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeratorPage;
