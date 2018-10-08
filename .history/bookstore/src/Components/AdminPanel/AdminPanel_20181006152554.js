import React, { Component } from 'react';

import './AdminPanel.css';

class AdminPanel extends Component {

  constructor() {
    super();

    this.state =  {
      book : {
        name : "Wilki"
      }
    }
  }

  readForm = (event) => {
    let value = event.target.value;
    console.log(book);

    let book = {
      newBook
    }
    this.setState({
      book : book
    });
  }
  render() {
    return (
      <div className="adminPanel col-md-4">
        <h1>Hello World</h1>
        <form onChange={this.readForm}>
          <div className="form-group">
            <input type="text" placeholder="Book name" className="form-control" name="name" id="books_name" value={this.state.book.name}/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Book author" className="form-control" name="author" id="books_author" />
          </div>
          <div className="form-group">
            <textarea placeholder="Book description" className="form-control" name="desc" id="books_desc" />
          </div>
          <div className="form-group checkbox">
            <input type="checkbox" className="form-check-input" name="onStock" id="onStock" />
            <label htmlFor="onStock" className="form-check-label">On stock</label>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Book image" className="form-control" name="image" id="image" />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}
export default AdminPanel;