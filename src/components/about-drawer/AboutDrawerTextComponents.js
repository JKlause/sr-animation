import React from 'react';

 
export const AboutDrawerParagraph = ({ text }) => (
  <p>{text}</p>
);

export const AboutDrawerParagraphHeading = ({ headerText, styles }) => (
  <h2 style={styles}>{headerText}</h2>
);
