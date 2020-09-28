import React, { useRef, useState } from 'react';
import { Group } from '@vx/group';
import { scaleBand, scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { Bar as VXBar } from '@vx/shape';
import useDimensions from 'hooks/useDimensions';
import Card from 'shared/layout/Card';
import styles from './BarChartCard.scss';


const xDataAccessor = d => d.label;
const yDataAccessor = d => d.value;
const multiplierSet = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


export default function BarChartCard({ data }) {
  const [renderedData, setRenderedData] = useState(data);
  const containerRef = useRef();
  let { width, height } = useDimensions(containerRef);

  width =  width < 273 ? 273 : width;
  height = height < 137 ? 137 : height;

  const xMax = width > 0 ? width - 80 : 10;
  const yMax = height > 0 ? height - 80 : 10;

  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: renderedData.map(xDataAccessor),
    padding: 0.4,
  });

  const yScale = scaleLinear({
    range: [0, yMax],
    round: true,
    domain: [Math.max(...renderedData.map(yDataAccessor)), 0],
  });

  const handleUpdateDataClick = () => {
    setRenderedData(renderedData.map(({ label, value }) => {
      const multiplier = multiplierSet[Math.floor(Math.random() * multiplierSet.length)];
      return {
        label,
        value: value + Math.floor((Math.random() * multiplier))
      };
    }));
  };

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

      <section className="graph-container disable-scrollbars" ref={containerRef}>
        <svg width={width} height={height}>
          <Group top={25} left={55}>
            <AxisLeft 
              label="Votes" 
              scale={yScale} 
              left={10} 
              numTicks={4} />
            {
              renderedData.map(datum => {
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
      </section>
      <section className="info">
        <h1>
          {'Favorite Instructor at Alchemy Poll Data'}
        </h1>
        <div className="sample-data">
          <h2>
            {'Sample Data'}
          </h2>
          <p>{'{'}</p>
          <p className="indent">{'label: name'}</p>
          <p className="indent">{'value: votes'}</p>
          <p>{'}'}</p>
        </div>
        <button onClick={() => handleUpdateDataClick()}>
          {'Update Data'}
        </button>

      </section>
    </Card>
  );
}
