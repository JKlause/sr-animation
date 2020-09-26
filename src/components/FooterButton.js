import React, { useState } from 'react';
import styles from './FooterButton.scss';

export default function FooterButton({ className, text, handleClick, isVisible, noClickAnimation }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button 
      className={`${styles.FooterButton} ${className ? className : '' } ${isVisible ? 'visible' : 'not-visible'} ${isClicked ? 'on-click' : ''}`}
      onClick={() => handleClick()}
      onMouseDown={() => {
        if(noClickAnimation) return;
        setIsClicked(true);
      }}
      onMouseUp={() => setIsClicked(false)}
      onMouseLeave={() => {
        if(isClicked) setIsClicked(false);
      }}>
      { text }
    </button>
  );
}
