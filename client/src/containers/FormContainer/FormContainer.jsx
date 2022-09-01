import { connect } from 'react-redux';

import {
  setFilterData,
  setSearchText,
} from '../../store/actions/Catalog-actions';
import { filterProgramsThunk, search } from '../../store/thunks/Catalog-thunks';

import Form from '@components/Form';

const FormContainer = ({
  search,
  filterProgramsThunk,
  setFilterData,
  setSearchText,
}) => {
  const filter = (formData) => {
    setFilterData(formData);
    filterProgramsThunk();
  };
  const onSearch = (text) => {
    setSearchText(text);
    search();
  };

  return <Form search={onSearch} filter={filter} />;
};
const mapStateToProps = (state) => ({
  //
});

export default connect(mapStateToProps, {
  search,
  filterProgramsThunk,
  setSearchText,
  setFilterData,
})(FormContainer);
