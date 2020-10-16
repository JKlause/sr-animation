import React from 'react';
import useEventedMenu from 'hooks/useEventedMenu';
import HeaderWithDropdownButton from 'shared/components/HeaderWithDropdownButton';
import AboutDrawerContent from './about-drawer/AboutDrawerContent';
import AboutDrawerDropdown from './about-drawer/AboutDrawerDropdown';
import styles from './AboutDrawer.scss';

export default function AboutDrawer({ aboutDrawerRef, isOpen }) {
  const [ref, isDropdownOpen, setIsDropdownOpen] = useEventedMenu();

  return (
    <section className={`${styles.AboutDrawer} ${isOpen ? 'open' : ''}`}>
      <section ref={aboutDrawerRef} className="content-container">

        <HeaderWithDropdownButton 
          headerText="Hi, I'm Joe."
          buttonText="About this site"
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}/>

        <AboutDrawerDropdown isOpen={isDropdownOpen} dropdownRef={ref}/>

        <AboutDrawerContent />
        
      </section>
    </section>
  );
}
