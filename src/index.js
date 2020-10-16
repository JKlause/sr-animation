import React from 'react';
import { render } from 'react-dom';
import EventedDocument from 'shared/layout/EventedDocument';
import App from './components/App';
import './styles/reset.scss';
import './styles/main.scss';

render(
  <EventedDocument>
    <App />
  </EventedDocument>,
  document.getElementById('root')
);
