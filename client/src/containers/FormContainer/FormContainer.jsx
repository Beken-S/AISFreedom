import { connect } from 'react-redux';

import { setFilterData } from '../../store/actions/Catalog-actions';
import { filterProgramsThunk } from '../../store/thunks/Catalog-thunks';

import Form from '@components/Form';

const FormContainer = ({ filterProgramsThunk, setFilterData }) => {
  const filter = (formData) => {
    setFilterData(formData);
    filterProgramsThunk();
  };

  return <Form filter={filter} />;
};
const mapStateToProps = (state) => ({
  //
});

export default connect(mapStateToProps, {
  filterProgramsThunk,
  setFilterData,
})(FormContainer);
