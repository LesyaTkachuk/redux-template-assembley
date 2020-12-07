import React from 'react';
import NavigationBar from '../../NavigationBar';
import styles from './Appbar.module.css';

function Appbar() {
  return (
    <header className={styles.header}>
      <NavigationBar />
    </header>
  );
}

export default Appbar;
