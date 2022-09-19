import cn from 'classnames';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './StarReating.scss';

const StarReating = () => {
  const ratings = document.querySelectorAll('.rating');
  if (ratings.length > 0) {
    initRatings();
  }

  // Основная функция
  function initRatings() {
    let ratingActive, ratingValue;
    // "Бегаем" по всем рейтингам на странице
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }

    // Инициализируем конкретный рейтинг
    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains('rating_set')) {
        setRating(rating);
      }
    }

    // Инициализайция переменных
    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
    }
    // Изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    // Возможность указать оценку
    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating__item');
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];
        ratingItem.addEventListener('mouseenter', function (e) {
          // Обновление переменных
          initRatingVars(rating);
          // Обновление активных звезд
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener('mouseleave', function (e) {
          // Обновление активных звезд
          setRatingActiveWidth();
        });
        ratingItem.addEventListener('click', function (e) {
          // Обновление переменных
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            // "Отправить" на сервер
            setRatingValue(ratingItem.value, rating);
          } else {
            // Отобразить указанную оцнку
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          }
        });
      }
    }

    async function setRatingValue(value, rating) {
      if (!rating.classList.contains('rating_sending')) {
        rating.classList.add('rating_sending');

        // Отправика данных (value) на сервер
        let response = await fetch('./rating.json', {
          method: 'GET',

          //body: JSON.stringify({
          //	userRating: value
          //}),
          //headers: {
          //	'content-type': 'application/json'
          //}
        });
        if (response.ok) {
          const result = await response.json();

          // Получаем новый рейтинг
          const newRating = result.newRating;

          // Вывод нового среднего результата
          ratingValue.innerHTML = newRating;

          // Обновление активных звезд
          setRatingActiveWidth();

          rating.classList.remove('rating_sending');
        } else {
          alert('Ошибка');

          rating.classList.remove('rating_sending');
        }
      }
    }
  }

  return (
    // <div className={style.simple__reating}>
    //   <div className={style.simple__reating__items}>
    //     <input
    //       id="simple__5"
    //       type="radio"
    //       className={style.simple__reating__item}
    //       name="simple"
    //       value="5"
    //     ></input>
    //     <label for="simple__5" className={style.simple__reating__label}></label>
    //     <input
    //       id="simple__4"
    //       type="radio"
    //       className={style.simple__reating__item}
    //       name="simple"
    //       value="4"
    //     ></input>
    //     <label for="simple__4" className={style.simple__reating__label}></label>
    //     <input
    //       id="simple__3"
    //       type="radio"
    //       className={style.simple__reating__item}
    //       name="simple"
    //       value="3"
    //     ></input>
    //     <label for="simple__3" className={style.simple__reating__label}></label>
    //     <input
    //       id="simple__2"
    //       type="radio"
    //       className={style.simple__reating__item}
    //       name="simple"
    //       value="2"
    //     ></input>
    //     <label for="simple__2" className={style.simple__reating__label}></label>
    //     <input
    //       id="simple__1"
    //       type="radio"
    //       className={style.simple__reating__item}
    //       name="simple"
    //       value="1"
    //     ></input>
    //     <label for="simple__1" className={style.simple__reating__label}></label>
    //   </div>
    // </div>
    <div class="form__item">
      <div class="form">
        <div data-ajax="true" class="rating rating_set">
          <div class="rating__body">
            <div class="rating__active"></div>
            <div class="rating__items">
              <input
                type="radio"
                class="rating__item"
                value="1"
                name="rating"
              />
              <input
                type="radio"
                class="rating__item"
                value="2"
                name="rating"
              />
              <input
                type="radio"
                class="rating__item"
                value="3"
                name="rating"
              />
              <input
                type="radio"
                class="rating__item"
                value="4"
                name="rating"
              />
              <input
                type="radio"
                class="rating__item"
                value="5"
                name="rating"
              />
            </div>
          </div>
          <div class="rating__value">1.6</div>
        </div>
      </div>
    </div>
  );
};

export default StarReating;

{
  /* {[...Array(5)].map((star) => {
        return <FaStar size={30} color={'#ffc107'} />;
      })} */
}
