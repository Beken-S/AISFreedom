import cn from 'classnames';
import React, { useState } from 'react';

import '../../App.scss';
import style from './Pagination.module.scss';

const Pagination = ({ pages = 5 }) => {
  const page = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 512 512">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
    </svg>
  );
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(page);
  }
  return (
    <nav className={style.pagination}>
      <div className={cn(style.pagination__wrap, 'wrap')}>
        <button
          className={style.pagination__arrow}
          onClick={() =>
            setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          <i className="fas fa-angle-left" aria-hidden="true"></i>
        </button>
        {numberOfPages.map((page, index) => {
          return (
            <button
              className={currentPage === index + 1 ? style.active : style.page}
              onClick={() => setCurrentPage(index + 1)}
              key={index}
            >
              {page}
            </button>
          );
        })}
        <button
          className={style.pagination__arrow}
          onClick={() =>
            setCurrentPage((prev) => (prev === pages ? prev : prev + 1))
          }
        >
          <i className="fas fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
