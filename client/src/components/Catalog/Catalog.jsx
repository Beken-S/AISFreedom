import React from 'react';

import Pagination from '../Pagination/index';

import style from './Catalog.module.scss';

export const Catalog = ({ freeSoft }) => {
  return (
    <>
      <ul className={style.programsList}>
        {freeSoft.map((el, i) => {
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
      <Pagination />
    </>
  );
};
