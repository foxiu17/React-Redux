import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Header from './Components/Header'
import Inventory from './Components/Inventory/Inventory';
import AdminPanel from './Components/AdminPanel/AdminPanel';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Order />
        <Inventory />
        <AdminPanel />
      </div>
    );
  }
}

export default App;
