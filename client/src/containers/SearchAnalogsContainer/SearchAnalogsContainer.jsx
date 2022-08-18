import React from 'react';
import { connect } from 'react-redux';

import SearchAnalogs from '../../components/SearchAnalogs/SearchAnalogs';

import { searchAnalogs, resetSearch } from '@store/actions/searchActions';

const SearchAnalogsContainer = ({
  filtered,
  searchAnalogs,
  paidSoft,
  resetSearch,
}) => {
  return (
    <SearchAnalogs
      filtered={filtered}
      paidSoft={paidSoft}
      searchAnalogs={searchAnalogs}
      resetSearch={resetSearch}
    />
  );
};
const mapStateToProps = (state) => ({
  paidSoft: state.soft.paidSoft,
  freeSoft: state.soft.freeSoft,
  filtered: state.soft.filtered,
});

export default connect(mapStateToProps, { searchAnalogs, resetSearch })(
  SearchAnalogsContainer
);
