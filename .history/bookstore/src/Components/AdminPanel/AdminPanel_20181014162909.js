import React, { Component } from 'react';
// import firebase from 'firebase';
import { fbase } from '../../fbase';
import './AdminPanel.css';

class AdminPanel extends Component {

  constructor() {
    super();

    this.state = {
      books: [],
      book: {
        name: "",
        author: "",
        description: "",
        onStock: true,
        image: ""
      },

    };
  };

  handleChange = (event) => {

    let newBook;

    if (event.target.name === "onStock") {
      newBook = {
        ...this.state.book,
        [event.target.name]: event.target.checked
      }
    } else {
      newBook = {
        ...this.state.book,
        [event.target.name]: event.target.value
      }
    }
    this.setState({
      book: newBook
    });
  }

  addNewBook = (event) => {
    event.preventDefault();
    let newBook = { ...this.state.book };
    
    if(Array.isArray(this.state.book)) {
      this.setState({
        books: [...this.state.books, newBook]
      });
    }else {
      this.setState({
        
      })
    }
    this.setState({
      
      book: {
        name: "",
        author: "",
        description: "",
        onStock: true,
        image: ""
      }
    });
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
    return (
      <div className="adminPanel col-md-4">
        <h1>Admin Panel</h1>
        <form onSubmit={this.addNewBook}>
          <div className="form-group">
            <input type="text" placeholder="Book name" className="form-control" name="name" id="books_name" onChange={this.handleChange} value={this.state.book.name} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Book author" className="form-control" name="author" id="books_author" onChange={this.handleChange} value={this.state.book.author} />
          </div>
          <div className="form-group">
            <textarea placeholder="Book description" className="form-control" name="description" id="books_desc" onChange={this.handleChange} value={this.state.book.description} />
          </div>
          <div className="form-group checkbox">
            <input type="checkbox" className="form-check-input" name="onStock" id="onStock" onChange={this.handleChange} value={this.state.book.onStock} />
            <label htmlFor="onStock" className="form-check-label">On stock</label>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Book image" className="form-control" name="image" id="image" onChange={this.handleChange} value={this.state.book.image} />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}
export default AdminPanel;