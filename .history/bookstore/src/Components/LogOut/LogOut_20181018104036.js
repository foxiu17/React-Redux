import React, { Component } from 'react';
import { firebaseApp } from '../../fbase';

import './LogOut.css';

class LogOut extends Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.logOut}></button>
    );
  }
}
export default LogOut;