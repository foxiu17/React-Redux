import React, { Component } from 'react';
import Link from 'react-router-dom';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookstoreName: "Bad books",
      clicked: true,
      textColor: "red",
      backgroundColor: "black"
    }
  }

  handleClick = () => {
    if (this.state.clicked) {
      this.setState({
        bookstoreName: "Good books",
        textColor: "white",
        backgroundColor: "cyan",
        clicked: !this.state.clicked
      });
    } else {
      this.setState({
        textColor: "red",
        backgroundColor: "black",
        bookstoreName: "Bad books",
      });
    }
    this.setState({

      clicked: !this.state.clicked
    })
  }

  render() {
    let headerCss = {
      color: this.state.textColor,
      backgroundColor: this.state.backgroundColor
    }

    return (
      <div className="header" onClick={this.handleClick} style={headerCss}>
        <center><h1>{this.state.bookstoreName}</h1></center>
        <Link to=""
      </div>
    );
  }
}
export default Header;