import React from 'react';
import FillParent from 'shared/layout/FillParent';
import BarChartCard from './cards/BarChartCard';
import styles from './Cards.scss';


export default function Cards({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (100px * ${displayIndex}))` };


  return (
    <FillParent tag="section" className={styles.Cards} style={pageStyle}>
      <div className="title-placeholder" />
      <BarChartCard />
      <BarChartCard />
      <BarChartCard />
    </FillParent >
  );
}
