import React, { useState } from 'react';
import AboutDrawerHeader from './AboutDrawerHeader';
import AboutDrawerContent from './AboutDrawerContent';
import styles from './AboutDrawer.scss';

export default function AboutDrawer({ isOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <section className={`${styles.AboutDrawer} ${isOpen ? 'open' : 'open'}`}>
      <AboutDrawerHeader 
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}/>
      
      <AboutDrawerContent />
    </section>
  );
}
