import React from 'react';
import FillParent from 'shared/layout/FillParent';
import styles from './DropdownMenu.scss';


export default function DropdownMenu({ 
  className = '', 
  isOpen, 
  dropdownRef, 
  children, 
  contentStyle, 
  ...props
}) {

  
  return (
    <section 
      className={`comp-dropdown ${styles.DropdownMenu} ${isOpen ? 'open' : 'closed'} ${className}`} 
      ref={dropdownRef} 
      {...props}>

      <FillParent 
        tag="section" 
        className="dropdown-content disable-scrollbars" 
        style={contentStyle}>

        { children }

      </FillParent>
    </section>
  );
}
