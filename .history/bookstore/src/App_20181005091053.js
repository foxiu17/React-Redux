import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Inventory from './Components/Inventory/Inventory';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Order />
        <Inventory />
        <Ad
        
      </div>
    );
  }
}

export default App;
