import React, { useState } from 'react';
import FillParent from 'shared/layout/FillParent';
import AboutDrawerHeader from './about-drawer/AboutDrawerHeader';
import AboutDrawerContent from './about-drawer/AboutDrawerContent';
import AboutDrawerDropdown from './about-drawer/AboutDrawerDropdown';
import styles from './AboutDrawer.scss';

export default function AboutDrawer({ isOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <section className={`${styles.AboutDrawer} ${isOpen ? 'open' : ''}`}>
      <FillParent tag="section" className="content-container">
        <AboutDrawerHeader 
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}/>
        <AboutDrawerDropdown isOpen={isDropdownOpen}/>
        <AboutDrawerContent />
      </FillParent>
    </section>
  );
}
