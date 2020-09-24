import React from 'react';
import styles from './Header.scss';

export default function Header() {

  return (
    <header className={styles.Header}>
      <h1>
        {'Joe Klause'}
      </h1>
      <h2>
        {'Sprinklr\'s PDX Engineering Team\'s New Best Friend'}
      </h2>
    </header>
  );
}
