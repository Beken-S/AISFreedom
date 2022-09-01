import React, { useEffect, useState } from 'react';

import filter_img from '../../assets/img/filter.png';
import Checbox from '../../UI/Checbox';

import { filter } from './filter';
import style from './FilterItem.module.scss';

export default function FilterItem({ type, state }) {
  const [filterStatus, setFilterStatus] = state;
  const [newFilterStatus, setNewFilterStatus] = useState(filterStatus);

  const courseList = [1, 2, 3, 4, 5, 6];
  const statusList = ['Заявки', 'Члены профсоюза', 'Исключённые'];

  const [filterVisible, setFilterVisible] = useState(false);
  const [facultiesList, setFacultiesList] = useState([
    { id: '', title: 'Выберите вариант' },
    { id: '0', title: 'вариант1' },
    { id: '1', title: 'вариант2' },
  ]);

  // const getFacultiesList = async () => {
  //   const responce = await HTTP.GetWithOutAuth(REQUEST_URL.getFaculties);
  //   setFacultiesList([{ id: '', title: 'Выберите факультет' }, ...responce]);
  // };

  // useEffect(() => {
  //   getFacultiesList();
  // }, []);

  const setCheked = (value, field = type) => {
    const itemIndex = filterStatus[field].indexOf(value);
    if (itemIndex !== -1) {
      return true;
    } else return false;
  };

  const setNewFilterState = (e, value, field = type) => {
    //console.log(e.target.checked, value, field)
    let filterArr;
    filterArr = filterStatus;
    if (e.target.checked) {
      if (Array.isArray(filterStatus[field])) {
        filterArr[field].push(value);
      } else {
        filterArr[field] = value;
      }
      setNewFilterStatus({
        ...filterStatus,
        faculty: filterArr.faculty,
        // grade_level: filterArr.grade_level,
        academic_level: filterArr.academic_level,
      });
    } else {
      const itemIndex = filterArr[field].indexOf(value);
      if (itemIndex !== -1) {
        if (Array.isArray(filterStatus[field])) {
          filterArr[field].splice(itemIndex, 1);
        } else {
          filterArr[field] = '';
        }
      }
      setNewFilterStatus({
        ...filterStatus,
        faculty: filterArr.faculty,
        // grade_level: filterArr.grade_level,
        academic_level: filterArr.academic_level,
      });
    }
  };

  const setFiltersOptions = () => {
    if (type === 'academic_level') {
      return filter.map((item, key) => {
        if (item.title.indexOf('Выберите', 0) === -1) {
          return (
            <Checbox
              checked={setCheked(item.title)}
              onChange={(e) => setNewFilterState(e, item.title)}
              text={item.title}
              key={key}
            />
          );
        }
      });
    }
    if (type === 'faculty') {
      return facultiesList.map((item, key) => {
        if (item.title.indexOf('Выберите', 0) === -1) {
          return (
            <Checbox
              checked={setCheked(item.title)}
              onChange={(e) => setNewFilterState(e, item.title)}
              text={item.title}
              key={key}
            />
          );
        }
      });
    }
    if (type === 'grade_level') {
      return courseList.map((item, key) => {
        return (
          <Checbox
            checked={setCheked(item)}
            onChange={(e) => setNewFilterState(e, item)}
            text={`${item} курс`}
            key={key}
          />
        );
      });
    }
    if (type === 'status') {
      return statusList.map((item, key) => {
        if (item.indexOf('Выберите', 0) === -1) {
          return <Checbox text={item} key={key} />;
        }
      });
    }
  };

  return (
    <>
      <div className="filter__inner">
        <div
          className="filter__common"
          onClick={() => setFilterVisible(!filterVisible)}
        >
          <img src={filter_img} alt="" />
          <div className="filter__common-title">
            {type === 'academic_level'
              ? filterStatus[type]
                ? filterStatus[type]
                : 'Уровень обучения'
              : null}
            {type === 'faculty'
              ? filterStatus[type]
                ? filterStatus[type]
                : 'Факультет'
              : null}
            {type === 'grade_level'
              ? filterStatus[type]
                ? filterStatus[type]
                : 'Курс'
              : null}
            {type === 'status'
              ? filterStatus[type]
                ? filterStatus[type]
                : 'Статус'
              : null}
          </div>
        </div>
        <div className={filterVisible ? 'filter filter-active' : 'filter'}>
          <div className="filter-title">
            {type === 'academic_level'
              ? filterStatus[type]
                ? filterStatus[type]
                : 'Уровень обучения'
              : null}
            {type === 'faculty'
              ? filterStatus[type]
                ? filterStatus[type]
                : 'Факультет'
              : null}
            {type === 'grade_level'
              ? filterStatus[type]
                ? filterStatus[type]
                : 'Курс'
              : null}
            {type === 'status'
              ? filterStatus[type]
                ? filterStatus[type]
                : 'Статус'
              : null}
          </div>
          <div className="filter-body-faculty">{setFiltersOptions()}</div>
          <div className="filter-body-buttons">
            <div
              className="filter-body-buttons-close"
              onClick={() => setFilterVisible(false)}
            >
              ЗАКРЫТЬ
            </div>
            <div
              className="filter-body-buttons-accept"
              onClick={() => {
                setFilterStatus({
                  ...filterStatus,
                  academic_level: newFilterStatus.academic_level,
                  faculty: newFilterStatus.faculty,
                });
                setFilterVisible(false);
              }}
            >
              ОК
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
