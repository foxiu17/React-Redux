import React, { Component } from 'react';
import './Inventory-item.css';

class InventoryItem extends Component {

  handleSendBook = () => {
    this.props.addToOrder(this.props.book);
  }
  render() {
    return (
      <div className="inventory-item">
        <div className="img-box row">
          <div className="col">
            <center><img src={this.props.book.image} alt={this.props.book.name} className="book-img"/></center>
          </div>
          <button type="button" onClick={this.handleSendBook} className="btn btn-success order-btn">Order</button>
        </div>
        <div className="title-author-box row">
          <div className="col">Book title: {this.props.book.name}</div>
          <div className="col">Author: {this.props.book.author}</div>
        </div>
        <div className="row">
          <div className="col">Book on stock: {String(this.props.book.onStock)}</div>
          <div className="col">Description: {this.props.book.description}</div>
        </div>

      </div>
    );
  }
}
export default InventoryItem;