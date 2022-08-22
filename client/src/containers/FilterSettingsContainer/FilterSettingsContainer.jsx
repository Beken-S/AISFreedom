import { searchAnalogs, resetSearch } from '@store/actions/searchActions';
import React from 'react';
import { connect } from 'react-redux';

import FilterSettings from '../../components/FilterSettings';
import { onFilter } from '../../store/actions/searchActions';

const FilterSettingsContainer = ({
  searchAnalogs,
  paidSoft,
  resetSearch,
  onFilter,
}) => {
  return (
    <FilterSettings
      paidSoft={paidSoft}
      searchAnalogs={searchAnalogs}
      resetSearch={resetSearch}
      onFilter={onFilter}
    />
  );
};
const mapStateToProps = (state) => ({
  paidSoft: state.soft.paidSoft,
  freeSoft: state.soft.freeSoft,
});

export default connect(mapStateToProps, {
  searchAnalogs,
  resetSearch,
  onFilter,
})(FilterSettingsContainer);
