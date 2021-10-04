import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const appProps = {
  stayPlacesAmount: 350,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      {...appProps}
    />
  </React.StrictMode>,
  document.getElementById('root'));
