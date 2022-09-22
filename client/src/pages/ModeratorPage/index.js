import React from 'react';

import styles from './ModeratorPage.module.scss';

import { ModeratorActions } from '@components/ModeratorActions';
import { ModeratorForm } from '@components/ModeratorForm';
import { ModeratorHeader } from '@components/ModeratorHeader';
import { ModeratorTable } from '@components/ModeratorTable';

const ModeratorPage = () => {
  return (
    <div className={styles.ModeratorPage}>
      <ModeratorHeader />
      <ModeratorForm />
      <ModeratorTable />
      <ModeratorActions />
    </div>
  );
};

export default ModeratorPage;
