import React, { useRef, useState } from 'react';
import styles from './Card.scss';


const multiplierSet = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export default function Card({ Visualization, Info, data }) {
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
          <Info handleUpdateDataClick={handleUpdateDataClick} />
        </section>

      </section>
    </section>
  );
}
