import React from 'react';

import About from '../../components/About';

import styles from './AboutProjectPage.module.scss';

const AboutProjectPage = () => {
  return (
    <>
      <h1 className={styles.About__heading}>О ПРОЕКТЕ</h1>
      <About />
    </>
  );
};

export default AboutProjectPage;
