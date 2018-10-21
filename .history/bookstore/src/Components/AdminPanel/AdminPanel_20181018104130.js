import React, { Component } from 'react';
import { fbase } from '../../fbase';
import LoginForm from '../LoginForm/LoginForm';
import './AdminPanel.css';
import AddBookForm from '../AddBookForm/AddBookForm';
import 

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
    return (
      <div>
        {!this.state.loggedIn &&
          <React.Fragment>
            <LoginForm handleLoggedIn={this.logIn} />
          </React.Fragment>
        }
        {this.state.loggedIn &&
          <React.Fragment>
            <AddBookForm />
            <LogOut />
          </React.Fragment>
        }

      </div>


    );
  }
}
export default AdminPanel;