import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CARDS_AMOUNT = 5;
const cards = new Array(CARDS_AMOUNT).fill('').map((_, index) => index);

ReactDOM.render(
  <React.StrictMode>
    <App cards={cards}/>
  </React.StrictMode>,
  document.getElementById('root'));
