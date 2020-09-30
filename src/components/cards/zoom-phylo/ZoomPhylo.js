import React, { Fragment, useState } from 'react';
import { interpolateBuPu } from 'd3-scale-chromatic';
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


const points = [...new Array(1000)];

const colorScale = scaleLinear({ domain: [0, 1000], range: [0, 1] });
const sizeScale = scaleLinear({ domain: [0, 600], range: [0.5, 8] });

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



export default function PhyloZoom({ containerRef }) {
  const isNarrowView = useNarrowView();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let { width, height } = useDimensions(containerRef, false, true);

  const generator = genPhyllotaxis({ radius: 10, width, height });
  const phyllotaxis = points.map((d, i) => generator(i));


  return (
    <FillParent className={styles.ZoomPhylo}>
      <HeaderWithDropdownButton 
        className="header"
        headerText={`${isNarrowView ? '' : 'Some '}Beautiful Sh*t :-)`}
        buttonText="Customize"
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}/>
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
                  rx={14} 
                  fill="transparent" />

                <g transform={zoom.toString()}>
                  {
                    phyllotaxis.map(({ x, y }, i) => (
                      <Fragment key={`dot-${i}`}>
                        <circle
                          cx={x}
                          cy={y}
                          r={i > 500 ? sizeScale(1000 - i) : sizeScale(i)}
                          fill={interpolateBuPu(colorScale(i))}/>
                      </Fragment>
                    ))
                  }
                </g>

                <rect
                  width={width}
                  height={height}
                  rx={14}
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
