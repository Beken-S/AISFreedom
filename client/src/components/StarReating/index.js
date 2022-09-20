import cn from 'classnames';
import React, { useState } from 'react';

import './StarReating.scss';

const StarReating = ({ reiting, id }) => {
  console.log(reiting);
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
        console.log('id', id);
        // Отправика данных (value) на сервер
        let response = await fetch(`/api/programs/${id}/rate`, {
          method: 'PATCH',

          body: JSON.stringify({
            userRating: value,
          }),
          // headers: {
          // 	'content-type': 'application/json'
          // }
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
          <div class="rating__value">{reiting}</div>
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
