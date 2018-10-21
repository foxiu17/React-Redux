import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import Footer from './Components/'


import './App.css';
import Footer from './Components/Footer/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      order: []
    }
  }

  addToOrder = (book) => {
    const updateOrder = [...this.state.order];
    updateOrder.push(book);

    this.setState({
      order: updateOrder
    });
  }

  removeFromOrder = (title) => {
    const updateOrder = [...this.state.order];
    this.setState({
      order: updateOrder.filter( book => title !== book.name)
    });
  }

  render() {
    return (
      <div className="app container">
        <Header />
        <div className="row">
          <Order 
            order={this.state.order}
            remove={this.removeFromOrder}
          />
          <Inventory
            books={this.state.books}
            addToOrder={this.addToOrder}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
