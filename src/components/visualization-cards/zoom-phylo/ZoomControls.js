import React from 'react';
import Button from 'shared/components/Button';
import styles from './ZoomControls.scss';


const ControlButton = ({ className, text, handleClick }) => (
  <Button 
    className={className} 
    handleClick={() => handleClick()}
    isVisible={true}
    isEnabled={true}
    text={text}/>
);


export default function ZoomControls({ zoom }) {

  return (
    <section className={styles.ZoomControls}>
      <div className="increments">
        <ControlButton
          className="button-zoom"
          text="+"
          handleClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })} />
        <ControlButton
          className="button-zoom minus"
          text="-"
          handleClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}/>
      </div>

      <ControlButton
        className="button-text" 
        text="Center"
        handleClick={zoom.center}/>

      <ControlButton
        className="button-text"
        text="Reset"
        handleClick={zoom.reset}/>

      <ControlButton
        className="button-text"
        text="Clear" 
        handleClick={zoom.clear}/>
    </section>
  );
}
