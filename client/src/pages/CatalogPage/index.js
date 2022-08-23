import CatalogContainer from '@containers/CatalogContainer/CatalogContainer';
import React from 'react';

import FormContainer from '../../containers/FormContainer/FormContainer';

import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  return (
    <div className={styles.CatalogPage}>
      <h2 className={styles.CatalogPage__heading}>КАТАЛОГ</h2>
      <FormContainer />
      <CatalogContainer />
    </div>
  );
};

export default CatalogPage;
