import React, { Component } from 'react';
import { firebaseApp } from '../../fbase';

import './LogOut.css';

class LogOut extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }

  logOut = () => {
    firebaseApp.auth().signOut();
    this.props.handleLoggedOut(this.state.loggedIn);
    localStorage.removeItem('loggedIn');
  }

  render() {
    return (
      <button className="btn btn-warning btn-logOut" onClick={this.logOut}>Log out</button>
    );
  }
}
export default LogOut;