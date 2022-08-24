import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './CatalogItem.module.scss';

export const CatalogItem = ({ program }) => {
  return (
    <>
      <NavLink to={`${program.id}`} className={style.programLink}>
        <li className={style.programItem}>
          <img
            src={program.img}
            alt="screenshot"
            className={style.programImg}
          />
          <div className={style.programInfo}>
            <h2 className={style.programName}>{program.name}</h2>
            <p className={style.programOs}>{program.os}</p>
            <p className={style.programRaiting}>{program.raiting}</p>
          </div>
        </li>
      </NavLink>
    </>
  );
};
