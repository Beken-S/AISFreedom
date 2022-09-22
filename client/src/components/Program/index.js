// import { Rating } from '@smastrom/react-rating';
// import '@smastrom/react-rating/style.css';

import cn from 'classnames';
import parse from 'html-react-parser';
import React, { useState, useEffect } from 'react';
import '../../App.scss';

import Star from '../../components/Star';
import StarReating from '../../components/StarReating';

import style from './Program.module.scss';
import './Bootstrap.scss';

export const Program = ({ item, license, classProgram, typeOs }) => {
  const os = [];
  const [url, setUrl] = useState('');
  // const [ratingValue, setRatingValue] = useState(item.rating);
  const onSetLink = (e) => {
    setUrl(e.target.value);
  };
  if (typeOs) {
    typeOs.map((el) => os.push(el.name));
  }

  // const setNewRaiting = async () => {
  //   let response = await fetch(`/api/programs/${item.id}/rate`, {
  //     method: 'PATCH',
  //     body: JSON.stringify({
  //       grade: ratingValue,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   if (response.ok) {
  //     const result = await response.json();
  //     //return result;
  //   } else {
  //     //alert('Ошибка');
  //   }
  // };

  // useEffect(() => {
  //   if (ratingValue !== '' && item.rating !== ratingValue) {
  //     setNewRaiting();
  //   }
  // }, [ratingValue]);

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
                <span>
                  <Star id={item.id} reiting={item.rating} />
                </span>
                {/* <span>
                  <StarReating reiting={item.rating} id={item.id} />
                </span> */}
                {/* <Rating
                  style={{ maxWidth: 250 }}
                  value={item.rating}
                  onChange={(selectedValue) => setRatingValue(selectedValue)}
                /> */}
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
              <div className="input-group description-os">
                <select
                  onChange={onSetLink}
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option>Выберите операционную систему</option>
                  {item.sources.map((el, i) => {
                    return (
                      <option
                        onChange={() => onSetLink(el)}
                        key={i}
                        defaultValue={el.operation_system_id}
                        value={el.distrib_url}
                      >
                        {typeOs.map((type) => {
                          return (
                            el.operation_system_id === type.id && type.name
                          );
                        })}
                      </option>
                    );
                  })}
                </select>
                <a href={url} className="btn btn-outline-secondary">
                  <i className="fas fa-download"></i>
                </a>
              </div>
              <a href={item.manual_url} className={style.manual}>
                <i className="far fa-eye"></i>Инструкция пользователя
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
