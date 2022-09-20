import cn from 'classnames';
import parse from 'html-react-parser';
import React from 'react';
import '../../App.scss';

import StarReating from '../../components/StarReating';

import style from './Program.module.scss';

export const Program = ({ item, license, classProgram, typeOs }) => {
  const os = [];
  if (typeOs) {
    typeOs.map((el) => os.push(el.name));
  }
  return (
    <>
      <section className={style.description}>
        <div className={cn(style.description__wrap, 'wrap')}>
          {item.images && (
            <div key={item.id} className={style.Program}>
              <div className={style.description__title}>
                <img
                  src={`http://localhost:3000/api/programs/logos/${item.logo}`}
                  width="40"
                  alt="logo"
                />
                <h1>{item.name}</h1>
                <StarReating reiting={item.rating} />
                {/* <span>{item.rating}</span> */}
              </div>
              <ul className={style.description__header}>
                <li className={style.article}>
                  <b>Разработчик:</b> {item.developer}
                </li>
                <li className={style.article}>
                  <b> Официальный сайт:</b>{' '}
                  <a className={style.link} href={item.home_page_url}>
                    {' '}
                    {item.home_page_url}
                  </a>
                </li>
                <li className={style.article}>
                  <b>Лицензия:</b> {license.acronym}
                </li>
                <li className={style.article}>
                  <b>Класс ПО:</b> {classProgram.name}
                </li>
                <li className={style.article}>
                  <b>Требования к OC:</b> {os.join(', ')}
                </li>
                <li className={style.article}>
                  <b>Проприетарные аналоги:</b>{' '}
                  {item.proprietary_counterparts.join(', ')}
                </li>
              </ul>
              <img
                src={`http://localhost:3000/api/programs/images/${item?.images[0]}`}
                alt="screenshot"
                className={style.description__screenshot}
              />
              <span className={style.description__text}>
                {parse(item.description + ' ')}
              </span>
              <div className={style.flex}>
                <div className={style.platform}>
                  {item.sources.map((el, i) => {
                    return (
                      <div key={i}>
                        <a href={el.distrib_url}>
                          {typeOs.map((type) => {
                            return (
                              el.operation_system_id === type.id && type.name
                            );
                          })}
                        </a>
                      </div>
                    );
                  })}
                </div>
                <div>|</div>
                <a href={item.manual_url} className={style.manual}>
                  Инструкция пользователя
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
