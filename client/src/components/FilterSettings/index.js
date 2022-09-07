import React from 'react';

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
}) => {
  return (
    <>
      <div className="checkbox">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            defaultChecked={isCheckedPO}
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

      <select className="form-select" name="class">
        <option value="">Выберете класс программного обеспечения</option>
        <option defaultValue="1" value="1">
          Редакторы мультимедиа (редакторы графики)
        </option>
        <option defaultValue="2" value="2">
          Текстовые редакторы
        </option>
        <option defaultValue="3" value="3">
          Архиваторы файлов
        </option>
      </select>

      <select className="form-select" name="os">
        <option defaultValue="selected" value="">
          Выберите операционную систему
        </option>
        <option defaultValue="1" value="1">
          Windows 32-bit (x86)
        </option>
        <option defaultValue="2" value="2">
          Windows 64-bit (x64)
        </option>
        <option defaultValue="3" value="3">
          Windows (x86-x64)
        </option>
        <option defaultValue="4" value="4">
          Linux
        </option>
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
