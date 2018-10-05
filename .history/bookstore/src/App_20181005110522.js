import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import AdminPanel from './Components/AdminPanel/AdminPanel';

class App extends Component {
  render() {
    return (
      <div className="">
        <h1>My App</h1>
        <Header />
        <Order />
        <Inventory />
        <AdminPanel />
      </div>
    );
  }
}

export default App;
