import React from 'react';
import joeImg from '../assets/joeImg.jpg';
import styles from './AboutDrawer.scss';

export default function AboutDrawer({ isOpen }) {

  return (
    <section className={`${styles.AboutDrawer} ${isOpen ? 'open' : ''} disable-scrollbars`}>
      <h1>
        { 'Hi I\'m Joe'}
      </h1>
      <img src={joeImg} alt="Joe's Picture" />
    </section>
  );
}
