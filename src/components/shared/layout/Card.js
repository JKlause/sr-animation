import React from 'react';
import styles from './Card.scss';


export default function Card({ className = '', children, ...props }) {


  return (
    <section className={`${styles.Card} ${className}`} {...props}>
      <section className="content">
        { children }
      </section>
    </section>
  );
}
