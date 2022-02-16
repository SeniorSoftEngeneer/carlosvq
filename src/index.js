import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import{ createThemeContext } from './context/ThemeContext';

ReactDOM.render(
  // <createThemeContext.Provider value='red' >
     <React.StrictMode>
      <App />
     </React.StrictMode>,
  // </createThemeContext.Provider>,
  document.getElementById('root')
);


