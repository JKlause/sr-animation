import React, { useRef, useState } from 'react';
import useDimensions from 'hooks/useDimensions';
import styles from './VisualizationCard.scss';
import { IS_LANDSCAPE, IS_FILL_PARENT } from './visualization-cards/visualizationCardsData';



export default function VisualizationCard({ 
  Visualization, 
  Info, 
  data, 
  visualOrientation,
}) {
  
  const [renderedData, setRenderedData] = useState(data);
  const [isResetDisabled, setIsResetDisabled] = useState(true);
  const containerRef = useRef();
  const { width, height } = useDimensions(containerRef, visualOrientation);
  const isLandscape = visualOrientation === IS_LANDSCAPE;
  const isFillParent = visualOrientation === IS_FILL_PARENT;

  
  const enableResetButton = () => {
    if(isResetDisabled) setIsResetDisabled(false);
  };

  const handleResetDataClick = () => {
    setIsResetDisabled(true);
    setRenderedData(data);
  };


  return (
    <section 
      className={`comp-viz-card ${styles.VisualizationCard} ${isLandscape ? 'landscape' : ''}`} 
      ref={containerRef}>
      {
        isFillParent 
          ? <section className={`card-content ${isFillParent ? 'is-fill-parent' : ''}`} > 
              <Visualization 
                width={width}
                height={height}/>
            </section>

          : <section className="card-content" > 
              <section className="graph-container disable-scrollbars" >
                <Visualization 
                  data={renderedData} 
                  width={width}
                  height={height}/>
              </section>

              <section className="info-container disable-scrollbars">
                <Info 
                  data={renderedData}
                  width={width}
                  height={height}
                  setData={setRenderedData}
                  handleResetDataClick={handleResetDataClick}
                  enableResetButton={enableResetButton}
                  isResetDisabled={isResetDisabled}/>
              </section>
            </section>
      }

    </section>
  );
}
