import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookstoreName: "Good bookstore",
      clicked: true,
      textColor: "black",
      backgroundColor: "rgb(99, 71, 30)"
    }
  }

  handleClick = () => {
    if (this.state.clicked) {
      this.setState({
        bookstoreName: "Good bookstore clicked",
        textColor: "white",
        backgroundColor: "cyan",
        clicked: !this.state.clicked
      });
    } else {
      this.setState({
        textColor: "black",
        backgroundColor: "rgb(99, 71, 30)",
        bookstoreName: "Good bookstore",
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
        <div className="row justify-content-end">
          <Link to="/admin" ><button className="btn btn-info btn-goAdmin">Administrator Panel</button></Link>
        </div>
      </div>
    );
  }
}
export default Header;