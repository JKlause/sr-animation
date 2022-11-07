import React from 'react';
import Contact from './Contact';
import styles from './Header.scss';

export default function Header() {

  return (
    <header className={`comp-header ${styles.Header}`}>
      <section className="headers">
        <h1>
          {'Joe Klause'}
        </h1>
        <h2>
          {'Your Engineering Team\'s New Best Friend'}
        </h2>
      </section>

      <Contact />
    </header>
  );
}
