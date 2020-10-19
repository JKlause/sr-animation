import React, { useState, useEffect } from 'react';
import { 
  interpolateBuPu,
  interpolateBrBG,
  interpolateSpectral,
  interpolateViridis,
  interpolatePlasma,
  interpolateCool,
  interpolateYlGnBu,
  interpolateRainbow,
  interpolateCubehelixDefault,
  interpolatePiYG,
} from 'd3-scale-chromatic';
import DropdownMenu from 'shared/layout/DropdownMenu';
import RangeSlider from './RangeSlider';
import SingleSlider from './SingleSlider';
import Button from 'shared/components/Button';
import styles from './CustomizeDropdown.scss';

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
    setColorFamily,
    backgroundColor,
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

  const [colorFamilyValue, setColorFamilyValue] = useState(1);
  

  return (
    <DropdownMenu 
      className={styles.CustomizeDropdown} 
      isOpen={isOpen} 
      dropdownRef={dropdownRef} 
      contentStyle={{ maxHeight: `${menuHeight}px` }}>
      <div className="select">
        <label htmlFor="colors">
          {'Change Color Family'}
        </label>
        <select 
          name="colors" 
          value={colorFamilyValue}
          onChange={({ target }) => {
            setColorFamilyValue(+target.value);
            
            switch(+target.value) {
              case 1: 
                setColorFamily(() => interpolateBuPu);
                break;
              case 2: 
                setColorFamily(() => interpolateBrBG);
                break;
              case 3: 
                setColorFamily(() => interpolateSpectral);
                break;
              case 4: 
                setColorFamily(() => interpolateViridis);
                break;
              case 5: 
                setColorFamily(() => interpolatePlasma);
                break;
              case 6: 
                setColorFamily(() => interpolateCool);
                break;
              case 7: 
                setColorFamily(() => interpolateYlGnBu);
                break;
              case 8: 
                setColorFamily(() => interpolateRainbow);
                break;
              case 9: 
                setColorFamily(() => interpolateCubehelixDefault);
                break;
              case 10: 
                setColorFamily(() => interpolatePiYG);
                break;
              default:
                setColorFamily(() => interpolateBuPu);
            }}}>
          <option value={1}>{'Blue to Purple'}</option>
          <option value={2}>{'Blue to Gold'}</option>
          <option value={3}>{'Spectral'}</option>
          <option value={4}>{'Veridis'}</option>
          <option value={5}>{'Plasma'}</option>
          <option value={6}>{'Cool'}</option>
          <option value={7}>{'Green to Blue'}</option>
          <option value={8}>{'Rainbow'}</option>
          <option value={9}>{'Cube Helix'}</option>
          <option value={10}>{'Pink to YellowGreen'}</option>
        </select>
      </div>

      <div className="select" >
        <label htmlFor="background">
          {'Change Background Color'}
        </label>
        <select 
          name="background" 
          value={backgroundColor}
          onChange={({ target }) => setBackgroundColor(target.value)}>
          <option value={'transparent'}>{'Website Teal'}</option>
          <option value={'#4949D0'}>{'Website Purple'}</option>
          <option value={'#FFFAFA'}>{'Snow White'}</option>
          <option value={'#8e1e1d'}>{'Lipstick Red'}</option>
          <option value={'#228B22'}>{'Forest Green'}</option>
          <option value={'#0077be'}>{'Ocean Blue'}</option>
          <option value={'#ffcccb'}>{'Sea Shell Pink'}</option>
          <option value={'#323639'}>{'Night Black'}</option>
          <option value={'#f88624'}>{'Citrus Orange'}</option>
          <option value={'#7a5901'}>{'Poop Brown'}</option>
        </select>
      </div>

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
