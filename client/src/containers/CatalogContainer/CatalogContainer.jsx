import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import { store } from '../../store/store';
import { Loader } from '../../components/Loader';
import {
  filterProgramsThunk,
  getPrograms,
  search,
  setCurrentPageThunk,
} from '../../store/thunks/Catalog-thunks';

import { Catalog } from '@components/Catalog/Catalog';

const CatalogContainer = ({
  getPrograms,
  programs,
  totalCountPages,
  filtered,
  isSearch,
  setCurrentPageThunk,
  isFilter,
  search,
  filterProgramsThunk,
  isLoading,
}) => {
  // console.log(store.getState().catalog);
  useEffect(() => {
    getPrograms();
  }, []);

  const changePage = (page) => {
    setCurrentPageThunk(page);
    if (isSearch) {
      search(page);
    }
    if (isFilter) {
      filterProgramsThunk(page);
    }
    if (!isSearch && !isFilter) {
      getPrograms(page);
    }
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Catalog
        programs={isSearch || isFilter ? filtered : programs}
        totalCountPages={totalCountPages}
        changePage={changePage}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  programs: state.catalog.programs,
  filtered: state.catalog.filtered,
  totalCountPages: state.catalog.totalCountPages,
  isSearch: state.catalog.isSearch,
  isFilter: state.catalog.isFilter,
  isLoading: state.catalog.isLoading,
});

export default connect(mapStateToProps, {
  getPrograms,
  setCurrentPageThunk,
  search,
  filterProgramsThunk,
})(CatalogContainer);
