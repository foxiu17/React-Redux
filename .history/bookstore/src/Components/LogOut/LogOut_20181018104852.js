import React, { Component } from 'react';
import { firebaseApp } from '../../fbase';

import './LogOut.css';

class LogOut extends Component {
  constructor() {
    super();
    this.state = {
      logged
    }
  }

  logOut = () => {
    console.log("Click");
  }
  render() {
    return (
      <button className="btn btn-warning" onClick={this.logOut}>Log out</button>
    );
  }
}
export default LogOut;