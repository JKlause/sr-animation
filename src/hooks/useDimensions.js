import { useState, useLayoutEffect } from 'react';

export const IS_PORTRAIT = 'IS_PORTRAIT';
export const IS_LANDSCAPE = 'IS_LANDSCAPE';
export const IS_FILL_PARENT = 'IS_FILL_PARENT';


const setDimWithMaxMinDim = (dim, maxDim, minDim) => 
  dim > maxDim 
    ? maxDim 
    : dim < minDim 
      ? minDim
      : dim;
    

export default function useDimensions(ref, visualOrientation) {
  const [dim, setDim] = useState({
    width: 0,
    height: 0,
  });

  const resizeObserver = new ResizeObserver(entries => {
    for(let entry of entries) {
      const cr = entry.contentRect;

      if(visualOrientation === IS_FILL_PARENT) {
        setDim({
          width: setDimWithMaxMinDim((cr.width - 154), 796, 1),
          height: setDimWithMaxMinDim((cr.height - 188), 462, 1),
        });
      }

      else if(visualOrientation === IS_LANDSCAPE) {
        setDim({
          width: setDimWithMaxMinDim((cr.width - 184), 770, 100),
          height: setDimWithMaxMinDim(((cr.height - 154) / 2), 248, 137),
        });
      }

      else if(visualOrientation === IS_PORTRAIT) {
        setDim({
          width: setDimWithMaxMinDim(((cr.width - 154) / 2), 400, 273),
          height: setDimWithMaxMinDim((cr.height - 154), 496, 100),
        });
      }
    }
  });


  useLayoutEffect(() => {
    if(ref && ref.current) resizeObserver.observe(ref.current);
  }, [ref.current]);

  
  return dim;
}
