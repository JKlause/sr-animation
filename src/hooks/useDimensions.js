import { useState, useLayoutEffect } from 'react';

export default function useDimensions(ref, isLandscape, isFillParent) {
  const [dim, setDim] = useState({
    width: 0,
    height: 0,
  });


  const ro = new ResizeObserver(entries => {
    for(let entry of entries) {
      const cr = entry.contentRect;

      if(isFillParent) {
        setDim({
          width: (cr.width - 154) < 796 ? (cr.width - 154) : 796,
          height: (cr.height - 188) < 462 ? (cr.height - 188) : 462,
        });
      }

      else if(isLandscape) {
        setDim({
          width: (cr.width - 184) < 770 ? (cr.width - 184) : 770,
          height: (cr.height - 154) / 2 < 248 ? (cr.height - 154) / 2 : 248,
        });
      }

      else {
        setDim({
          width: (cr.width - 154) / 2 < 400 ? (cr.width - 154) / 2 : 400,
          height: (cr.height - 154) < 496 ? (cr.height - 154) : 496,
        });
      }
    }
  });


  useLayoutEffect(() => {
    if(ref && ref.current) ro.observe(ref.current);
  }, [ref.current]);

  
  return dim;
}
