import React from 'react';
import { render } from 'react-dom';
import Document from 'shared/layout/Document';
import App from './components/App';
import './styles/reset.scss';
import './styles/main.scss';

render(
  <Document>
    <App />
  </Document>,
  document.getElementById('root')
);
