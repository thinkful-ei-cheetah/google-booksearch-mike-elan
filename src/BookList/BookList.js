import React, {Component} from 'react';
import Book from '../Book/Book';

export default class BookList extends Component {
  render() {
    const books = [<Book />]
    return (
      
      <ul className='booklist'>
        {books}
      </ul>
    )
  }
}