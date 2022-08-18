import { AnalogsContainer } from '@components/Analogs';
import SearchAnalogsContainer from '@containers/SearchAnalogsContainer/SearchAnalogsContainer';
// import styles from './SearchAnalogsPage.module.scss';

const SearchAnalogsPage = () => {
  return (
    <>
      <SearchAnalogsContainer />
      <AnalogsContainer />
    </>
  );
};

export default SearchAnalogsPage;
