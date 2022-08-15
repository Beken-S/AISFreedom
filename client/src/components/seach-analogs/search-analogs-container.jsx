import React from "react";
import { connect } from "react-redux";
import { SearchAnalogs } from "./search-analogs";
import { searchAnalogs, resetSearch } from "../../store/actions/search-actions";

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

export default connect(mapStateToProps, { searchAnalogs, resetSearch })(SearchAnalogsContainer);
