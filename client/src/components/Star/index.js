import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './Star.scss';

const Star = (id, reiting) => {
  console.log('id', id.id);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  async function setRatingNew(ratingValue) {
    setRating(ratingValue);
    //console.log('ratingValue', ratingValue);
    let response = await fetch(`/api/programs/${id.id}/rate`, {
      method: 'PATCH',
      body: JSON.stringify({
        grade: String(ratingValue),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const result = await response.json();
      const newRating = result.newRating;
      //return result;
    } else {
      alert('Ошибка');
    }
  }

  // const setNewRaiting = async () => {
  //   let response = await fetch(`/api/programs/${id}/rate`, {
  //     method: 'PATCH',
  //     body: JSON.stringify({
  //       grade: rating,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   if (response.ok) {
  //     const result = await response.json();
  //     return result;
  //   } else {
  //     //alert('Ошибка');
  //   }
  // };

  // useEffect(() => {
  //   if (rating !== '' && reiting !== rating) {
  //     console.log(111);
  //     setNewRaiting();
  //   }
  // }, [rating]);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              className="star__input"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRatingNew(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <div>
        Поставьте рейтинг программе <span>{rating}</span>
      </div>
    </div>
  );
};

export default Star;
