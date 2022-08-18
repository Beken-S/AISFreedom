import React from 'react';

import { Pagination } from '../Pagination/Pagination';

import style from './Analogs.module.scss';

export const Analogs = ({ filtered }) => {
  return (
    <>
      <ul className={style.programsList}>
        {filtered.length > 0 &&
          filtered.map((el, i) => {
            return (
              <a key={i} href="#0" className={style.programLink}>
                <li className={style.programItem}>
                  <img
                    src={el.img}
                    alt="screenshot"
                    className={style.programImg}
                  />
                  <div className={style.programInfo}>
                    <h4 className={style.programName}>{el.name}</h4>
                    <p>
                      {el.os}
                      <span> {el.downloads}&darr;</span>{' '}
                    </p>
                  </div>
                </li>
              </a>
            );
          })}
      </ul>
      {filtered.length !== 0 && <Pagination />}
    </>
  );
};
