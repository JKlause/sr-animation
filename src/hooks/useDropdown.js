import { useState, useRef, useEffect, useContext } from 'react';
import { DocumentContext } from 'shared/layout/EventedDocument';

export default function useDropdown(initial = false) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(initial);
  const register = useContext(DocumentContext);
  const ref = useRef();

  const handleClick = e => {
    if(!ref.current.contains(e.target)){
      setIsDropdownOpen(false);
    }
  };
  
  useEffect(() => {
    if(!isDropdownOpen) return;
    return register(handleClick);
  }, [isDropdownOpen]);

  return [ref, isDropdownOpen, setIsDropdownOpen];
}
