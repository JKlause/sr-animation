import { useState } from 'react';
import { interpolateBuPu } from 'd3-scale-chromatic'; 

export default function useCustomization() {
  const initialState = {
    colorFamily: () => interpolateBuPu,
    backgroundColor: 'transparent',
    numberOfPoints: 1000,
    phyloRadius: 10,
    colorScaleDomainMin: 0,
    colorScaleDomainMax: 1000,
    colorScaleRangeMin: 0,
    colorScaleRangeMax: 1,
    sizeScaleDomainMax: 600,
    sizeScaleRangeMin: 0.5,
    sizeScaleRangeMax: 8,
  };

  const [colorFamily, setColorFamily] = useState(initialState.colorFamily);
  const [backgroundColor, setBackgroundColor] = useState(initialState.backgroundColor);

  const [numberOfPoints, setNumberOfPoints] = useState(initialState.numberOfPoints);
  const [phyloRadius, setPhyloRadius] = useState(initialState.phyloRadius);

  const [colorScaleDomainMin, setColorScaleDomainMin] = useState(initialState.colorScaleDomainMin);
  const [colorScaleDomainMax, setColorScaleDomainMax] = useState(initialState.colorScaleDomainMax);
  const [colorScaleRangeMin, setColorScaleRangeMin] = useState(initialState.colorScaleRangeMin);
  const [colorScaleRangeMax, setColorScaleRangeMax] = useState(initialState.colorScaleRangeMax);

  const [sizeScaleDomainMax, setSizeScaleDomainMax] = useState(initialState.sizeScaleDomainMax);
  const [sizeScaleRangeMin, setSizeScaleRangeMin] = useState(initialState.sizeScaleRangeMin);
  const [sizeScaleRangeMax, setSizeScaleRangeMax] = useState(initialState.sizeScaleRangeMax);
  
  const isInitialState = 
  initialState.colorFamily == colorFamily &&
  initialState.backgroundColor == backgroundColor &&
  initialState.numberOfPoints == numberOfPoints &&
  initialState.phyloRadius == phyloRadius &&
  initialState.colorScaleDomainMin == colorScaleDomainMin &&
  initialState.colorScaleDomainMax == colorScaleDomainMax &&
  initialState.colorScaleRangeMin == colorScaleRangeMin &&
  initialState.colorScaleRangeMax == colorScaleRangeMax &&
  initialState.sizeScaleDomainMax == sizeScaleDomainMax &&
  initialState.sizeScaleRangeMin == sizeScaleRangeMin &&
  initialState.sizeScaleRangeMax == sizeScaleRangeMax;

  const resetState = () => {
    setColorFamily(initialState.colorFamily);
    setBackgroundColor(initialState.backgroundColor);
    setNumberOfPoints(initialState.numberOfPoints);
    setPhyloRadius(initialState.phyloRadius);
    setColorScaleDomainMin(initialState.colorScaleDomainMin);
    setColorScaleDomainMax(initialState.colorScaleDomainMax);
    setColorScaleRangeMin(initialState.colorScaleRangeMin);
    setColorScaleRangeMax(initialState.colorScaleRangeMax);
    setSizeScaleDomainMax(initialState.sizeScaleDomainMax);
    setSizeScaleRangeMin(initialState.sizeScaleRangeMin);
    setSizeScaleRangeMax(initialState.sizeScaleRangeMax);
  };


  return {
    colorFamily,
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
    isInitialState,
    resetState,
  };
}
