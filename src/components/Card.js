import React from 'react';
import styles from './Card.scss';


export default function Card({ hasContent }) {

  return (
    <section className={styles.Card}>
      {
        hasContent &&
          <section className="content">

          </section>
      }
    </section>
  );
}
