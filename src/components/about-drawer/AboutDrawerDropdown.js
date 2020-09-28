import React from 'react';
import FillParent from 'shared/layout/FillParent';
import styles from './AboutDrawerDropdown.scss';


export default function AboutDrawerDropdown({ isOpen }) {

   
  return (
    <section className={`${styles.AboutDrawerDropdown} ${isOpen ? 'open' : 'closed'}`}>
      <FillParent tag="section" className="content disable-scrollbars" >
        <p>
          {'This site was written using React.js, Sass, the @vx library, and a plethora of animations and transitions.'}
        </p>
        <p>
          {'It is deployed on Heroku, served up with a simple express server, built in VSCode utilizing Github, and was written over the weekend of 9/25/2020.'}
        </p>
        <p>
          {'I owe a fair amount of gratitude to Joel M. Turner\'s blog posts on @vx bar and line chart visualizations.'}
        </p>
        <p>
          {'Copyright © 2020, Joseph Klause'}
        </p>
      </FillParent>
    </section>
  );
}
