import React, { useRef, useState } from 'react';
import Button from 'shared/components/Button';
import FillParent from 'shared/layout/FillParent';
import styles from './Card.scss';


const multiplierSet = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export default function Card({ 
  Visualization, 
  data, 
  title, 
  // sampleDataLines,
}) {
  const [renderedData, setRenderedData] = useState(data);
  const containerRef = useRef();


  const handleUpdateDataClick = () => {
    setRenderedData(renderedData.map(({ label, value }) => {
      const multiplier = multiplierSet[Math.floor(Math.random() * multiplierSet.length)];
      return {
        label,
        value: value + Math.floor((Math.random() * multiplier))
      };
    }));
  };



  return (
    <section className={styles.Card}>
      <section className="content">
        <section className="graph-container disable-scrollbars" ref={containerRef}>
          <Visualization data={renderedData} containerRef={containerRef}/>
        </section>
        <section className="info-container disable-scrollbars">
          <FillParent className="info">

            <h1>
              { title }
            </h1>
            <div className="sample-data">
              <h2>
                {'Sample Data'}
              </h2>
              <article className="data">
                <p>{'{'}</p>
                <p className="indent">{'label: name'}</p>
                <p className="indent">{'value: votes'}</p>
                <p>{'}'}</p>
              </article>
            </div>
            <Button
              className="data-button"
              text="Update Votes"
              handleClick={() => handleUpdateDataClick()}
              isVisible={true}/>
          </FillParent>
        </section>
      </section>
    </section>
  );
}
