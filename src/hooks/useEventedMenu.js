import { useState, useRef, useEffect, useContext } from 'react';
import { DocumentContext } from '../EventedDocument';

export default function useEventedMenu(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);
  const registerListener = useContext(DocumentContext);
  const ref = useRef();

  const handleClick = e => {
    if(!ref.current.contains(e.target)) setIsOpen(false);
  };
  
  useEffect(() => {
    if(!isOpen) return;
    return registerListener(handleClick);
  }, [isOpen]);

  return [ref, isOpen, setIsOpen];
}
