import React, { Component } from 'react';
import { fbase } from '../../fbase';
import LoginForm from '../LoginForm/LoginForm';
import './AdminPanel.sass';
import AddBookForm from '../AddBookForm/AddBookForm';
import LogOut from '../LogOut/LogOut';
import AdminPanelBooksList from '../AdminPanelBooksList/AdminPanelBooksList';

class AdminPanel extends Component {

  constructor() {
    super();
    this.state = {
      books: [],
      book: {
        name: "",
        author: "",
        genre: "",
        description: "",
        onStock: true,
        image: ""
      },
      bookToEdit: {},
      loggedIn: false,
      editMode: false,
    };
  }

  addNewBook = (book) => {
    this.setState({
      books: [...this.state.books, book],
      editMode: false,
      bookToEdit: {},
      book: {}
    })
  }

  logIn = (logged) => {
    this.setState({
      loggedIn: logged
    });
  }

  removeBook = (name) => {
    const updateBooks = this.state.books.filter( book => name !== book.name);
    this.setState({
      books: updateBooks
    });
  }

  editModeOn = (book) => {
    this.setState({
      editMode: true,
      bookToEdit: book
    });
  }

  editBook = (oldTitle, bookAfterEdit) => {
    const newBooks = this.state.books.filter( book => oldTitle !== book.name);
    
    this.setState({
      books: [...newBooks, bookAfterEdit],
      editMode: false,
      bookToEdit: {},
      book: {}
    })
  }

  componentDidMount() {
    if (localStorage.getItem("loggedIn")) {
      this.setState({
        loggedIn: localStorage.getItem("loggedIn")
      });
    }
    this.booksRef = fbase.syncState('bookstore/books', {
      context: this,
      state: 'books'
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.booksRef);
  }

  render() {
    let booksList = [];
    if (Array.isArray(this.state.books)) {
      booksList = this.state.books.map( (book, index) => {
        return <AdminPanelBooksList key={index} book={book} remove={this.removeBook} edit={this.editModeOn}/>
      });
    }else {
      booksList = "";
    }

    return (
      <div>
        {!this.state.loggedIn &&
          <React.Fragment>
            <LoginForm handleLoggedIn={this.logIn} />
          </React.Fragment>
        }
        {this.state.loggedIn &&
          <React.Fragment>
            <div className="row">
              <AddBookForm
                addNewBook={this.addNewBook}
                book={this.state.bookToEdit}
                editMode={this.state.editMode}
                editBook={this.editBook}
              />
              <div className="admin__booksList col-md-7">
                <h2>Admin Panel- Book inventory</h2>
                {booksList}
              </div>
            </div>
            <LogOut handleLoggedOut={this.logIn} />
          </React.Fragment>
        }
      </div>
    );
  }
}
export default AdminPanel;