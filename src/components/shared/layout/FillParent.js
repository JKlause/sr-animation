import React from 'react';
import styles from './FillParent.scss';

export default function FillParent({ tag = 'div', className = '', children, ...props }) {
  const Tag = tag;

  return (
    <Tag className={`${styles.FillParent} ${className}`} {...props}>
      { children }
    </Tag>
  );
}
