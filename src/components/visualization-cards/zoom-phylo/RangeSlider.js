import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from './Slider.scss';


export default function RangeSlider({ 
  label, 
  minValue,
  maxValue, 
  step = 1,
  currentMin, 
  currentMax, 
  setMin, 
  setMax,
}) {

  const handleChange = (event, newValue) => {
    const min = newValue[0];
    const max = newValue[1];
    setMin(min);
    setMax(max);
  };

  return (
    <div className={styles.Slider}>
      <Typography id="range-slider" gutterBottom>
        { label }
      </Typography>
      
      <Slider
        value={[currentMin, currentMax]}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        step={step}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valueText}/>
    </div>
  );
}


function valueText(value) {
  return `${value}`;
}
