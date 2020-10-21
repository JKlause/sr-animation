import React, { useState, useEffect } from 'react';
import { 
  colorFamilySelectOptions, 
  backgroundColorSelectOptions,
} from 'hooks/createCustomizationState';
import DropdownMenu from 'shared/layout/DropdownMenu';
import RangeSlider from './RangeSlider';
import SingleSlider from './SingleSlider';
import Button from 'shared/components/Button';
import styles from './CustomizeDropdown.scss';
import Select from './Select';


export default function CustomizeDropdown({ 
  dropdownRef, 
  isOpen, 
  state, 
  menuHeight, 
  handleResetClick, 
  isResetEnabled, 
}) {

  const [isResetButtonVisible, setIsResetButtonVisible] = useState(false);

  useEffect(() => {
    if(isOpen) {
      setTimeout(() => {
        setIsResetButtonVisible(true);
      }, 970);
    }
    else setIsResetButtonVisible(false);
  }, [isOpen]);

  const {
    selectColorFamily,
    setBackgroundColor,
    numberOfPoints,
    setNumberOfPoints,
    phyloRadius,
    setPhyloRadius,
    colorScaleDomainMin,
    setColorScaleDomainMin,
    colorScaleDomainMax,
    setColorScaleDomainMax,
    colorScaleRangeMin,
    setColorScaleRangeMin,
    colorScaleRangeMax,
    setColorScaleRangeMax,
    sizeScaleDomainMax,
    setSizeScaleDomainMax,
    sizeScaleRangeMin,
    setSizeScaleRangeMin,
    sizeScaleRangeMax,
    setSizeScaleRangeMax,
  } = state;

  

  return (
    <DropdownMenu 
      className={styles.CustomizeDropdown} 
      isOpen={isOpen} 
      dropdownRef={dropdownRef} 
      contentStyle={{ maxHeight: `${menuHeight}px` }}>

      <Select
        name="colors"
        label="Change Color Family"
        options={colorFamilySelectOptions}
        handleChange={value => selectColorFamily(value)}/>

      <Select
        name="background"
        label="Change Background Color"
        options={backgroundColorSelectOptions}
        handleChange={value => setBackgroundColor(value)} />

      <SingleSlider
        label={'Phylo Radius'}
        minValue={1}
        maxValue={20}
        currentValue={phyloRadius}
        setCurrentValue={setPhyloRadius} />
        
      <SingleSlider
        label={'Number of Points'}
        minValue={50}
        maxValue={1000}
        currentValue={numberOfPoints}
        setCurrentValue={setNumberOfPoints} />

      <RangeSlider
        label={'Color Domain'}
        currentMin={colorScaleDomainMin}
        currentMax={colorScaleDomainMax}
        minValue={0}
        maxValue={1000}
        setMin={setColorScaleDomainMin}
        setMax={setColorScaleDomainMax} />

      <RangeSlider
        label={'Color Range'}
        minValue={0}
        maxValue={1}
        step={.05}
        currentMin={colorScaleRangeMin}
        currentMax={colorScaleRangeMax}
        setMin={setColorScaleRangeMin}
        setMax={setColorScaleRangeMax} />

      <SingleSlider
        label={'Size Domain'}
        currentValue={sizeScaleDomainMax}
        minValue={0}
        maxValue={1000}
        setCurrentValue={setSizeScaleDomainMax} />

      <RangeSlider
        label={'Size Range'}
        minValue={0}
        maxValue={20}
        step={.2}
        currentMin={sizeScaleRangeMin}
        currentMax={sizeScaleRangeMax}
        setMin={setSizeScaleRangeMin}
        setMax={setSizeScaleRangeMax} />

      <Button 
        className="reset-button"
        text={'Reset'}
        handleClick={() => handleResetClick()}
        isVisible={!isOpen ? false : isResetButtonVisible}
        isEnabled={isResetEnabled}/>

    </DropdownMenu>
  );
}
