import React, { useState, useEffect } from 'react';
import { useNarrowView } from 'shared/layout/useMedia';
import styles from './AboutDrawerHeader.scss';


export default function AboutDrawerHeader({ isDropdownOpen, toggleDropdown }) {
  const isNarrowView = useNarrowView();
  const [isNoClickEvents, setIsNoClickEvents] = useState(false);

  useEffect(() => {
    setIsNoClickEvents(true);
  }, [isDropdownOpen]);

  
  return (
    <header className={styles.AboutDrawerHeader}>

      { isNarrowView || <div/> }

      <div className="header-container">
        <h1>
          { 'Hi, I\'m Joe.'}
        </h1>
      </div>

      <div className="dropdown-button-container">
        <button 
          className={`${isNoClickEvents ? 'no-click-events' : ''}`}
          onClick={() => toggleDropdown()}
          onAnimationEnd={() => setIsNoClickEvents(false)}>

          <p className="text">
            {'About this site'}
          </p>
          <p className={`chevron ${isDropdownOpen ? 'open' : 'closed'}`}>
            {'^'}
          </p>
        </button>
      </div>
    </header>
  );
}
