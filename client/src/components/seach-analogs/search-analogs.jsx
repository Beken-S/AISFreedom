import React, { useState } from "react";
import style from './search-analogs.module.css';

export const SearchAnalogs = ({ searchAnalogs, paidSoft }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    paidSoft.forEach(el => {
      if (el.name.toLowerCase().includes(value.toLowerCase())) {
       searchAnalogs(el.type);
      }
    });
  };

  return (
    <>
      <h2>ПОИСК АЛЬТЕРНАТИВ</h2>
      <form onSubmit={handleSubmit} className={style.mainServiceForm}>
        <input className={style.formField} value={value} onChange={handleOnChange} placeholder="Введите название программы" />
        <div className={style.serviceFormSubmit}>
          <button className={style.formSubmit} type="submit">Применить</button>
          <button type="reset" className={style.formSubmit}>Сбросить</button>
        </div>
      </form>
    </>
  );
};