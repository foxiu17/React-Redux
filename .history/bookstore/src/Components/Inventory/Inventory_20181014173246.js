import React, { Component } from 'react';
import { fbase } from ''
// import InventoryItem from '../Inventory-item/Inventory-item';

import './Inventory.css';

class Inventory extends Component {

  constructor() {
    super();

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.booksRef = firebase.syncState('bookstore/books', {
      context: this,
      state: 'books'
    });
  }

  componentWillUnmount() {
    firebase.removeBinding(this.books);
  }
  render() {
    // const bookList = this.props.books.map( book => {
    //   return <InventoryItem book={book} addToOrder={this.props.addToOrder}/>
    // });
    return (
      <div className="inventory col-md-4">
        <h1>Book inventory</h1>
        {/* {bookList} */}
      </div>
    );
  }
}
export default Inventory;