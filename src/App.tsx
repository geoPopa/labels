import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Add from "./label/add";
import List from './label/list';
import { useLocalStorage } from './util/localStorage';

function App() {

  const [labels, setLabels] = useLocalStorage('labels', []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='page-content'>
        <List labels={labels} setLabels={setLabels} />
        <Add labels={labels} setLabels={setLabels} />
      </div>
    </div>
  );
}

export default App;
