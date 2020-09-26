import React, { useState, useEffect } from 'react';
import styles from './Footer.scss';
import FooterButton from './FooterButton';


export default function Footer({ 
  displayIndex, 
  setDisplayIndex,
  isAboutDrawerOpen,
  openAboutDrawer,
  closeAboutDrawer,
}) {
  const [isBeginButtonVisible, setIsBeginButtonVisible] = useState(false);
  const [areNavButtonsVisible, setAreNavButtonsVisible] = useState(false);
  const [isAboutButtonVisible, setIsAboutButtonVisible] = useState(false);

  const isPreviousButtonDisabled = displayIndex === 1 || isAboutDrawerOpen;
  const isNextButtonDisabled = displayIndex === 3 || isAboutDrawerOpen;

  useEffect(() => {
    if(displayIndex === 1) {
      setTimeout(() => {
        setAreNavButtonsVisible(true);
      }, 1000);
    }
  }, [displayIndex]);

  setTimeout(() => {
    setIsBeginButtonVisible(true);
  }, 7500);

  useEffect(() => {
    if(displayIndex === 3) setIsAboutButtonVisible(true);
  }, [displayIndex]);

  return (
    <footer className={styles.Footer}>

      <div>
        <FooterButton
          className={`previous ${isPreviousButtonDisabled ? 'disabled' : ''}`}
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
                handleClick={() => {
                  setIsBeginButtonVisible(false);
                
                  setTimeout(() => {
                    setDisplayIndex(1);
                  }, 600);
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
          className={`next ${isNextButtonDisabled ? 'disabled' : ''}`}
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
