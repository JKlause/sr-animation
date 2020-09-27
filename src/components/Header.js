import React from 'react';
import Contact from './Contact';
import styles from './Header.scss';

export default function Header() {

  return (
    <header className={styles.Header}>
      <section className="headers">
        <h1>
          {'Joe Klause'}
        </h1>
        <h2>
          {'Sprinklr PDX Engineering Team\'s New Best Friend'}
        </h2>
      </section>

      <Contact />
    </header>
  );
}
