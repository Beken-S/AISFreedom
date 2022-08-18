import React, { useState } from 'react';

import style from './Pagination.module.scss';

export const Pagination = ({ pages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  return (
    <div className={style.pagination}>
      {numberOfPages.map((page, index) => {
        return (
          <button
            className={currentPage === page ? style.active : style.page}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
