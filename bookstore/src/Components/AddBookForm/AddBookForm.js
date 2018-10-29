import React, { Component } from 'react';
import { fbase } from '../../fbase';
import './AddBookForm.css';

class AddBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // books: [],
      book: {
        name: "",
        author: "",
        genre: "",
        description: "",
        onStock: true,
        image: ""
      },
      genre: ["Select...", "Crime", "Science", "Science-fiction", "Adventure", "Biography", "Horror", "Novel", "Fantasy", "Scientific"]
    }
  }

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

    if(!this.props.editBooks) {
      let newBook = { ...this.state.book };
      this.props.addNewBook(newBook);
      // if (Array.isArray(this.state.books)) {
      //   this.setState({
      //     books: [...this.state.books, newBook]
      //   });
      // } else {
      //   this.setState({
      //     books: [newBook]
      //   });
      // }
    }else {
      let newBook = {
        ...this.props.book,
        ...this.state.book
      }

      this.props.editBook(this.props.book.name, newBook);
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

    const selectValues = this.state.genre.map((value, index) => {
      return <option key={index} value={value}>{value}</option>
    })

    const label = this.props.editMode?"Edit":"Add";

    return (
      <div className="adminPanel col-md-4">
        <h1>Admin Panel</h1>
        <form onSubmit={this.addNewBook}>
          <div className="form-group">
            <input type="text" placeholder="Book name" className="form-control" name="name" id="books_name" onChange={this.handleChange} value={this.state.book.name || this.props.book.name} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Book author" className="form-control" name="author" id="books_author" onChange={this.handleChange} value={this.state.book.author || this.props.book.author} />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Genre</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" onChange={this.handleChange} name="genre" value={this.state.book.genre || this.props.book.genre}>
              {selectValues}
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Book description" className="form-control" name="description" id="books_desc" onChange={this.handleChange} value={this.state.book.description || this.props.book.description} />
          </div>
          <div className="form-group checkbox">
            <input type="checkbox" className="form-check-input" name="onStock" id="onStock" onChange={this.handleChange} value={this.state.book.onStock || this.props.book.onStock} />
            <label htmlFor="onStock" className="form-check-label">On stock</label>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Book image" className="form-control" name="image" id="image" onChange={this.handleChange} value={this.state.book.image || this.props.book.image} />
          </div>
          <button type="submit" className="btn btn-primary">{label}</button>
        </form>
      </div>
    );
  }
}
export default AddBookForm;