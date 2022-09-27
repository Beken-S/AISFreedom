import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import style from './Form.module.scss';
import './Bootstrap.scss';
import '../../App.scss';

import FilterSettingsContainer from '@containers/FilterSettingsContainer/FilterSettingsContainer';

const Form = ({ filter }) => {
  const [isCheckedPO, setCheckedPO] = useState(true);
  const [isCheckedAnalog, setCheckedAnalog] = useState(false);
  const [isFilter, setFilter] = useState(false);

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = Array.prototype.slice
      .call(e.target)
      .filter((el) => el.name)
      .reduce(
        (form, el) => ({
          ...form,
          [el.name]: el.value,
          PO: isCheckedPO,
          Analog: isCheckedAnalog,
        }),
        {}
      );
    filter(fields);
  };

  return (
    <form id="formDataf" onSubmit={handleSubmit} className={cn(style.form)}>
      <div className={cn('wrap')}>
        <div className={style.form__Filter}>
          <div className={cn(style.form__input, 'input-group')}>
            <input
              ref={ref}
              type="text"
              name="text"
              className="form-control"
              placeholder="Введите название программы"
            />
            <span
              className="input-group-text"
              onClick={() => setFilter((prev) => !prev)}
            >
              <span className="material-symbols-outlined"> tune </span>
            </span>
            <button className="input-group-text">
              <span className="material-symbols-outlined"> search </span>
            </button>
          </div>
          {isFilter && (
            <FilterSettingsContainer
              isCheckedPO={isCheckedPO}
              setCheckedPO={setCheckedPO}
              isCheckedAnalog={isCheckedAnalog}
              setCheckedAnalog={setCheckedAnalog}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
