import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from './Slider.scss';


function valueText(value) {
  return `${value}`;
}

export default function SingleSlider({ 
  label, 
  minValue,
  maxValue, 
  step = 1,
  currentValue, 
  setCurrentValue
}) {

  const handleChange = (event, newValue) => {
    setCurrentValue(newValue);
  };

  return (
    <div className={styles.Slider}>
      <Typography id="slider" gutterBottom>
        { label }
      </Typography>
      <Slider
        value={currentValue}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        step={step}
        valueLabelDisplay="auto"
        aria-labelledby="slider"
        getAriaValueText={valueText}/>
    </div>
  );
}
