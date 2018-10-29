import React, { Component } from 'react';
import "./AdminPanelBooksList.css";

class AdminPanelBooksList extends Component {

  handleClick = () => {
    this.props.remove(this.props.key);
  }


  render() {
    return (
      let item;
      if(this.props.books) {
        item = <div
      }
      // <div className="Admin__book-item row">
      //   <div className="col-md-2 Admin__img-box">
      //     <center><img src={this.props.book.image} alt={this.props.book.name} className="book-img" /></center>
      //   </div>
      //   <div className="col-md-4">
      //     <div><span>Book title: </span>{this.props.book.name}</div>
      //     <div><span>Author: </span>{this.props.book.author}</div>
      //     <div><span>Genre: </span>{this.props.book.genre}</div>
      //     <div><span>Book on stock: </span>{String(this.props.book.onStock)}</div>
      //   </div>
      //   <div className="col-md-4">
      //     <div><span>Description: </span>{this.props.book.description}</div>
      //   </div>
      //   <div className="col-md-2">
      //     <div className="row">
      //       <button className="btn btn-primary">Edit</button>
      //       <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
      //     </div>

      //   </div>
      // </div>

    );
  }
}
export default AdminPanelBooksList;