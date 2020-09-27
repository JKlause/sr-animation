import React from 'react';
import styles from './AboutDrawerDropdown.scss';


export default function AboutDrawerDropdown({ isOpen }) {

  return (
    <section className={`${styles.AboutDrawerDropdown} ${isOpen ? 'open' : 'closed'}`}>
      <section className="content" >
        <p>
          {'I am the dropdown'}
        </p>
      
      </section>
    </section>
  );
}
