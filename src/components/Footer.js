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
  
  const [isNoBeginButtonClickAnimation, setIsNoBeginButtonClickAnimation] = useState(false);
  
  const [isBeginButtonVisible, setIsBeginButtonVisible] = useState(false);
  const [isAboutButtonVisible, setIsAboutButtonVisible] = useState(false);
  const [areNavButtonsVisible, setAreNavButtonsVisible] = useState(false);

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


  return (
    <footer className={styles.Footer}>
      <div>
        <Button
          className="previous"
          text="Previous"
          isVisible={areNavButtonsVisible}
          handleClick={() => handlePreviousButtonClick()}
          isEnabled={!isPreviousButtonDisabled}/>
      </div>

      <div>
        {
          displayIndex === 0 
            ? <Button
                className="begin"
                text="Begin"
                isVisible={isBeginButtonVisible}
                noClickAnimation={isNoBeginButtonClickAnimation}
                handleClick={() => handleBeginButtonClick()}
                isEnabled={true}/>
              
            : <Button
                className="about"
                text={isAboutDrawerOpen ? 'Close' : 'About Joe'}
                isVisible={isAboutButtonVisible} 
                handleClick={() => handleAboutButtonClick()}
                isEnabled={true}/>
        }
      </div>

      <div>
        <Button
          className="next"
          text="Next"
          isVisible={areNavButtonsVisible}
          handleClick={() => handleNextButtonClick()}
          isEnabled={!isNextButtonDisabled}/>
      </div>
    </footer>
  );
}
