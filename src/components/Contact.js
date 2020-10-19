import React from 'react';
import styles from './Contact.scss';


export default function Contact() {

  const ContactLine = ({ className, text, linkHref }) => (
    <p className={className}>
      {
        linkHref
          ? <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer">
              { text }
            </a>
          : <>
              { text }
            </>
      }
    </p>
  );
  
  
  return (
    <section className={styles.Contact}>

      <div className="paragraph-container">
        <ContactLine
          key={1}
          className="phone"
          text="503-707-0138" />
        <ContactLine
          key={2}
          className="email"
          text="joeklause@gmail.com" />
      </div>

      <div className="paragraph-container">
        <ContactLine
          key={3}
          className="git-hub"
          text="github.com/JKlause"
          linkHref="https://github.com/JKlause" />

        <ContactLine
          key={4}
          className="linked-in"
          text="linkedin.com/in/joe-klause"
          linkHref="https://www.linkedin.com/in/joe-klause/" />
      </div>
      
    </section>
  );
}
