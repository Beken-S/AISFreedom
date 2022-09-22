import React from 'react';
import { useDispatch } from 'react-redux';

import '../../App.scss';
import {
  filterApplications,
  getApplications,
} from '../../store/thunks/Moderator-thunks';

import styles from './ModeratorForm.module.scss';

export const ModeratorForm = () => {
  const dispatch = useDispatch();
  const filter = (e) => {
    if (e.target.value === 'all') {
      dispatch(getApplications());
    } else {
      dispatch(filterApplications(e.target.value));
    }
  };
  return (
    <div className="wrap">
      <h1 className={styles.heading}>ЗАЯВКИ НА СПО</h1>
      <select onChange={filter} className="form-select">
        <option value="all">Выберите статус заявки</option>
        <option value="current">Актуальные</option>
        <option value="expired">Не выполненные</option>
        <option value="completed">Исполненные</option>
        <option value="rejected">Отмененные</option>
        <option value="all">Все</option>
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
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
};