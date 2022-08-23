import React from 'react';
import { connect } from 'react-redux';

import Form from '@components/Form';
import { searchAnalogs, resetSearch } from '@store/actions/searchActions';

const FormContainer = ({ filtered, searchAnalogs, paidSoft, resetSearch }) => {
  return (
    <Form
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
  FormContainer
);
