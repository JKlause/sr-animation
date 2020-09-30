import React from 'react';
import DropdownMenu from 'shared/layout/DropdownMenu';
import styles from './CustomizeDropdown.scss';


export default function CustomizeDropdown({ isOpen }) {


  return (
    <DropdownMenu className={styles.CustomizeDropdown} isOpen={isOpen} >
      I custom
    </DropdownMenu>
  );
}
