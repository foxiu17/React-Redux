import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import AdminPanel from './Components/AdminPanel/AdminPanel';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <Header />
        <div className="row">
          <Order />
          <Inventory />
          <AdminPanel />
        </div>
      </div>
    );
  }
}

export default App;
