import parse from 'html-react-parser';
import React from 'react';

import style from './Program.module.scss';

export const Program = ({ item }) => {
  return (
    <>
      {item.images && (
        <div key={item.id} className={style.Program}>
          <img
            src={`http://localhost:3000/api/programs/images/${item?.images[0]}`}
            alt="screenshot"
            className={style.programImg}
          />
          <div className={style.programInfo}>
            <h2 className={style.programName}>{item.name}</h2>
            <p className={style.programOs}>Разработчик: {item.developer}</p>
            <p className={style.programOs}>{parse(item.description + ' ')}</p>
            <p className={style.programOs}>{item.os}</p>
            <a className={style.programOs} href={item.home_page_url}>
              {item.home_page_url}
            </a>
            <p className={style.programRaiting}>{item.rating}</p>
            {item.sources && (
              <div>
                Скачать:{' '}
                {item.sources.map((el, i) => {
                  return (
                    <div key={i}>
                      <a href={el.distrib_url}>{el.distrib_url}</a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
