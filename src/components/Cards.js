import React from 'react';
import barChartData from './cards/bar-chart/barChartData';
import BarChartCard from './cards/bar-chart/BarChartCard';
import FillParent from 'shared/layout/FillParent';
import styles from './Cards.scss';


export default function Cards({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (100px * ${displayIndex}))` };


  return (
    <FillParent tag="section" className={styles.Cards} style={pageStyle}>
      <div className="title-placeholder" />
      <BarChartCard data={barChartData}/>
      <div className="title-placeholder" />
      <div className="title-placeholder" />
    </FillParent >
  );
}
