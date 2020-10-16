import { useState, useLayoutEffect } from 'react';

export default function useDimensions(ref, isLandscape, isFillParent) {
  const [dim, setDim] = useState({
    width: 0,
    height: 0,
  });


  const resizeObserver = new ResizeObserver(entries => {
    for(let entry of entries) {
      const cr = entry.contentRect;

      const setDimWithMaxDim = (dim, maxDim) => dim < maxDim ? dim : maxDim;

      if(isFillParent) {
        setDim({
          width: setDimWithMaxDim((cr.width - 154), 796),
          height: setDimWithMaxDim((cr.height - 188), 462),
        });
      }

      else if(isLandscape) {
        setDim({
          width: setDimWithMaxDim((cr.width - 184), 770),
          height: setDimWithMaxDim(((cr.height - 154) / 2), 248),
        });
      }

      else {
        setDim({
          width: setDimWithMaxDim(((cr.width - 154) / 2), 400),
          height: setDimWithMaxDim((cr.height - 154), 496),
        });
      }
    }
  });


  useLayoutEffect(() => {
    if(ref && ref.current) resizeObserver.observe(ref.current);
  }, [ref.current]);

  
  return dim;
}
