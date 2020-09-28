import { useState, useLayoutEffect } from 'react';

export default function useDimensions(ref) {
  const [dim, setDim] = useState({
    width: 0,
    height: 0,
  });

  const ro = new ResizeObserver(entries => {
    for(let entry of entries) {
      const cr = entry.contentRect;
      setDim({
        width: cr.width,
        height: cr.height,
      });
    }
  });

  useLayoutEffect(() => {
    if(ref && ref.current) ro.observe(ref.current);
  }, [ref.current]);

  return dim;
}
