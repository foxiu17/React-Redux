import React, { Component } from 'react';
import { fbase } from '../../fbase';
import LoginForm from '../LoginForm/LoginForm';
import './AdminPanel.css';
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
        description: "",
        onStock: true,
        image: ""
      },
      loggedIn: false,
    };
  }

  logIn = (logged) => {
    this.setState({
      loggedIn: logged
    });
  }

  removeBook = (index) => {
    const updateBooks = this.booksList.;
    
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
        return <AdminPanelBooksList key={index} book={book} remove={this.removeBook}/>
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
              <AddBookForm />
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