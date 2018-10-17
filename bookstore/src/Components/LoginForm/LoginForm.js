import React, { Component } from 'react';
import { firebaseApp } from '../../fbase';
import './LoginForm.css';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      passw: "",
      loggedIn: true,
    }
  }

  authenticate = (event) => {
    event.preventDefault();

    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.passw)
      .then(() => {
        this.props.handleLoggedIn(this.state.loggedIn);
        localStorage.setItem("loggedIn", true);
      })
      .catch(() => {
        alert("Incorrect email or password");
      })
  }

  handleLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    return (
      <div className="col-md-4 offset-md-4 adminPanel">
        <h1>LogIn Panel</h1>
        <form onSubmit={this.authenticate}>

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="text" className="form-control" placeholder="email" name="email" onChange={this.handleLoginChange} value={this.state.email}></input>
          </div>

          <div className="form-group">
            <label htmlFor="passw">Password: </label>
            <input type="password" className="form-control" placeholder="password" name="passw" onChange={this.handleLoginChange} value={this.state.passw}></input>
          </div>

          <button className="btn btn-primary btn-login">Log in</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
