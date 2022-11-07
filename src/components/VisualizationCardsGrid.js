import React from 'react';
import FillParent from 'shared/layout/FillParent';
import VisualizationCard from './VisualizationCard';
import visualizationCardsData from './visualization-cards/visualizationCardsData';
import styles from './VisualizationCardsGrid.scss';


export default function VisualizationCardsGrid({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (200px * ${displayIndex}))` };


  return (
    <FillParent tag="section" className={`comp-viz-card-grid ${styles.VisualizationCardsGrid}`} style={pageStyle}>
      <div className="title-placeholder" />
      {
        visualizationCardsData.map(({ 
          Visualization, 
          Info, 
          data, 
          visualOrientation, 
        }, i) => (
          <VisualizationCard 
            key={`card-${i}`}
            Visualization={Visualization}
            Info={Info}
            data={data} 
            visualOrientation={visualOrientation} 
          />
        ))
      }
    </FillParent >
  );
}
