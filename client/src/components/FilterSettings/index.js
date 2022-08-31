import React, { useEffect } from 'react';

import Checbox from '../../UI/Checbox';

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
          <Checbox onChange={onCheckLinux} checked={isLinux} text={'Linux'} />
        </label>
        <label>
          <Checbox
            onChange={onCheckWindows}
            checked={isWindows}
            text={'Windows'}
          />
        </label>
      </div>
      <div className={style.FilterSettings__classes}>
        Выберите класс программы:
        <label>
          <Checbox
            onChange={onCheckGraphic}
            checked={isGraphic}
            text={'Редакторы графики'}
          />
        </label>
        <label>
          <Checbox
            onChange={onCheckArchiver}
            checked={isArchiver}
            text={'Архиваторы файлов'}
          />
        </label>
        <label>
          <Checbox
            onChange={onCheckText}
            checked={isText}
            text={'Текстовые редакторы'}
          />
        </label>
      </div>
    </div>
  );
};

export default FilterSettings;
