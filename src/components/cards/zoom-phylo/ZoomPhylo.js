import React, { Fragment, useState } from 'react';
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
import { Zoom } from '@vx/zoom';
import { localPoint } from '@vx/event';
import { RectClipPath } from '@vx/clip-path';
import genPhyllotaxis from '@vx/mock-data/lib/generators/genPhyllotaxis';
import { scaleLinear } from '@vx/scale';
import FillParent from 'shared/layout/FillParent';
import Button from 'shared/components/Button';
import useDimensions from 'hooks/useDimensions';
import styles from './ZoomPhylo.scss';
import { useNarrowView } from 'shared/layout/useMedia';
import HeaderWithDropdownButton from 'shared/components/HeaderWithDropdownButton';
import CustomizeDropdown from './CustomizeDropdown';


const initialTransform = {
  scaleX: 1.27,
  scaleY: 1.27,
  translateX: -211.62,
  translateY: 162.59,
  skewX: 0,
  skewY: 0,
};

const ControlButton = ({ className, text, handleClick }) => (
  <Button 
    className={className} 
    handleClick={() => handleClick()}
    isVisible={true}
    text={text}/>
);

//change radius


export default function PhyloZoom({ containerRef }) {
  const isNarrowView = useNarrowView();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let { width, height } = useDimensions(containerRef, false, true);



  const [colorFamily, setColorFamily] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  const [numberOfPoints, setNumberOfPoints] = useState(1000);
  const [phyloRadius, setPhyloRadius] = useState(10);

  const [colorScaleDomainMin, setColorScaleDomainMin] = useState(0);
  const [colorScaleDomainMax, setColorScaleDomainMax] = useState(1000);
  const [colorScaleRangeMin, setColorScaleRangeMin] = useState(0);
  const [colorScaleRangeMax, setColorScaleRangeMax] = useState(1);

  const [sizeScaleDomainMax, setSizeScaleDomainMax] = useState(600);
  const [sizeScaleRangeMin, setSizeScaleRangeMin] = useState(0.5);
  const [sizeScaleRangeMax, setSizeScaleRangeMax] = useState(8);

  const dropdownState = {
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
  };



  const points = [...new Array(numberOfPoints)];

  const colorScale = scaleLinear({ domain: [colorScaleDomainMin, colorScaleDomainMax], range: [colorScaleRangeMin, colorScaleRangeMax] });
  const sizeScale = scaleLinear({ domain: [0, sizeScaleDomainMax], range: [sizeScaleRangeMin, sizeScaleRangeMax] });

  const generator = genPhyllotaxis({ radius: phyloRadius, width, height });
  const phyllotaxis = points.map((d, i) => generator(i));


  return (
    <FillParent className={styles.ZoomPhylo}>
      <HeaderWithDropdownButton 
        className="header"
        headerText={`${isNarrowView ? '' : 'Some '}Beautiful Sh*t :-)`}
        buttonText="Customize"
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}/>
      <CustomizeDropdown 
        isOpen={isDropdownOpen} 
        state={dropdownState}/>
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
                          fill={
                            colorFamily == 1 
                              ? interpolateBuPu(colorScale(i)) 
                              : colorFamily == 2 
                                ? interpolateBrBG(colorScale(i)) 
                                : colorFamily == 3
                                  ? interpolateSpectral(colorScale(i))
                                  : colorFamily == 4
                                    ? interpolateViridis(colorScale(i))
                                    : colorFamily == 5
                                      ? interpolatePlasma(colorScale(i))
                                      : colorFamily == 6
                                        ? interpolateCool(colorScale(i))
                                        : colorFamily == 7
                                          ? interpolateYlGnBu(colorScale(i))
                                          : colorFamily == 8
                                            ? interpolateRainbow(colorScale(i))
                                            : colorFamily == 9
                                              ? interpolateCubehelixDefault(colorScale(i))
                                              : interpolatePiYG(colorScale(i))}/>
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

              <section className="controls">
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
            </div>
          )
        }
      </Zoom>
    </FillParent>
  );
}
