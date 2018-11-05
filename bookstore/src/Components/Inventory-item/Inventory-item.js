import React, { Component } from 'react';
import './Inventory-item.sass';

class InventoryItem extends Component {

  handleSendBook = () => {
    this.props.addToOrder(this.props.book);
  }
  render() {
    return (
      <div className="inventory-item col-md-12">
        <div className="inventory-item-box row">
          <div className="col-md-2">
            <center><img src={this.props.book.image} alt={this.props.book.name} className="book-img" /></center>
          </div>
          <button type="button" onClick={this.handleSendBook} className="btn btn-success order-btn">Order</button>
          <div className="col-md-4">
            <div><span>Book title: </span>{this.props.book.name}</div>
            <div><span>Author: </span>{this.props.book.author}</div>
            <div><span>Genre: </span>{this.props.book.genre}</div>
            <div><span>Book on stock: </span>{String(this.props.book.onStock)}</div>
          </div>
          <div className="col-md-4">
            <div><span>Description: </span><br />{this.props.book.description}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default InventoryItem;