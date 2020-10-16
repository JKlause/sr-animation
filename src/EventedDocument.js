import React, { createContext, useState } from 'react';


export const DocumentContext = createContext(null);

export default function EventedDocument({ children }) {
  const [emitter] = useState(new Emitter());

  return (
    <DocumentContext.Provider value={listener => emitter.register(listener)}>
      <div onClick={e => emitter.emit(e)}>
        {children}
      </div>
    </DocumentContext.Provider>
  );
}



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
