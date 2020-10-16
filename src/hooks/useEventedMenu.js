import { useState, useRef, useEffect, useContext } from 'react';
import { DocumentContext } from 'shared/layout/EventedDocument';

export default function useEventedMenu(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);
  const register = useContext(DocumentContext);
  const ref = useRef();

  const handleClick = e => {
    if(!ref.current.contains(e.target)){
      setIsOpen(false);
    }
  };
  
  useEffect(() => {
    if(!isOpen) return;
    return register(handleClick);
  }, [isOpen]);

  return [ref, isOpen, setIsOpen];
}
