import React from 'react';
import FillParent from 'shared/layout/FillParent';
import styles from './DropdownMenu.scss';


export default function DropdownMenu({ className = '', isOpen, children, ...props }) {

  return (
    <section className={`${styles.DropdownMenu} ${isOpen ? 'open' : 'closed'} ${className}`} {...props}>
      <FillParent tag="section" className="dropdown-content disable-scrollbars" >
        { children }
      </FillParent>
    </section>
  );
}
