import React from 'react';
import styles from './Contact.scss';


export default function Contact() {
  return (
    <section className={styles.Contact}>
      <div>
        <p className="phone">
          {'503-707-0138'}
        </p>
        <p className="email">
          {'JoeKlause@gmail.com'}
        </p>
      </div>
      <div>
        <p className="linked-in">
          {'linkedin.com/in/joe-klause'}
        </p>
        
        <p className="git-hub">
          {'github.com/JKlause'}
        </p>
      </div>
    </section>
  );
}
