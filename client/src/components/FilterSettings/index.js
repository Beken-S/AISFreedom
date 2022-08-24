import React, { useEffect } from 'react';

import style from './FilterSettings.module.scss';

const FilterSettings = ({
  onFilter,
  isGraphic,
  setIsGraphic,
  isArchiver,
  isLinux,
  isWindows,
  setIsArchiver,
  isText,
  setIsText,
  setIsWindows,
  setIsLinux,
}) => {
  let filtersOfType = [];
  let filtersOfOs = [];
  const onCheckGraphic = (e) => {
    setIsGraphic(e.target.checked);
  };

  const onCheckArchiver = (e) => {
    setIsArchiver(e.target.checked);
  };

  const onCheckText = (e) => {
    setIsText(e.target.checked);
  };
  const onCheckLinux = (e) => {
    setIsLinux(e.target.checked);
  };
  const onCheckWindows = (e) => {
    setIsWindows(e.target.checked);
  };

  useEffect(() => {
    debugger;
    if (isGraphic) {
      filtersOfType.push({ type: 'Редакторы графики' });
    }
    if (isArchiver) {
      filtersOfType.push({ type: 'Архиваторы файлов' });
    }
    if (isText) {
      filtersOfType.push({ type: 'Текстовые редакторы' });
    }
    if (isLinux) {
      filtersOfOs = [];
      filtersOfOs.push({ os: 'Linux' });
    }
    if (isWindows) {
      filtersOfOs = [];
      filtersOfOs.push({ os: 'Windows' });
    }
    if (filtersOfOs.length >= 0) {
      setTimeout(() => {
        onFilter(filtersOfType, filtersOfOs);
        filtersOfType = [];
      }, 1000);
    }
  }, [isGraphic, isArchiver, isText, isLinux, isWindows]);

  return (
    <div className={style.FilterSettings}>
      <div>
        Выберите OS:
        <label>
          <input
            type="checkbox"
            onChange={onCheckLinux}
            defaultChecked={isLinux}
          />{' '}
          Linux
        </label>
        <label>
          <input
            type="checkbox"
            onChange={onCheckWindows}
            defaultChecked={isWindows}
          />{' '}
          Windows
        </label>
      </div>
      <div className={style.FilterSettings__classes}>
        Выберите класс программы:
        <label>
          <input
            type="checkbox"
            onChange={onCheckGraphic}
            defaultChecked={isGraphic}
          />{' '}
          Редакторы графики
        </label>
        <label>
          <input
            type="checkbox"
            onChange={onCheckArchiver}
            defaultChecked={isArchiver}
          />{' '}
          Архиваторы файлов
        </label>
        <label>
          <input
            type="checkbox"
            onChange={onCheckText}
            defaultChecked={isText}
          />{' '}
          Текстовые редакторы
        </label>
      </div>
    </div>
  );
};

export default FilterSettings;
