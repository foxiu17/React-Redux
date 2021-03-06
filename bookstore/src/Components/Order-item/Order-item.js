import React, { Component } from 'react';
import './Order-item.sass';

class OrderItem extends Component {

  handleCLick = () => {
    this.props.remove(this.props.book.name);
  }

  render() {
    return (
      <div className="order-item">
        <div className="order-box row">
          <div className="col-md-8 title">
            <div><span>Book title: </span>{this.props.book.name}</div>
            <div><span>Author: </span>{this.props.book.author}</div>
          </div>
          <div>
            <button type="button" className="btn btn-danger" onClick={this.handleCLick}>Delete</button>
          </div>

        </div>
      </div>
    );
  }
}
export default OrderItem;