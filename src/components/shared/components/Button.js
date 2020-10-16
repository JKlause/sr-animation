import React, { useState } from 'react';
import styles from './Button.scss';

export default function Button({ className = '', text, handleClick, isVisible, noClickAnimation, isEnabled }) {
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
      className={`${styles.Button} ${className} ${isVisible ? 'visible' : 'not-visible'} ${isClicked ? 'on-click' : ''} ${isEnabled ? 'enabled' : 'disabled'}`}
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
