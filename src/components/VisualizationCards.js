import React from 'react';
import FillParent from 'shared/layout/FillParent';
import VisualizationCard from './VisualizationCard';
import chartsData from './visualization-cards/chartsData';
import styles from './VisualizationCards.scss';


export default function VisualizationCards({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (100px * ${displayIndex}))` };


  return (
    <FillParent tag="section" className={styles.VisualizationCards} style={pageStyle}>
      <div className="title-placeholder" />
      {
        chartsData.map(({ Visualization, Info, data, isLandscape, isZoom }, i) => (
          <VisualizationCard 
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
