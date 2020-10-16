import { useMediaQuery } from 'react-responsive';

export function useNarrowView() {
  return useMediaQuery({ query: 'screen and (max-width: 500px)' });
}
