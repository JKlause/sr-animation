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
          {'I owe a fair amount of gratitude to Joel M. Turner\'s blog posts on @vx '}
          <a
            href="https://joelmturner.com/blog/data-vis-react-bar-chart-vx"
            target="_blank"
            rel="noopener noreferrer">
            {'bar'}
          </a>
          {' and '}
          <a
            href="https://joelmturner.com/blog/create-a-single-line-chart-in-react-with-@vx"
            target="_blank"
            rel="noopener noreferrer">
            {'line'}
          </a>
          {' chart visualizations.'}
        </p>
        <p>
          {'The site is meant to be viewed on desktops or tablets. It hasn\'t been fully vetted for mobile use.'}
        </p>
        <p>
          {'Copyright © 2020, Joseph Klause'}
        </p>
      </FillParent>
    </section>
  );
}
