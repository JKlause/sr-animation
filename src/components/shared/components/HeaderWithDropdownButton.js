import React, { useState, useEffect } from 'react';
import { useNarrowView } from 'shared/layout/useMedia';
import styles from './HeaderWithDropdownButton.scss';


export default function HeaderWithDropdownButton({ className = '', headerText, buttonText, isDropdownOpen, toggleDropdown }) {
  const isNarrowView = useNarrowView();
  const [isNoClickEvents, setIsNoClickEvents] = useState(false);

  useEffect(() => {
    setIsNoClickEvents(true);
  }, [isDropdownOpen]);

  
  return (
    <header className={`${styles.HeaderWithDropdownButton} ${className}`}>

      { isNarrowView || <div/> }

      <div className="header-container">
        <h1>
          { headerText }
        </h1>
      </div>

      <div className="dropdown-button-container">
        <button 
          className={`${isNoClickEvents ? 'no-click-events' : ''}`}
          onClick={() => toggleDropdown()}
          onAnimationEnd={() => setIsNoClickEvents(false)}>

          <p className="text">
            { buttonText }
          </p>
          <p className={`chevron ${isDropdownOpen ? 'open' : 'closed'}`}>
            {'^'}
          </p>
        </button>
      </div>
    </header>
  );
}
