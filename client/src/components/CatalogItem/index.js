import '@smastrom/react-rating/style.css';

import { Rating } from '@smastrom/react-rating';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import StarReating from '../../components/StarReating';

import style from './CatalogItem.module.scss';

export const CatalogItem = ({ program, typeOs }) => {
  const [ratingValue, setRatingValue] = useState();

  if (typeOs) {
    const set = new Set();
    const filter = program.sources.map((source) =>
      typeOs.filter((el) => el.id === source.operation_system_id)
    );
    filter.forEach((el) =>
      el.forEach((elem) => {
        if (elem.name.includes('windows')) {
          set.add('Windows');
        }
        if (elem.name.includes('linux')) {
          set.add('Linux');
        }
      })
    );

    const os = [...set];

    return (
      <>
        <NavLink to={`${program.id}`} className={style.programLink}>
          <li className={style.programItem}>
            <img
              src={`http://localhost:3000/api/programs/logos/${program.logo}`}
              alt="logo_program"
              className={style.programImg}
            />
            <div className={style.programInfo}>
              <h2 className={style.programName}>{program.name}</h2>
              <p className={style.programOs}>{os.join(', ')}</p>
              {/* <StarReating reiting={program.rating} /> */}
              <Rating
                style={{ maxWidth: 250 }}
                value={program.rating}
                onChange={() => setRatingValue(program.rating)}
                readOnly
                items={5}
              />
            </div>
          </li>
        </NavLink>
      </>
    );
  }
};
