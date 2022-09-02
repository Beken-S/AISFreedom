import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProgram } from '../../store/thunks/Catalog-thunks';

import { Loader } from '@components/Loader';
import { Program } from '@components/Program';

const ProgramContainer = ({
  item,
  license,
  classProgram,
  typeOs,
  getProgram,
  isLoading,
}) => {
  const { id } = useParams();

  useEffect(() => {
    getProgram(id);
  }, [id]);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Program
        item={item}
        license={license}
        classProgram={classProgram}
        typeOs={typeOs}
      />
    );
  }
};
const mapStateToProps = (state) => ({
  item: state.catalog.item,
  license: state.catalog.license,
  classProgram: state.catalog.classProgram,
  typeOs: state.catalog.typeOs,
  isLoading: state.catalog.isLoading,
});
export default connect(mapStateToProps, { getProgram })(ProgramContainer);
