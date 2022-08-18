import Analogs from '@containers/AnalogsContainer/AnalogsContainer';
import SearchAnalogs from '@containers/SearchAnalogsContainer/SearchAnalogsContainer';

import styles from './SeachAnalogs.module.scss';

const SeachAnalogs = () => {
  return (
    <>
      <SearchAnalogs />
      <Analogs />
    </>
  );
};

export default SeachAnalogs;
