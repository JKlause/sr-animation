import React from 'react';
import Typography from '@material-ui/core/Typography';
import MUISlider from '@material-ui/core/Slider';
import styles from './Slider.scss';


export default function Slider({ 
  isRange,
  label, 
  minValue,
  maxValue, 
  step = 1,
  currentValue, 
  setCurrentValue,
  currentMin,
  currentMax,
  setMin, 
  setMax,
}) {

  const handleChange = (event, newValue) => {
    if(isRange) {
      const min = newValue[0];
      const max = newValue[1];
      setMin(min);
      setMax(max);
    }
    else setCurrentValue(newValue);
  };

  return (
    <div className={styles.Slider}>
      <Typography id={isRange ? 'range-slider' : 'slider'}>
        { label }
      </Typography>
      
      <MUISlider
        value={isRange ? [currentMin, currentMax] : currentValue}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        step={step}
        valueLabelDisplay="off"
        aria-labelledby={isRange ? 'range-slider' : 'slider'}
        getAriaValueText={valueText}/>
    </div>
  );
}


function valueText(value) {
  return `${value}`;
}
