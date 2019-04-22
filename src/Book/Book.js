import React, {Component} from 'react';
import './Book.css';

export default class Book extends Component {
  render() {
    return (
      <li className="book-item">
        <div className='left'>
          <img src={this.props.thumbnail} alt="book-thumbnail"/>
        </div>
        <div className='right'>
          <h2>{this.props.title}</h2>
          <p>Author: {this.props.author.join(' | ')}</p>
          <p>Price: ${this.props.price}</p>
          <div className='description'>
            {this.props.description}
          </div>
        </div>
      </li>
    )
  }
}
