import React, { useEffect, useState } from 'react';

import style from './FilterSettings.module.scss';

const FilterSettings = ({ onFilter }) => {
  const [isGraphic, setIsGraphic] = useState(false);
  const [isArchiver, setIsArchiver] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isLinux, setIsLinux] = useState(true);
  const [isWindows, setIsWindows] = useState(true);

  let filters = [];
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
    if (isGraphic) {
      filters.push({ type: 'Редакторы графики' });
    }
    if (isArchiver) {
      filters.push({ type: 'Архиваторы файлов' });
    }
    if (isText) {
      filters.push({ type: 'Текстовые редакторы' });
    }
    if (filters.length > 0) {
      setTimeout(() => {
        onFilter(filters);
        filters = [];
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
