import React from 'react';
import styles from './Contact.scss';


export default function Contact() {
  
  const ParagraphContainer = ({ p1ClassName, p1Text, p2ClassName, p2Text }) => (
    <div className="paragraph-container">
      <p className={p1ClassName}>
        {p1Text}
      </p>
      <p className={p2ClassName}>
        {p2Text}
      </p>
    </div>
  );


  return (
    <section className={styles.Contact}>
      <ParagraphContainer
        p1ClassName="phone"
        p1Text="503-707-0138"
        p2ClassName="email" 
        p2Text="JoeKlause@gmail.com" />

      <ParagraphContainer
        p1ClassName="linked-in"
        p1Text="linkedin.com/in/joe-klause"
        p2ClassName="git-hub" 
        p2Text="github.com/JKlause" />
    </section>
  );
}
