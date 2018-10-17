import React, { Component } from 'react';
import OrderItem from '../Order-item/Order-item';
import './Order.css';

class Order extends Component {
  render() {
    const orderBooks = this.props.order.map( (book, index) => {
      return <OrderItem key={index} book={book} remove={this.props.remove}/>
    })
    return (
      <div className="order col-md-4">
        <h1>Your order</h1>
        {orderBooks}
      </div>
    );
  }
}
export default Order;