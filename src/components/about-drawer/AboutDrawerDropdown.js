import React from 'react';
import styles from './AboutDrawerDropdown.scss';


export default function AboutDrawerDropdown({ isOpen }) {

  
  return (
    <section className={`${styles.AboutDrawerDropdown} ${isOpen ? 'open' : 'closed'}`}>
      <section className="content" >
        <p>
          {'This site was written using React.js, Sass, and a plethora of animations and transitions.'}
        </p>
        <p>
          {'It is deployed on Heroku, built utilizing Github, and was written over the weekend of 9/25/2020'}
        </p>
        <p>
          {'Copyright © 2020, Joseph Klause'}
        </p>
      </section>
    </section>
  );
}
