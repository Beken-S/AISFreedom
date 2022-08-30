import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import '../../App.scss';
import style from './Pagination.module.scss';

const Pagination = ({ pages = 5, getCurrentPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  useEffect(() => {
    getCurrentPage(currentPage);
  }, [currentPage]);

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
              className={currentPage === page ? style.active : style.page}
              onClick={() => setCurrentPage(page)}
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
