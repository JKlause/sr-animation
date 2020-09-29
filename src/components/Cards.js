import React from 'react';
import Card from './Card';
import barChartData from './cards/bar-chart/barChartData';
import BarChart from './cards/bar-chart/BarChart';
import BarChartInfo from './cards/bar-chart/BarChartInfo';
import cardsData from './cards/cardsData';
import FillParent from 'shared/layout/FillParent';
import styles from './Cards.scss';


export default function Cards({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (100px * ${displayIndex}))` };


  return (
    <FillParent tag="section" className={styles.Cards} style={pageStyle}>
      <div className="title-placeholder" />
      {
        cardsData.map(({ Visualization, Info, data, isLandscape }, i) => (
          <Card 
            key={`card-${i}`}
            Visualization={Visualization}
            Info={Info}
            data={data} 
            isLandscape={isLandscape} />
        ))
      }
      <Card 
        Visualization={BarChart} 
        Info={BarChartInfo}
        data={barChartData} />

    </FillParent >
  );
}
