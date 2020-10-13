import React from 'react';
import Card from './Card';
import FillParent from 'shared/layout/FillParent';
import chartsData from './cards/chartsData';
import styles from './Cards.scss';


export default function Cards({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (100px * ${displayIndex}))` };


  return (
    <FillParent tag="section" className={styles.Cards} style={pageStyle}>
      <div className="title-placeholder" />
      {
        chartsData.map(({ Visualization, Info, data, isLandscape, isZoom }, i) => (
          <Card 
            key={`card-${i}`}
            Visualization={Visualization}
            Info={Info}
            data={data} 
            isLandscape={isLandscape} 
            isZoom={isZoom}/>
        ))
      }
    </FillParent >
  );
}
