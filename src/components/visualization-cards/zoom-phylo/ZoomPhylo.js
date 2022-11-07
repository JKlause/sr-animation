import React, { Fragment, useState } from 'react';
import { Zoom } from '@vx/zoom';
import { localPoint } from '@vx/event';
import { RectClipPath } from '@vx/clip-path';
import { scaleLinear } from '@vx/scale';
import genPhyllotaxis from '@vx/mock-data/lib/generators/genPhyllotaxis';

import { useNarrowView } from 'hooks/useMedia';
import createCustomizationState from './createZoomPhyloState';

import FillParent from 'shared/layout/FillParent';
import HeaderWithDropdownButton from 'shared/components/HeaderWithDropdownButton';
import CustomizeDropdown from './customizeDropdown/CustomizeDropdown';
import styles from './ZoomPhylo.scss';
import ZoomControls from './ZoomControls';


const initialTransform = {
  scaleX: 1.27,
  scaleY: 1.27,
  translateX: -211.62,
  translateY: 162.59,
  skewX: 0,
  skewY: 0,
};


export default function PhyloZoom({ width, height }) {
  const isNarrowView = useNarrowView();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
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
    resetState,
    isInitialState,
  } = createCustomizationState();

  const dropdownState = {
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
  };


  if(!width) return <div></div>;

  const points = [...new Array(numberOfPoints)];

  const colorScale = scaleLinear({ 
    domain: [colorScaleDomainMin, colorScaleDomainMax], 
    range: [colorScaleRangeMin, colorScaleRangeMax] 
  });

  const sizeScale = scaleLinear({ 
    domain: [0, sizeScaleDomainMax], 
    range: [sizeScaleRangeMin, sizeScaleRangeMax] 
  });

  const generator = genPhyllotaxis({ 
    radius: phyloRadius, 
    width: width, 
    height: height 
  });

  const phyllotaxis = points.map((d, i) => generator(i));
  

  return (
    <FillParent className={styles.ZoomPhylo}>

      <HeaderWithDropdownButton 
        className="header"
        headerText={`${isNarrowView ? '' : 'Some '}Beautiful Stuff :-)`}
        buttonText="Customize"
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}/>

      <CustomizeDropdown
        isOpen={isDropdownOpen} 
        state={dropdownState}
        menuHeight={height - 20}
        handleResetClick={() => resetState()}
        isResetEnabled={!isInitialState}/>

      <Zoom
        width={width}
        height={height}
        scaleXMin={1 / 2}
        scaleXMax={4}
        scaleYMin={1 / 2}
        scaleYMax={4}
        transformMatrix={initialTransform}>

        {
          zoom => (
            <div className="zoom-container">
              <svg
                width={width}
                height={height}
                style={{ cursor: zoom.isDragging ? 'grabbing' : 'grab' }}>
                
                <RectClipPath 
                  id="zoom-clip" 
                  width={width} 
                  height={height} />

                <rect 
                  width={width} 
                  height={height} 
                  rx={0} 
                  fill={backgroundColor} />

                <g transform={zoom.toString()}>
                  {
                    phyllotaxis.map(({ x, y }, i) => (
                      <Fragment key={`dot-${i}`}>
                        <circle
                          cx={x}
                          cy={y}
                          r={i > 500 && 1000 - i > 0 ? sizeScale(1000 - i) : sizeScale(i)}
                          fill={colorFamily(colorScale(i))}/>
                      </Fragment>
                    ))
                  }
                </g>
                
                <rect
                  width={width}
                  height={height}
                  rx={0}
                  fill="transparent"
                  onTouchStart={zoom.dragStart}
                  onTouchMove={zoom.dragMove}
                  onTouchEnd={zoom.dragEnd}
                  onMouseDown={zoom.dragStart}
                  onMouseMove={zoom.dragMove}
                  onMouseUp={zoom.dragEnd}
                  onMouseLeave={() => {
                    if(zoom.isDragging) zoom.dragEnd();
                  }}
                  onDoubleClick={event => {
                    const point = localPoint(event) || { x: 0, y: 0 };
                    zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });
                  }}/>
              </svg>

              <ZoomControls zoom={zoom} />
            </div>
          )
        }
      </Zoom>
    </FillParent>
  );
}
