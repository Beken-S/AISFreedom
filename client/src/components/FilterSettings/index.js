import cn from 'classnames';
import React, { useEffect } from 'react';

import style from './FilterSettings.module.scss';

import '../../App.scss';
import './Bootstrap.scss';

const FilterSettings = ({
  isCheckedPO,
  setCheckedPO,
  isCheckedAnalog,
  setCheckedAnalog,
  resetSearch,
  error,
  typesPrograms,
  allOs,
}) => {
  useEffect(() => {
    if (!isCheckedPO && !isCheckedAnalog) {
      setCheckedPO(true);
    }
  }, [isCheckedPO, isCheckedAnalog]);
  return (
    <>
      <div className="checkbox">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked={isCheckedPO}
            onChange={() => setCheckedPO((prev) => !prev)}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Поиск по номенклатуре свободного ПО
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            defaultChecked={isCheckedAnalog}
            onChange={() => setCheckedAnalog((prev) => !prev)}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Поиск по номенклатуре альтернатив
          </label>
        </div>
      </div>

      <select className={cn(style.select, 'form-select')} name="class">
        <option value="">Выберете класс программного обеспечения</option>
        {typesPrograms.map((el) => {
          return (
            <option key={el.id} defaultValue={el.id} value={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
      <select className="form-select" name="os">
        <option defaultValue="selected" value="">
          Выберите операционную систему
        </option>
        {allOs.map((el) => {
          return (
            <option key={el.id} defaultValue={el.id} value={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
      {error && <div className={style.error}>{error}</div>}
      <div className="service-form-submit">
        <input type="submit" className="form-submit" value="Применить" />
        <input
          onClick={resetSearch}
          type="reset"
          className="form-submit"
          value="Сбросить"
        />
      </div>
    </>
  );
};

export default FilterSettings;
