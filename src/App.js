import './App.css';
import React from 'react';
import Filter from './components/Filter';
import Add from './components/Add';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Filter />
      <Add />
      <List />
    </div>
  );
}

export default App;
