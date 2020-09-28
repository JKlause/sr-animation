import React from 'react';
import Button from 'shared/components/Button';
import FillParent from 'shared/layout/FillParent';
import styles from './BarChartInfo.scss';


export default function BarChartInfo({ handleUpdateDataClick }) {


  return (
    <FillParent className={styles.BarChartInfo}>
      <h1>
        { 'Union President Election Results' }
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
  );
}
