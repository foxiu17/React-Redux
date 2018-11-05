import React, { Component } from 'react';
import { fbase } from '../../fbase';
import InventoryItem from '../Inventory-item/Inventory-item';

import './Inventory.sass';

class Inventory extends Component {

  constructor() {
    super();

    this.state = {
      books: [],
      
    }
  }

  componentDidMount() {
    this.booksRef = fbase.syncState('bookstore/books', {
      context: this,
      state: 'books'
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.booksRef);
  }

  render() {
    let bookList = [];
    if (Array.isArray(this.state.books)) {
      bookList = this.state.books.map( book => {
        return <InventoryItem key={book.name} book={book} addToOrder={this.props.addToOrder}/>
      });
    }else {
      bookList = "";
    }
    
    return (
      <div className="inventory col-md-8">
        <h1>Book inventory</h1>
        <div className="row justify-content-between inventory-box">
          {bookList}
        </div>
        
      </div>
    );
  }
}
export default Inventory;