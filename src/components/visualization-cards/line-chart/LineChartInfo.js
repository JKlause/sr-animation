import React, { useState } from 'react';
import Button from 'shared/components/Button';
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


export default function LineChartInfo({ 
  data,
  width,
  height,
  setData,
  handleResetDataClick, 
  enableResetButton,
  isResetDisabled, 
}) {
  const [textIndex, setTextIndex] = useState(null);

  const handleUpdateDataClick = () => {
    const { ounces, date } = data[data.length - 1];
    const newData = {
      ounces: ounces + (Math.random() * 8),
      date: date + 86400000
    };
    setData([...data, newData]);
  };

  return (
    <section 
      className={styles.LineChartInfo}
      style={{ width: `${width - 8}px`, height: `${height - 34}px` }}>
      <h1>
        { 'Cumulative Ounces of Ice Cream Consumed Starting Covid Week 29' }
      </h1>
      
      <div className="flex-container">
        <section className="sample-data">
          <h2>
            {'Sample Data'}
          </h2>
          <article className="data">
            <p>{'{'}</p>
            <p className="indent">{'ounces: decimal,'}</p>
            <p className="indent">{'date: unix timestamp'}</p>
            <p>{'}'}</p>
          </article>
        </section>

        <div className="button-container" >

          <Button
            className="data-button update"
            text={textIndex === null ? 'No One Loves Me' : sadButtonTextOptions[textIndex]}
            handleClick={() => {
              enableResetButton();
              setTextIndex(Math.floor(Math.random() * sadButtonTextOptions.length));
              handleUpdateDataClick();
            }}
            isVisible={true}
            isEnabled={true}/>

          <Button
            className="data-button"
            text="Purposeful Amnesia"
            handleClick={() => handleResetDataClick()}
            isVisible={true} 
            isEnabled={!isResetDisabled}/>
            
        </div> 
      </div>
    </section>
  );
}
