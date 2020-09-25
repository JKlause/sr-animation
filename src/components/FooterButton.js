import React, { useState } from 'react';
import styles from './FooterButton.scss';

export default function FooterButton({ className, text, handleClick, isVisible }) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <button 
      className={`${styles.FooterButton} ${className ? className : '' } ${isVisible ? 'visible' : 'not-visible'} ${isClicked ? 'on-click' : ''}`}
      onClick={() => handleClick()}>
      { text }
    </button>
  );
}
