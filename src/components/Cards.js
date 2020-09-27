import React from 'react';
import Card from './Card';
import styles from './Cards.scss';


export default function Cards({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (100px * ${displayIndex}))` };


  return (
    <section className={styles.Cards} style={pageStyle}>
      <div className="title-placeholder" />
      <Card hasContent={true}/>
      <Card hasContent={true}/>
      <Card hasContent={true}/>
    </section>
  );
}
