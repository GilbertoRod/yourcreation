import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';


const reference= createContext("");
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <reference.Provider value=''>
      <App />
    </reference.Provider>

  </React.StrictMode>
);


