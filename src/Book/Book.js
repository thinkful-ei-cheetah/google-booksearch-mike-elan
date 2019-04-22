import React, {Component} from 'react';

export default class Book extends Component {
  render() {
    return (
      <li className="book-item">
        Title: {this.props.title} <br />
        Author: {this.props.author} <br />
        Description: {this.props.description} <br />
        Price: ${this.props.price} <br />
        <img src={this.props.thumbnail} alt="book-thumbnail"/> <br />
      </li>
    )
  }
}
