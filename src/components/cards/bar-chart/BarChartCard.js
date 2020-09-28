import React, { useRef } from 'react';
import { Group } from '@vx/group';
import { scaleBand, scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { Bar as VXBar } from '@vx/shape';
import useDimensions from 'hooks/useDimensions';
import Card from 'shared/layout/Card';
import styles from './BarChartCard.scss';


const xDataAccessor = d => d.label;
const yDataAccessor = d => d.value;


export default function BarChartCard({ data }) {
  const containerRef = useRef();
  let { width, height } = useDimensions(containerRef);
  width =  width < 273 ? 273 : width;
  height = height < 137 ? 137 : height;

  const xMax = width > 0 ? width - 80 : 10;
  const yMax = height > 0 ? height - 80 : 10;

  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(xDataAccessor),
    padding: 0.4,
  });

  const yScale = scaleLinear({
    range: [0, yMax],
    round: true,
    domain: [Math.max(...data.map(yDataAccessor)), 0],
  });

  const Bar = ({ x, y, width, height }) => (
    <VXBar
      x={x}
      y={y}
      width={width}
      height={height}
      fill="rgba(160, 116, 196, 0.69)"
      bottom={0}/>
  );


  return (
    <Card className={styles.BarChartCard}>

      <div className="graph-container disable-scrollbars" ref={containerRef}>
        <svg width={width} height={height}>
          <Group top={25} left={55}>
            <AxisLeft 
              label="Votes" 
              scale={yScale} 
              left={10} 
              numTicks={4} />
            {
              data.map(datum => {
                const label = xDataAccessor(datum);
                const barWidth = xScale.bandwidth();
                const barHeight = yMax - yScale(yDataAccessor(datum));
                const barX = xScale(label);
                const barY = yMax - barHeight;
              
                return (
                  <Bar 
                    key={`bar-${label}`} 
                    x={barX} 
                    y={barY} 
                    width={barWidth} 
                    height={barHeight} />
                );
              })
            }
            <AxisBottom 
              label="Staff Member" 
              scale={xScale} 
              top={yMax}
              labelOffset={15} />
          </Group>
        </svg>
      </div>
    </Card>
  );
}
