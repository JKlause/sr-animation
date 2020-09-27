import React, { useState } from 'react';
import styles from './FooterButton.scss';

export default function FooterButton({ className, text, handleClick, isVisible, noClickAnimation }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickStart = () => {
    if(noClickAnimation) return;
    setIsClicked(true);
  };

  const handleClickEnd = () => {
    if(isClicked) setIsClicked(false);
  };

  return (
    <button 
      className={`${styles.FooterButton} ${className ? className : '' } ${isVisible ? 'visible' : 'not-visible'} ${isClicked ? 'on-click' : ''}`}
      onClick={() => handleClick()}
      onMouseDown={() => handleClickStart()}
      onMouseUp={() => handleClickEnd()}
      onTouchStart={() => handleClickStart()}
      onTouchEnd={() => handleClickEnd()}
      onMouseLeave={() => {
        if(isClicked) setIsClicked(false);
      }}>
      { text }
    </button>
  );
}
