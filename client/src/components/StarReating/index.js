import cn from 'classnames';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import style from './StarReating.module.scss';

const StarReating = () => {
  return (
    <div>
      {[...Array(5)].map((star) => {
        return <FaStar size={30} color={'#ffc107'} />;
      })}
    </div>
  );
};

export default StarReating;
