import React, { Component } from 'react';
import { fbase, firebaseApp } from '../../fbase';
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
      loggedIn: false,
      email: "",
      passw: "",
      correctEmail: "marcin.foks6@wp.pl",
      correctPassw: "admin"
    };
  }

  authenticate = (event) => {
    event.preventDefault();
    // console.log(`${this.state.email} and ${this.state.passw}`);
    // if ((this.state.email === this.state.correctEmail) && (this.state.passw === this.state.correctPassw)) {
    //   let loggedInTrue = true;
    //   this.setState({
    //     loggedIn: loggedInTrue
    //   });
    // }else {
    //   alert("Incorrect email or password");
    // }

    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.passw)
      .then( () => {
        this.setState({
          loggedIn: true
        });
      })
      .catch( () => {
        alert("Incorrect email or password");
      })

  }

  handleLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
    let newBook = { ...this.state.book };

    if (Array.isArray(this.state.books)) {
      this.setState({
        books: [...this.state.books, newBook]
      });
    } else {
      this.setState({
        books: [newBook]
      });
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
      <div>
        {!this.state.loggedIn &&
          <div className="adminPanel col-md-4">
            <h1>LogIn Panel</h1>
            <form onSubmit={this.authenticate}>
              <label htmlFor="email">Email: </label>
              <input type="text" className="form-control" placeholder="email" name="email" onChange={this.handleLoginChange} value={this.state.email}></input>

              <label htmlFor="passw">Password: </label>
              <input type="password" className="form-control" placeholder="password" name="passw" onChange={this.handleLoginChange} value={this.state.passw}></input>

              <button className="btn btn-primary btn-login">Log in</button>
            </form>
          </div>
        }
        {this.state.loggedIn &&
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
        }

      </div>


    );
  }
}
export default AdminPanel;