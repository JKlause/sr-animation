import React, { useRef, useState } from 'react';
import useDimensions from 'hooks/useDimensions';
import styles from './Card.scss';



export default function Card({ 
  Visualization, 
  Info, 
  data, 
  isLandscape, 
  isZoom 
}) {
  const [renderedData, setRenderedData] = useState(data);
  const [isResetDisabled, setIsResetDisabled] = useState(true);
  const containerRef = useRef();
  const { width, height } = useDimensions(containerRef, isLandscape, isZoom);

  
  const enableResetButton = () => {
    if(isResetDisabled) setIsResetDisabled(false);
  };

  const handleResetDataClick = () => {
    setIsResetDisabled(true);
    setRenderedData(data);
  };


  return (
    <section 
      className={`${styles.Card} ${isLandscape ? 'landscape' : ''}`} 
      ref={containerRef}>
      {
        isZoom 
          ? <section className={`content ${isZoom ? 'is-zoom' : ''}`} > 
              <Visualization 
                containerWidth={width}
                containerHeight={height}/>
            </section>

          : <section className="content" > 
              <section className="graph-container disable-scrollbars" >
                <Visualization 
                  data={renderedData} 
                  containerWidth={width}
                  containerHeight={height}/>
              </section>

              <section className="info-container disable-scrollbars">
                <Info 
                  data={renderedData}
                  containerWidth={width}
                  containerHeight={height}
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
