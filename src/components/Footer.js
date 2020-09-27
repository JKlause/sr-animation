import React, { useState, useEffect } from 'react';
import styles from './Footer.scss';
import FooterButton from './FooterButton';


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
  const [isNoBeginClickAnimation, setIsNoBeginClickAnimation] = useState(false);

  const isPreviousButtonDisabled = displayIndex === 1 || isAboutDrawerOpen;
  const isNextButtonDisabled = displayIndex === 3 || isAboutDrawerOpen;

  useEffect(() => {
    if(displayIndex === 1) {
      setTimeout(() => {
        setAreNavButtonsVisible(true);
      }, 800);
    }
  }, [displayIndex]);

  setTimeout(() => {
    setIsBeginButtonVisible(true);
  }, 7500);

  useEffect(() => {
    if(displayIndex === 3) {
      setTimeout(() => {
        setIsAboutButtonVisible(true);
      }, 300);
    }
  }, [displayIndex]);

  return (
    <footer className={styles.Footer}>

      <div>
        <FooterButton
          className={`previous ${isPreviousButtonDisabled ? 'disabled' : 'enabled'}`}
          text="Previous"
          isVisible={areNavButtonsVisible}
          handleClick={() => {
            if(isPreviousButtonDisabled) return;
            setDisplayIndex(--displayIndex);
          }}/>
      </div>

      <div>
        {
          displayIndex === 0 
            ? <FooterButton
                className="begin"
                text="Begin"
                isVisible={isBeginButtonVisible}
                noClickAnimation={isNoBeginClickAnimation}
                handleClick={() => {
                  setIsNoBeginClickAnimation(true);
                  moveTitle();
                  
                  setTimeout(() => {
                    setIsBeginButtonVisible(false);
                  }, 150);
                  
                  setTimeout(() => {
                    setDisplayIndex(1);
                  }, 800);
                }}/>
              
            : <FooterButton
                className="about"
                text={isAboutDrawerOpen ? 'Close' : 'About Joe'}
                isVisible={isAboutButtonVisible} 
                handleClick={() => {
                  isAboutDrawerOpen 
                    ? closeAboutDrawer()
                    : openAboutDrawer();
                }}/>
        }
      </div>

      <div>
        <FooterButton
          className={`next ${isNextButtonDisabled ? 'disabled' : 'enabled'}`}
          text="Next"
          isVisible={areNavButtonsVisible}
          handleClick={() => {
            if(isNextButtonDisabled) return;
            setDisplayIndex(++displayIndex);
          }}/>
      </div>
    </footer>
  );
}
