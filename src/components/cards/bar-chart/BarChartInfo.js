import React from 'react';
import Button from 'shared/components/Button';
import FillParent from 'shared/layout/FillParent';
import styles from './BarChartInfo.scss';


export default function BarChartInfo({ handleUpdateDataClick, handleResetDataClick, isResetDisabled }) {


  return (
    <FillParent tag="section" className={styles.BarChartInfo}>
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
    </FillParent>
  );
}
