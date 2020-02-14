import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';


function App() {
  console.log(routes);
  return (
    <div className="App">
      <HashRouter>
      <h1>hello</h1>
      <Header />
      {routes}
      </HashRouter>
    </div>
  );
}


export default App;
