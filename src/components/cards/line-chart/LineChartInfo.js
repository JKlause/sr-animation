import React, { useState } from 'react';
import Button from 'shared/components/Button';
import useDimensions from 'hooks/useDimensions';
import styles from './LineChartInfo.scss';


const sadButtonTextOptions = [
  'I Have No Friends',
  'I\'m Bored',
  'Out of Booze',
  'I Hate Myself',
  'Existential Crisis',
  'Netflix is Down',
  'AQI: +500',
  'Trump\'s President',
  'Really? Biden?',
  'F*#% It',
  'No One Loves Me'
];


export default function LineChartInfo({ handleUpdateDataClick, handleResetDataClick, isResetDisabled, containerRef, isLandscape }) {
  let { width, height } = useDimensions(containerRef, isLandscape);
  const [textIndex, setTextIndex] = useState(null);


  return (
    <section 
      className={styles.LineChartInfo}
      style={{ width: `${width - 8}px`, height: `${height - 34}px` }}>
      <h1>
        { 'Ounces of Ice Cream Consumed Starting Covid Week 29' }
      </h1>
      
      <div className="flex-container">
        <section className="sample-data">
          <h2>
            {'Sample Data'}
          </h2>
          <article className="data">
            <p>{'{'}</p>
            <p className="indent">{'ounces: decimal'}</p>
            <p className="indent">{'date: unix timestamp'}</p>
            <p>{'}'}</p>
          </article>
        </section>

        <div className="button-container" >
          <Button
            className="data-button update"
            text={textIndex === null ? 'No One Loves Me' : sadButtonTextOptions[textIndex]}
            handleClick={() => {
              setTextIndex(Math.floor(Math.random() * sadButtonTextOptions.length));
              handleUpdateDataClick();
            }}
            isVisible={true}/>

          <Button
            className={`data-button ${isResetDisabled ? 'disabled' : 'enabled'}`}
            text="Purposeful Amnesia"
            handleClick={() => handleResetDataClick()}
            isVisible={true} />
        </div> 
      </div>
    </section>
  );
}
