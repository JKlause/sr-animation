import React, { useRef, useState } from 'react';
import useDimensions from 'hooks/useDimensions';
import styles from './VisualizationCard.scss';



export default function VisualizationCard({ 
  Visualization, 
  Info, 
  data, 
  isFillParent,
  isLandscape, 
  isPortrait,
}) {
  
  const [renderedData, setRenderedData] = useState(data);
  const [isResetDisabled, setIsResetDisabled] = useState(true);
  const containerRef = useRef();
  const { width, height } = useDimensions(containerRef, isFillParent, isLandscape, isPortrait);

  
  const enableResetButton = () => {
    if(isResetDisabled) setIsResetDisabled(false);
  };

  const handleResetDataClick = () => {
    setIsResetDisabled(true);
    setRenderedData(data);
  };


  return (
    <section 
      className={`${styles.VisualizationCard} ${isLandscape ? 'landscape' : ''}`} 
      ref={containerRef}>
      {
        isFillParent 
          ? <section className={`content ${isFillParent ? 'is-fill-parent' : ''}`} > 
              <Visualization 
                width={width}
                height={height}/>
            </section>

          : <section className="content" > 
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
