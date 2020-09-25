import React from 'react';
import styles from './AboutDrawer.scss';

export default function AboutDrawer({ isOpen }) {

  return (
    <section className={`${styles.AboutDrawer} ${isOpen ? 'open' : ''}`}>
      im the about drawer
    </section>
  );
}
