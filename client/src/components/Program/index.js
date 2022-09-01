import cn from 'classnames';
import parse from 'html-react-parser';
import React from 'react';
import '../../App.scss';

import style from './Program.module.scss';

export const Program = ({ item }) => {
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
                <span>{item.rating}</span>
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
                  <b>Лицензия:</b>
                  {'-'}
                </li>
                <li className={style.article}>
                  <b>Класс ПО:</b> {'-'}
                </li>
                <li className={style.article}>
                  <b>Требования к OC:</b> {'-'}
                </li>
                <li className={style.article}>
                  <b>Проприетарные аналоги:</b>{' '}
                  {item.proprietary_counterparts.join(',')}
                </li>
              </ul>
              <img
                src={`http://localhost:3000/api/programs/images/${item?.images[0]}`}
                alt="screenshot"
                className={style.description__screenshot}
              />
              <p className={style.description__text}>
                {parse(item.description + ' ')}
              </p>
              <div className={style.flex}>
                <div className={style.platform}>
                  {item.sources.map((el, i) => {
                    return (
                      <div key={i}>
                        <a href={el.distrib_url}>
                          {el.operation_system_id === 3 ? 'Windows' : 'Linux'}
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
