import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProgram } from '../../store/thunks/Catalog-thunks';

import { Loader } from '@components/Loader';
import { Program } from '@components/Program';

const ProgramContainer = ({ item, getProgram, isLoading }) => {
  const { id } = useParams();

  useEffect(() => {
    getProgram(id);
  }, [id]);

  if (isLoading) {
    return <Loader />;
  } else {
    return <Program item={item} />;
  }
};
const mapStateToProps = (state) => ({
  item: state.catalog.item,
  isLoading: state.catalog.isLoading,
});
export default connect(mapStateToProps, { getProgram })(ProgramContainer);
