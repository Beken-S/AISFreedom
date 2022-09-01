import cn from 'classnames';
import React, { useState } from 'react';

import '../../App.scss';
import style from './Pagination.module.scss';

const Pagination = ({ pages = 1, changePage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const onChangePage = (page) => {
    setCurrentPage(page);
    changePage(page);
  };
  const onChangePageBack = () => {
    let page;
    if (currentPage === 1) {
      page = currentPage;
    } else {
      page = currentPage - 1;
      changePage(page);
    }
    setCurrentPage(page);
  };
  const onChangePageForward = () => {
    let page;
    if (currentPage === pages) {
      page = currentPage;
    } else {
      page = currentPage + 1;
      changePage(page);
    }
    setCurrentPage(page);
  };

  return (
    <nav className={style.pagination}>
      <div className={cn(style.pagination__wrap, 'wrap')}>
        <button className={style.pagination__arrow} onClick={onChangePageBack}>
          <i className="fas fa-angle-left" aria-hidden="true"></i>
        </button>
        {numberOfPages.map((page, index) => {
          return (
            <button
              className={currentPage === page ? style.active : style.page}
              onClick={() => onChangePage(page)}
              key={index}
            >
              {page}
            </button>
          );
        })}
        <button
          className={style.pagination__arrow}
          onClick={onChangePageForward}
        >
          <i className="fas fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
