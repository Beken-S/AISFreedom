import React from 'react';
import { connect } from 'react-redux';

import FilterSettings from '@components/FilterSettings';
import {
  onFilter,
  setIsArchiver,
  setIsGraphic,
  setIsLinux,
  setIsText,
  setIsWindows,
  searchAnalogs,
  resetSearch,
} from '@store/actions/searchActions';

const FilterSettingsContainer = ({
  searchAnalogs,
  paidSoft,
  resetSearch,
  onFilter,
  isGraphic,
  isArchiver,
  isText,
  isLinux,
  isWindows,
  setIsGraphic,
  setIsArchiver,
  setIsText,
  setIsWindows,
  setIsLinux,
}) => {
  return (
    <FilterSettings
      paidSoft={paidSoft}
      searchAnalogs={searchAnalogs}
      resetSearch={resetSearch}
      onFilter={onFilter}
      isGraphic={isGraphic}
      isArchiver={isArchiver}
      isText={isText}
      setIsGraphic={setIsGraphic}
      setIsArchiver={setIsArchiver}
      setIsText={setIsText}
      isLinux={isLinux}
      isWindows={isWindows}
      setIsWindows={setIsWindows}
      setIsLinux={setIsLinux}
    />
  );
};
const mapStateToProps = (state) => ({
  paidSoft: state.soft.paidSoft,
  freeSoft: state.soft.freeSoft,
  isGraphic: state.soft.isGraphic,
  isArchiver: state.soft.isArchiver,
  isText: state.soft.isText,
  isLinux: state.soft.isLinux,
  isWindows: state.soft.isWindows,
});

export default connect(mapStateToProps, {
  searchAnalogs,
  resetSearch,
  onFilter,
  setIsGraphic,
  setIsArchiver,
  setIsText,
  setIsWindows,
  setIsLinux,
})(FilterSettingsContainer);
