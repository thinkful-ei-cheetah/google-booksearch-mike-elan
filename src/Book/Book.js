import React, {Component} from 'react';

export default class Book extends Component {
  render() {
    return (
      <li className="book-item">
        {this.props.title}
        {this.props.author}
        {this.props.description}
        <img src={this.props.thumbnail} alt="book-thumbnail"/>
      </li>
    )
  }
}
