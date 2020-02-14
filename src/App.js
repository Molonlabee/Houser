import React, { Component } from './node_modules/react';
import './Components/Header/Header';
import './Components/Dashboard/Dashboard';
import './Components/Wizard/Wizard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    )
  }
}

export default App;
