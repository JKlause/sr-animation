import React from 'react';
import Card from './Card';
import chartsData from './cards/chartsData';
import ZoomPhylo from './cards/ZoomPhylo';
import FillParent from 'shared/layout/FillParent';
import styles from './Cards.scss';


export default function Cards({ displayIndex }) {
  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (100px * ${displayIndex}))` };


  return (
    <FillParent tag="section" className={styles.Cards} style={pageStyle}>
      <div className="title-placeholder" />
      {
        chartsData.map(({ Visualization, Info, data, isLandscape }, i) => (
          <Card 
            key={`card-${i}`}
            Visualization={Visualization}
            Info={Info}
            data={data} 
            isLandscape={isLandscape} />
        ))
      }
      <Card Visualization={ZoomPhylo} isZoom={true}/>

    </FillParent >
  );
}
