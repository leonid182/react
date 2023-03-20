import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Description } from './Description';
import { Description2 } from './Description2';

const init = {
  id: '1234',
  link: 'https://reactjs.org',
};

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Description init={init} name="me" />
        </header>
        <Description2 />
      </div>
      
    </>
  );
}

export default App;
