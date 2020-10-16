import React from 'react';
import FillParent from 'shared/layout/FillParent';
import VisualizationCard from './VisualizationCard';
import chartsData from './visualization-cards/visualizationCardsData';
import styles from './VisualizationCards.scss';


export default function VisualizationCards({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (200px * ${displayIndex}))` };


  return (
    <FillParent tag="section" className={styles.VisualizationCards} style={pageStyle}>
      <div className="title-placeholder" />
      {
        chartsData.map(({ Visualization, Info, data, isLandscape, isFillParent }, i) => (
          <VisualizationCard 
            key={`card-${i}`}
            Visualization={Visualization}
            Info={Info}
            data={data} 
            isLandscape={isLandscape} 
            isFillParent={isFillParent}/>
        ))
      }
    </FillParent >
  );
}
