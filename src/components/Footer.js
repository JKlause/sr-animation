import React, { useState, useEffect } from 'react';
import Button from 'shared/components/Button';
import styles from './Footer.scss';


export default function Footer({ 
  displayIndex, 
  setDisplayIndex,
  moveTitle,
  isAboutDrawerOpen,
  openAboutDrawer,
  closeAboutDrawer,
}) {
  const [isBeginButtonVisible, setIsBeginButtonVisible] = useState(false);
  const [areNavButtonsVisible, setAreNavButtonsVisible] = useState(false);
  const [isAboutButtonVisible, setIsAboutButtonVisible] = useState(false);
  const [isNoBeginButtonClickAnimation, setIsNoBeginButtonClickAnimation] = useState(false);

  const isPreviousButtonDisabled = displayIndex === 1 || isAboutDrawerOpen;
  const isNextButtonDisabled = displayIndex === 3 || isAboutDrawerOpen;
  
  useEffect(() => {
    setTimeout(() => {
      setIsBeginButtonVisible(true);
    }, 7500);
  }, []);

  useEffect(() => {
    if(displayIndex === 1) {
      setTimeout(() => {
        setAreNavButtonsVisible(true);
      }, 650);
    }

    if(displayIndex === 3) {
      setTimeout(() => {
        setIsAboutButtonVisible(true);
      }, 500);
    }
  }, [displayIndex]);


  const handlePreviousButtonClick = () => {
    if(isPreviousButtonDisabled) return;
    setDisplayIndex(--displayIndex);
  };
 
  const handleNextButtonClick = () => {
    if(isNextButtonDisabled) return;
    setDisplayIndex(++displayIndex);
  };

  const handleAboutButtonClick = () => {
    isAboutDrawerOpen 
      ? closeAboutDrawer()
      : openAboutDrawer();
  };

  const handleBeginButtonClick = () => {
    setIsNoBeginButtonClickAnimation(true);
    moveTitle();

    setTimeout(() => {
      setIsBeginButtonVisible(false);
    }, 150);
    
    setTimeout(() => {
      setDisplayIndex(1);
    }, 800);
  };


  return (
    <footer className={styles.Footer}>
      <div>
        <Button
          className={`previous ${isPreviousButtonDisabled ? 'disabled' : 'enabled'}`}
          text="Previous"
          isVisible={areNavButtonsVisible}
          handleClick={() => handlePreviousButtonClick()}/>
      </div>

      <div>
        {
          displayIndex === 0 
            ? <Button
                className="begin"
                text="Begin"
                isVisible={isBeginButtonVisible}
                noClickAnimation={isNoBeginButtonClickAnimation}
                handleClick={() => handleBeginButtonClick()}/>
              
            : <Button
                className="about"
                text={isAboutDrawerOpen ? 'Close' : 'About Joe'}
                isVisible={isAboutButtonVisible} 
                handleClick={() => handleAboutButtonClick()}/>
        }
      </div>

      <div>
        <Button
          className={`next ${isNextButtonDisabled ? 'disabled' : 'enabled'}`}
          text="Next"
          isVisible={areNavButtonsVisible}
          handleClick={() => handleNextButtonClick()}/>
      </div>
    </footer>
  );
}
