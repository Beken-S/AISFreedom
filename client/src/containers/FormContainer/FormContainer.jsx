import Form from '@components/Form';
import { searchAnalogs, resetSearch } from '@store/actions/searchActions';
import React from 'react';
import { connect } from 'react-redux';

const FormContainer = ({ searchAnalogs, paidSoft, resetSearch }) => {
  return (
    <Form
      paidSoft={paidSoft}
      searchAnalogs={searchAnalogs}
      resetSearch={resetSearch}
    />
  );
};
const mapStateToProps = (state) => ({
  paidSoft: state.soft.paidSoft,
  freeSoft: state.soft.freeSoft,
});

export default connect(mapStateToProps, { searchAnalogs, resetSearch })(
  FormContainer
);
