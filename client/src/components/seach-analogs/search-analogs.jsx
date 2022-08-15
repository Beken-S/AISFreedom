import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import style from "./search-analogs.module.css";

export const SearchAnalogs = ({ searchAnalogs, paidSoft, resetSearch }) => {
  const [value, setValue] = useState("");
  const ref = useRef();
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    ref.current.focus();
  }, []);

  const onReset = () => {
    resetSearch();
    setValue("");
    ref.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      paidSoft.forEach((el) => {
        if (el.name.toLowerCase().includes(value.toLowerCase())) {
          searchAnalogs(el.type);
        }
      });
    }
    ref.current.focus();
  };

  return (
    <>
      <h2>ПОИСК АЛЬТЕРНАТИВ</h2>
      <form onSubmit={handleSubmit} className={style.mainServiceForm}>
        <input
          className={style.formField}
          value={value}
          onChange={handleOnChange}
          placeholder="Введите название программы"
          ref={ref}
        />
        <div className={style.serviceFormSubmit}>
          <button className={style.formSubmit} type="submit">
            Применить
          </button>
          <button onClick={onReset} type="reset" className={style.formSubmit}>
            Сбросить
          </button>
        </div>
      </form>
    </>
  );
};
