import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App';
import './App.css';


// AOS produces fade in effect on elements
AOS.init({
  duration: 1000,
  offset: 0,
});

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
