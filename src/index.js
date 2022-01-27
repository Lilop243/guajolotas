import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Formulario from './components/Formulario';
import Search from './components/Search';





ReactDOM.render(
  <React.StrictMode>
    <Search/>
    <Formulario/>
    <App/>

    
  </React.StrictMode>,
  document.getElementById('root')
);

