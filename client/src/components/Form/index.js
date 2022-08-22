import React, { useEffect, useRef, useState } from 'react';
import FilterSettingsContainer from '@containers/FilterSettingsContainer/FilterSettingsContainer';

import style from './Form.module.scss';

const Form = ({ filtered, searchAnalogs, paidSoft, resetSearch }) => {
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState(false);
  const ref = useRef();
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    ref.current.focus();
  }, []);

  const onReset = () => {
    resetSearch();
    setValue('');
    ref.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (value !== '') {
      debugger;
      paidSoft.forEach((el) => {
        debugger;
        if (el.name.toLowerCase().includes(value.toLowerCase())) {
          debugger;
          searchAnalogs(el.type);
          debugger;
        }
      });
    }
    ref.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.form__Filter}>
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          ref={ref}
          className={style.form__field}
          placeholder="Введите название свободной программы"
        ></input>
        <svg
          onClick={() => setFilter((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          className={style.form__settings}
          width="12"
          viewBox="0 0 192 512"
        >
          <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
        </svg>
        {filter && <FilterSettingsContainer/>}
      </div>
      <div className={style.buttons}>
        <button className={style.buttons__submit} type="submit">
          Применить
        </button>
        <button
          onClick={onReset}
          type="reset"
          className={style.buttons__submit}
        >
          Сбросить
        </button>
      </div>
    </form>
  );
};

export default Form;
