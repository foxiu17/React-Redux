import React, { Component } from 'react';
import InventoryItem from '../Inventory-item/Inventory-item';

import './Inventory.css';

class Inventory extends Component {
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