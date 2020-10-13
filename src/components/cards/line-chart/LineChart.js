import React from 'react';
import { Group } from '@vx/group';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { LinePath } from '@vx/shape';
import { curveLinear } from '@vx/curve';
import useDimensions from 'hooks/useDimensions';


const xDataAccessor = d => new Date(d.date).valueOf();
const yDataAccessor = d => d.ounces;


export default function LineChart({ data, containerRef, isLandscape }) {
  let { width, height } = useDimensions(containerRef, isLandscape);

  width =  width < 273 ? 273 : width;
  height = height < 137 ? 137 : height;

  const xMax = width > 0 ? width - 80 : 10;
  const yMax = height > 0 ? height - 80 : 10;

  const xScale = scaleTime({
    range: [0, xMax],
    round: true,
    domain: [Math.min(...data.map(xDataAccessor)), Math.max(...data.map(xDataAccessor))],
  });

  const yScale = scaleLinear({
    range: [0, yMax],
    round: true,
    domain: [Math.max(...data.map(yDataAccessor)), 0],
  });


  return (
    <svg width={width} height={height}>
      <Group top={25} left={65}>
        <AxisLeft 
          label="Ounces" 
          scale={yScale} 
          numTicks={4} />
          
        <AxisBottom 
          label="Day" 
          scale={xScale} 
          numTicks={data.length}
          top={yMax}
          labelOffset={15} />

        {
          data.map((point, pointIndex) => (
            <circle
              key={pointIndex}
              r={5}
              cx={xScale(xDataAccessor(point))}
              cy={yScale(yDataAccessor(point))}
              stroke="rgba(160, 116, 196, 0.69)"
              fill="rgba(160, 116, 196, 0.69)"
              fillOpacity={.9}
            />
          ))
        } 

        <LinePath
          data={data}
          curve={curveLinear}
          x={datum => xScale(xDataAccessor(datum))}
          y={datum => yScale(yDataAccessor(datum))}
          stroke="rgba(160, 116, 196, 0.69)"
          strokeWidth={3} />
      </Group>
    </svg>
  );
}
