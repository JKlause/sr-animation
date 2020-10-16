import React, { createContext, useState } from 'react';

class Emitter {
  listeners = new Set();

  register(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  emit(event) {
    for(let listener of this.listeners) {
      listener(event);
    }
  }
}


export const DocumentContext = createContext(null);


export default function Document({ children }) {
  const [emitter] = useState(new Emitter());

  return (
    <DocumentContext.Provider value={listener => emitter.register(listener)}>
      <div onClick={e => emitter.emit(e)}>
        {children}
      </div>
    </DocumentContext.Provider>
  );
}
