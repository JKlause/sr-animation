import React from 'react';
import Button from 'shared/components/Button';
import styles from './BarChartInfo.scss';



const multiplierSet = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export default function BarChartInfo({ 
  data,
  containerWidth,
  containerHeight,
  setData,
  handleResetDataClick, 
  enableResetButton,
  isResetDisabled, 
}) {  
  
  const handleUpdateDataClick = () => {
    setData(data.map(({ label, value }) => {
      const multiplier = multiplierSet[Math.floor(Math.random() * multiplierSet.length)];
      return {
        label,
        value: value + Math.floor((Math.random() * multiplier))
      };
    }));
  };


  return (
    <section 
      className={styles.BarChartInfo}
      style={{ width: `${containerWidth - 20}px`, height: `${containerHeight - 80}px` }}>
      <h1>
        { 'Most Loved Alchemy Staff Member' }
      </h1>
      
      <section className="sample-data">
        <h2>
          {'Sample Data'}
        </h2>
        <article className="data">
          <p>{'{'}</p>
          <p className="indent">{'label: name,'}</p>
          <p className="indent">{'value: votes'}</p>
          <p>{'}'}</p>
        </article>
      </section>

      <div className="button-container" >
        <Button
          className="data-button update"
          text="Update Votes"
          handleClick={() => {
            enableResetButton();
            handleUpdateDataClick();
          }}
          isVisible={true}
          isEnabled={true}/>

        <Button
          className="data-button"
          text="Reset Votes"
          handleClick={() => handleResetDataClick()}
          isVisible={true} 
          isEnabled={!isResetDisabled}/>
      </div> 
    </section>
  );
}
