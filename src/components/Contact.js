import React from 'react';
import styles from './Contact.scss';


export default function Contact() {
  
  return (
    <section className={styles.Contact}>

      <div className="paragraph-container">
        <p className="phone">
          {'503-707-0138'}
        </p>
        <p className="email">
          {'JoeKlause@gmail.com'}
        </p>
      </div>

      <div className="paragraph-container">
        <p className="git-hub">
          <a
            href="https://github.com/JKlause"
            target="_blank"
            rel="noopener noreferrer">
            {'github.com/JKlause'}
          </a>
        </p>
        <p className="linked-in">
          <a
            href="https://www.linkedin.com/in/joe-klause/"
            target="_blank"
            rel="noopener noreferrer">
            {'linkedin.com/in/joe-klause'}
          </a>
        </p>
      </div>
      
    </section>
  );
}
