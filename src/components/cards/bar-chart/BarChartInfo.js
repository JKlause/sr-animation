import React from 'react';
import Button from 'shared/components/Button';

import styles from './BarChartInfo.scss';
import useDimensions from 'hooks/useDimensions';


export default function BarChartInfo({ handleUpdateDataClick, handleResetDataClick, isResetDisabled, containerRef }) {
  let { width, height } = useDimensions(containerRef);


  return (
    <section style={{ width: `${width - 20}px`, height: `${height - 80}px` }} className={styles.BarChartInfo}>
      <h1>
        { 'Union President Election Results' }
      </h1>
      
      <section className="sample-data">
        <h2>
          {'Sample Data'}
        </h2>
        <article className="data">
          <p>{'{'}</p>
          <p className="indent">{'label: name'}</p>
          <p className="indent">{'value: votes'}</p>
          <p>{'}'}</p>
        </article>
      </section>

      <div className="button-container" >
        <Button
          className="data-button update"
          text="Update Votes"
          handleClick={() => handleUpdateDataClick()}
          isVisible={true}/>

        <Button
          className={`data-button ${isResetDisabled ? 'disabled' : 'enabled'}`}
          text="Reset Votes"
          handleClick={() => handleResetDataClick()}
          isVisible={true} />
      </div> 
    </section>
  );
}
