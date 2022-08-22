import React from 'react';

import Pagination from '../Pagination';

import style from './Catalog.module.scss';

export const Catalog = ({ freeSoft, filtered }) => {
  return (
    <>
      <ul className={style.programsList}>
        {filtered.map((el, i) => {
          return (
            <a href="!#" key={i} className={style.programLink}>
              <li className={style.programItem}>
                <img
                  src={el.img}
                  alt="screenshot"
                  className={style.programImg}
                />
                <div className={style.programInfo}>
                  <h2 className={style.programName}>{el.name}</h2>
                  <p className={style.programOs}>{el.os}</p>
                  <p className={style.programRaiting}>{el.raiting}</p>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
      <Pagination />
    </>
  );
};
