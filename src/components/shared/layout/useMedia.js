import { useMediaQuery } from 'react-responsive';

export function useMobile() {
  return useMediaQuery({ query: 'screen and (max-width: 500px)' });
}
