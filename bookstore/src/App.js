import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import AdminPanel from './Components/AdminPanel/AdminPanel';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      order: []
    }
  }

  addNewBook = (book) => {
    let updateBooks = [...this.state.books];
    updateBooks.push(book);

    this.setState({
      books: updateBooks
    });
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
    updateOrder.filter( book => title !== book.name);
    this.setState({
      order: updateOrder
    });

    // this.setState({
    //   order: this.state.order.filter( book => title !== book.name)
    // })
  }

  render() {
    return (
      <div className="app container">
        <Header />
        <div className="row">
          <Order 
            order={this.state.order}
          />
          <Inventory
            books={this.state.books}
            addToOrder={this.addToOrder}
          />
          <AdminPanel
            handleAddBook={this.addNewBook}
          />
        </div>
      </div>
    );
  }
}

export default App;
