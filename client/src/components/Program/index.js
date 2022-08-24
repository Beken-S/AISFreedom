import React from 'react';

import style from './Program.module.scss';

export const Program = ({ item }) => {
  return (
    <>
      {item.map((el) => (
        <div key={el.id} className={style.Program}>
          <img src={el.img} alt="screenshot" className={style.programImg} />
          <div className={style.programInfo}>
            <h2 className={style.programName}>{el.name}</h2>
            <p className={style.programOs}>{el.os}</p>
            <p className={style.programRaiting}>{el.raiting}</p>
          </div>
        </div>
      ))}
    </>
  );
};
