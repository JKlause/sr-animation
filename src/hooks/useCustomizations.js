import { useState } from 'react';
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

import {
  transparent,
  websitePurple,
  snowWhite,
  lipstickRed,
  forestGreen,
  oceanBlue,
  seaShellPink,
  nightBlack,
  citrusOragne,
  poopBrown,
} from 'styles/variables';

const BLUE_TO_PURPLE = 'blue-to-purple';
const BLUE_TO_GOLD = 'blue-to-gold';
const SPECTRAL = 'spectral';
const VERIDIS = 'veridis';
const PLASMA = 'plasma';
const COOL = 'cool';
const GREEN_TO_BLUE = 'green-to-blue';
const RAINBOW = 'rainbow';
const CUBE_HELIX = 'cube-helix';
const PINK_TO_YELLOWGREEN = 'pink-to-yellowGreen';




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

  const selectColorFamily = COLOR_FAMILY => {
    switch(COLOR_FAMILY) {
      case BLUE_TO_PURPLE: 
        setColorFamily(() => interpolateBuPu);
        break;
      case BLUE_TO_GOLD: 
        setColorFamily(() => interpolateBrBG);
        break;
      case SPECTRAL: 
        setColorFamily(() => interpolateSpectral);
        break;
      case VERIDIS: 
        setColorFamily(() => interpolateViridis);
        break;
      case PLASMA: 
        setColorFamily(() => interpolatePlasma);
        break;
      case COOL: 
        setColorFamily(() => interpolateCool);
        break;
      case GREEN_TO_BLUE: 
        setColorFamily(() => interpolateYlGnBu);
        break;
      case RAINBOW: 
        setColorFamily(() => interpolateRainbow);
        break;
      case CUBE_HELIX: 
        setColorFamily(() => interpolateCubehelixDefault);
        break;
      case PINK_TO_YELLOWGREEN: 
        setColorFamily(() => interpolatePiYG);
        break;
      default:
        setColorFamily(initialState.colorFamily);
    }
  };
  

  return {
    colorFamily,
    selectColorFamily,
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


export const colorFamilySelectOptions = [
  { 
    value: BLUE_TO_PURPLE,
    text: 'Blue to Purple',
  },
  { 
    value: BLUE_TO_GOLD,
    text: 'Blue to Gold',
  },
  { 
    value: SPECTRAL,
    text: 'Spectral',
  },
  { 
    value: VERIDIS,
    text: 'Veridis',
  },
  { 
    value: PLASMA,
    text: 'Plasma',
  },
  { 
    value: COOL,
    text: 'Cool',
  },
  { 
    value: GREEN_TO_BLUE,
    text: 'Green to Blue',
  },
  { 
    value: RAINBOW,
    text: 'Rainbow',
  },
  { 
    value: CUBE_HELIX,
    text: 'Cube Helix',
  },
  { 
    value: PINK_TO_YELLOWGREEN,
    text: 'Pink to YellowGreen',
  },
];

export const backgroundColorSelectOptions = [
  {
    value: transparent,
    text: 'Website Teal',
  },
  {
    value: websitePurple,
    text: 'Website Purple',
  },
  {
    value: snowWhite,
    text: 'Snow White',
  },
  {
    value: lipstickRed,
    text: 'Lipstick Red',
  },
  {
    value: forestGreen,
    text: 'Forest Green',
  },
  {
    value: oceanBlue,
    text: 'Ocean Blue',
  },
  {
    value: seaShellPink,
    text: 'Sea Shell Pink',
  },
  {
    value: nightBlack,
    text: 'Night Black',
  },
  {
    value: citrusOragne,
    text: 'Citrus Orange',
  },
  {
    value: poopBrown,
    text: 'Poop Brown', 
  },
];
